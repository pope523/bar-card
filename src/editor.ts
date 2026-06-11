/* eslint-disable @typescript-eslint/no-explicit-any */
//
// bar-card visual editor — modernized
// Rewritten to use Home Assistant's schema-driven `ha-form` selectors plus
// small repeatable list editors for the `entities` and `severity` arrays.
// Replaces the legacy Polymer `paper-*` based editor, which broke after
// Home Assistant removed those elements from its frontend.
//
import { LitElement, html, css, nothing, CSSResultGroup, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor, fireEvent } from 'custom-card-helpers';

import { BarCardConfig } from './types';
import { arrayMove } from './helpers';

// mdi SVG path data (avoids depending on @mdi/js at build time).
const mdiPlus = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z';
const mdiDelete = 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z';
const mdiArrowUp = 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z';
const mdiArrowDown = 'M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z';

const POSITION_OPTIONS = [
  { value: 'inside', label: 'Inside' },
  { value: 'outside', label: 'Outside' },
  { value: 'off', label: 'Off' },
];

// Card-wide settings.
const CARD_SCHEMA: any[] = [
  { name: 'title', selector: { text: {} } },
  {
    name: 'columns',
    selector: { number: { min: 1, mode: 'box' } },
  },
  {
    name: 'stack',
    selector: {
      select: {
        mode: 'dropdown',
        options: [
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
        ],
      },
    },
  },
  { name: 'entity_row', selector: { boolean: {} } },
  { name: 'entity_config', selector: { boolean: {} } },
];

// Appearance options. Used both as the global defaults form and as the
// per-entity override form (a single entity entry can override any of these).
const APPEARANCE_SCHEMA: any[] = [
  { name: 'name', selector: { text: {} } },
  { name: 'icon', selector: { icon: {} } },
  { name: 'color', selector: { text: {} } },
  { name: 'min', selector: { text: {} } },
  { name: 'max', selector: { text: {} } },
  { name: 'unit_of_measurement', selector: { text: {} } },
  { name: 'decimal', selector: { number: { min: 0, mode: 'box' } } },
  { name: 'height', selector: { text: {} } },
  { name: 'width', selector: { text: {} } },
  { name: 'attribute', selector: { text: {} } },
  {
    name: 'direction',
    selector: {
      select: {
        mode: 'dropdown',
        options: [
          { value: 'right', label: 'Right' },
          { value: 'up', label: 'Up' },
        ],
      },
    },
  },
  { name: 'target', selector: { text: {} } },
  { name: 'complementary', selector: { boolean: {} } },
  { name: 'limit_value', selector: { boolean: {} } },
];

// Single entity field (entity picker).
const ENTITY_SCHEMA: any[] = [{ name: 'entity', selector: { entity: {} } }];

const POSITIONS_SCHEMA: any[] = [
  { name: 'icon', selector: { select: { mode: 'dropdown', options: POSITION_OPTIONS } } },
  { name: 'indicator', selector: { select: { mode: 'dropdown', options: POSITION_OPTIONS } } },
  { name: 'name', selector: { select: { mode: 'dropdown', options: POSITION_OPTIONS } } },
  { name: 'minmax', selector: { select: { mode: 'dropdown', options: POSITION_OPTIONS } } },
  { name: 'value', selector: { select: { mode: 'dropdown', options: POSITION_OPTIONS } } },
];

const ANIMATION_SCHEMA: any[] = [
  {
    name: 'state',
    selector: {
      select: {
        mode: 'dropdown',
        options: [
          { value: 'on', label: 'On' },
          { value: 'off', label: 'Off' },
        ],
      },
    },
  },
  { name: 'speed', selector: { number: { min: 0, step: 0.5, mode: 'box' } } },
];

const SEVERITY_SCHEMA: any[] = [
  { name: 'from', selector: { number: { mode: 'box' } } },
  { name: 'to', selector: { number: { mode: 'box' } } },
  { name: 'color', selector: { text: {} } },
  { name: 'icon', selector: { icon: {} } },
  { name: 'hide', selector: { boolean: {} } },
];

const LABELS: Record<string, string> = {
  title: 'Title',
  columns: 'Columns',
  stack: 'Stack',
  entity_row: 'Entity row (no card background)',
  entity_config: 'Use entity attributes as config',
  entity: 'Entity',
  name: 'Name',
  icon: 'Icon',
  color: 'Color',
  min: 'Minimum',
  max: 'Maximum',
  unit_of_measurement: 'Unit of measurement',
  decimal: 'Decimals',
  height: 'Height',
  width: 'Width',
  attribute: 'Attribute',
  direction: 'Direction',
  target: 'Target marker',
  complementary: 'Complementary value',
  limit_value: 'Limit value to min/max',
  state: 'Animation',
  speed: 'Speed (seconds)',
  indicator: 'Indicator',
  minmax: 'Min / Max',
  value: 'Value',
  from: 'From',
  to: 'To',
  hide: 'Hide bar',
};

const HELPERS: Record<string, string> = {
  min: 'A number or an entity id.',
  max: 'A number or an entity id.',
  target: 'Optional. A number or entity id to show a marker.',
  color: 'CSS color, color name, or theme variable.',
  height: 'e.g. 40px.',
  width: 'e.g. 70%.',
};

@customElement('bar-card-editor')
export class BarCardEditor extends LitElement implements LovelaceCardEditor {
  // Manual reactivity (matching bar-card.ts) avoids Lit decorator/tsconfig
  // mismatches under TypeScript 5 standard decorators.
  private _hass?: HomeAssistant;
  private _config?: BarCardConfig;

  public set hass(value: HomeAssistant | undefined) {
    const oldVal = this._hass;
    this._hass = value;
    this.requestUpdate('hass', oldVal);
  }

  public get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  public setConfig(config: BarCardConfig): void {
    const cfg: any = { ...config };
    // Normalize a single `entity` into the `entities` array so the editor has
    // one consistent model. This matches the original card editor's behavior
    // and is functionally identical to the card renderer.
    if (!cfg.entities && cfg.entity) {
      cfg.entities = [{ entity: cfg.entity }];
      delete cfg.entity;
    }
    if (!cfg.entities) {
      cfg.entities = [];
    }
    // Normalize string entries to objects for editing.
    cfg.entities = cfg.entities.map((e: any) => (typeof e === 'string' ? { entity: e } : { ...e }));
    this._config = cfg;
    this.requestUpdate();
  }

  private get _entities(): any[] {
    return (this._config as any)?.entities ?? [];
  }

  private _computeLabel = (schema: any): string => LABELS[schema.name] ?? schema.name;

  private _computeHelper = (schema: any): string | undefined => HELPERS[schema.name];

  protected render(): TemplateResult | typeof nothing {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const cfg: any = this._config;
    const entities = this._entities;

    return html`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${cfg}
          .schema=${CARD_SCHEMA}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._baseConfigChanged}
        ></ha-form>

        <h3 class="section-title">Entities</h3>
        ${entities.length === 0
          ? html`<p class="section-note">No entities yet. Add one below.</p>`
          : nothing}
        ${entities.map((item: any, index: number) => this._renderEntityRow(item, index, entities.length))}
        <div class="add-row">
          <ha-icon-button
            .path=${mdiPlus}
            label="Add entity"
            @click=${this._addEntity}
          ></ha-icon-button>
          <span>Add entity</span>
        </div>

        <ha-expansion-panel outlined>
          <div slot="header" role="heading" aria-level="3">Bar appearance (applies to all entities)</div>
          <div class="panel-content">
            <p class="section-note">
              These are defaults for every bar. Override them per entity in each entity's options.
            </p>
            <ha-form
              .hass=${this.hass}
              .data=${cfg}
              .schema=${APPEARANCE_SCHEMA}
              .computeLabel=${this._computeLabel}
              .computeHelper=${this._computeHelper}
              @value-changed=${this._baseConfigChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined>
          <div slot="header" role="heading" aria-level="3">Element positions</div>
          <div class="panel-content">
            <ha-form
              .hass=${this.hass}
              .data=${cfg.positions ?? {}}
              .schema=${POSITIONS_SCHEMA}
              .computeLabel=${this._computeLabel}
              @value-changed=${this._positionsChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined>
          <div slot="header" role="heading" aria-level="3">Animation</div>
          <div class="panel-content">
            <ha-form
              .hass=${this.hass}
              .data=${cfg.animation ?? {}}
              .schema=${ANIMATION_SCHEMA}
              .computeLabel=${this._computeLabel}
              @value-changed=${this._animationChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined>
          <div slot="header" role="heading" aria-level="3">Severity (color thresholds)</div>
          <div class="panel-content">
            ${this._renderSeverity(cfg.severity ?? [])}
            <div class="add-row">
              <ha-icon-button
                .path=${mdiPlus}
                label="Add threshold"
                @click=${this._addSeverity}
              ></ha-icon-button>
              <span>Add color threshold</span>
            </div>
          </div>
        </ha-expansion-panel>
      </div>
    `;
  }

  private _renderEntityRow(item: any, index: number, count: number): TemplateResult {
    return html`
      <div class="row">
        <ha-form
          class="grow"
          .hass=${this.hass}
          .data=${item}
          .schema=${ENTITY_SCHEMA}
          .computeLabel=${this._computeLabel}
          @value-changed=${(ev: CustomEvent) => this._entityChanged(index, ev)}
        ></ha-form>
        <div class="row-actions">
          <ha-icon-button
            .path=${mdiArrowUp}
            .disabled=${index === 0}
            label="Move up"
            @click=${() => this._moveEntity(index, -1)}
          ></ha-icon-button>
          <ha-icon-button
            .path=${mdiArrowDown}
            .disabled=${index === count - 1}
            label="Move down"
            @click=${() => this._moveEntity(index, 1)}
          ></ha-icon-button>
          <ha-icon-button
            .path=${mdiDelete}
            label="Remove"
            @click=${() => this._removeEntity(index)}
          ></ha-icon-button>
        </div>
      </div>
      <ha-expansion-panel class="entity-options" outlined>
        <div slot="header" role="heading" aria-level="4">
          Options${item.entity ? html` — ${item.entity}` : nothing}
        </div>
        <div class="panel-content">
          <ha-form
            .hass=${this.hass}
            .data=${item}
            .schema=${APPEARANCE_SCHEMA}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${(ev: CustomEvent) => this._entityChanged(index, ev)}
          ></ha-form>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderSeverity(severity: any[]): TemplateResult | typeof nothing {
    if (!severity || severity.length === 0) {
      return html`<p class="section-note">No thresholds defined.</p>`;
    }
    return html`
      ${severity.map(
        (item: any, index: number) => html`
          <div class="row">
            <ha-form
              class="grow"
              .hass=${this.hass}
              .data=${item}
              .schema=${SEVERITY_SCHEMA}
              .computeLabel=${this._computeLabel}
              @value-changed=${(ev: CustomEvent) => this._severityChanged(index, ev)}
            ></ha-form>
            <div class="row-actions">
              <ha-icon-button
                .path=${mdiArrowUp}
                .disabled=${index === 0}
                label="Move up"
                @click=${() => this._moveSeverity(index, -1)}
              ></ha-icon-button>
              <ha-icon-button
                .path=${mdiArrowDown}
                .disabled=${index === severity.length - 1}
                label="Move down"
                @click=${() => this._moveSeverity(index, 1)}
              ></ha-icon-button>
              <ha-icon-button
                .path=${mdiDelete}
                label="Remove"
                @click=${() => this._removeSeverity(index)}
              ></ha-icon-button>
            </div>
          </div>
        `,
      )}
    `;
  }

  // --- write-back helpers -------------------------------------------------

  private _updateConfig(patch: any): void {
    const config = { ...(this._config as any), ...patch };
    this._config = config;
    this.requestUpdate();
    fireEvent(this, 'config-changed', { config });
  }

  // Top-level forms (card settings + appearance defaults) are bound to the
  // whole config, so the event value already contains every other key
  // (entities, severity, actions, style, card_mod, ...) untouched.
  private _baseConfigChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    const config = { ...(this._config as any), ...ev.detail.value };
    this._config = config;
    this.requestUpdate();
    fireEvent(this, 'config-changed', { config });
  }

  private _positionsChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    this._updateConfig({ positions: ev.detail.value });
  }

  private _animationChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    this._updateConfig({ animation: ev.detail.value });
  }

  private _entityChanged(index: number, ev: CustomEvent): void {
    ev.stopPropagation();
    const entities = [...this._entities];
    entities[index] = { ...entities[index], ...ev.detail.value };
    this._updateConfig({ entities });
  }

  private _addEntity(): void {
    const entities = [...this._entities, { entity: '' }];
    this._updateConfig({ entities });
  }

  private _removeEntity(index: number): void {
    const entities = this._entities.filter((_: any, i: number) => i !== index);
    this._updateConfig({ entities });
  }

  private _moveEntity(index: number, dir: number): void {
    const target = index + dir;
    const entities = this._entities;
    if (target < 0 || target >= entities.length) return;
    this._updateConfig({ entities: arrayMove(entities, index, target) });
  }

  private get _severity(): any[] {
    return (this._config as any)?.severity ?? [];
  }

  private _severityChanged(index: number, ev: CustomEvent): void {
    ev.stopPropagation();
    const severity = [...this._severity];
    severity[index] = { ...severity[index], ...ev.detail.value };
    this._updateConfig({ severity });
  }

  private _addSeverity(): void {
    const severity = [...this._severity, { from: 0, to: 100, color: '' }];
    this._updateConfig({ severity });
  }

  private _removeSeverity(index: number): void {
    const severity = this._severity.filter((_: any, i: number) => i !== index);
    this._updateConfig({ severity });
  }

  private _moveSeverity(index: number, dir: number): void {
    const target = index + dir;
    const severity = this._severity;
    if (target < 0 || target >= severity.length) return;
    this._updateConfig({ severity: arrayMove(severity, index, target) });
  }

  static get styles(): CSSResultGroup {
    return css`
      .editor {
        display: flex;
        flex-direction: column;
      }
      .section-title {
        margin: 16px 0 4px;
      }
      .section-note {
        color: var(--secondary-text-color);
        font-size: 0.9em;
        margin: 4px 0 8px;
      }
      .row {
        display: flex;
        align-items: flex-end;
        gap: 4px;
      }
      .row .grow {
        flex: 1;
        min-width: 0;
      }
      .row-actions {
        display: flex;
        align-items: center;
        --mdc-icon-button-size: 36px;
      }
      .entity-options {
        margin: 4px 0 12px;
      }
      ha-expansion-panel {
        display: block;
        margin-top: 12px;
      }
      .panel-content {
        padding: 4px 0 8px;
      }
      .add-row {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 8px;
        color: var(--secondary-text-color);
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bar-card-editor': BarCardEditor;
  }
}
