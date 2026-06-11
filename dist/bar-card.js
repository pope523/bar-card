function t(t,e,i,a,n,r){function o(t){if(void 0!==t&&"function"!=typeof t)throw new TypeError("Function expected");return t}for(var s,c=a.kind,l="getter"===c?"get":"setter"===c?"set":"value",d=!e&&t?a.static?t:t.prototype:null,h=e||(d?Object.getOwnPropertyDescriptor(d,a.name):{}),u=!1,p=i.length-1;p>=0;p--){var m={};for(var b in a)m[b]="access"===b?{}:a[b];for(var b in a.access)m.access[b]=a.access[b];m.addInitializer=function(t){if(u)throw new TypeError("Cannot add initializers after decoration has completed");r.push(o(t||null))};var f=(0,i[p])("accessor"===c?{get:h.get,set:h.set}:h[l],m);if("accessor"===c){if(void 0===f)continue;if(null===f||"object"!=typeof f)throw new TypeError("Object expected");(s=o(f.get))&&(h.get=s),(s=o(f.set))&&(h.set=s),(s=o(f.init))&&n.unshift(s)}else(s=o(f))&&("field"===c?n.unshift(s):h[l]=s)}d&&Object.defineProperty(d,a.name,h),u=!0}function e(t,e,i){for(var a=arguments.length>2,n=0;n<e.length;n++)i=a?e[n].call(t,i):e[n].call(t);return a?i:void 0}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,a=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1]),t[0]);return new o(i,t,n)},c=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,b=globalThis,f=b.trustedTypes,g=f?f.emptyScript:"",_=b.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);void 0!==a&&d(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const r=a?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(a)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const a of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=a.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(void 0!==a&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=i.getPropertyOptions(a),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=a,this[a]=n.fromAttribute(e,t.type)??this._$Ej?.get(a)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const a=this.constructor,n=this[t];if(i??=a.getPropertyOptions(t),!((i.hasChanged??$)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,_?.({ReactiveElement:x}),(b.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,E=A.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,N=`<${P}>`,H=document,T=()=>H.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,M="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,R=/>/g,j=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,I=/"/g,D=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),W=new WeakMap,Z=H.createTreeWalker(H,129);function J(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,a=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=U;for(let e=0;e<i;e++){const i=t[e];let s,c,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,c=o.exec(i),null!==c);)d=o.lastIndex,o===U?"!--"===c[1]?o=z:void 0!==c[1]?o=R:void 0!==c[2]?(D.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=j):void 0!==c[3]&&(o=j):o===j?">"===c[0]?(o=n??U,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=void 0===c[3]?j:'"'===c[3]?I:V):o===I||o===V?o=j:o===z||o===R?o=U:(o=j,n=void 0);const h=o===j&&t[e+1].startsWith("/>")?" ":"";r+=o===U?i+N:l>=0?(a.push(s),i.slice(0,l)+k+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class X{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let n=0,r=0;const o=t.length-1,s=this.parts,[c,l]=K(t,e);if(this.el=X.createElement(c,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=Z.nextNode())&&s.length<o;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(k)){const e=l[r++],i=a.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);s.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?it:"@"===o[1]?at:tt}),a.removeAttribute(t)}else t.startsWith(C)&&(s.push({type:6,index:n}),a.removeAttribute(t));if(D.test(a.tagName)){const t=a.textContent.split(C),e=t.length-1;if(e>0){a.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],T()),Z.nextNode(),s.push({type:2,index:++n});a.append(t[e],T())}}}else if(8===a.nodeType)if(a.data===P)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=a.data.indexOf(C,t+1));)s.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,a){if(e===q)return e;let n=void 0!==a?i._$Co?.[a]:i._$Cl;const r=L(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,a)),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,a)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??H).importNode(e,!0);Z.currentNode=a;let n=Z.nextNode(),r=0,o=0,s=i[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new Q(n,n.nextSibling,this,t):1===s.type?e=new s.ctor(n,s.name,s.strings,this,t):6===s.type&&(e=new nt(n,this,t)),this._$AV.push(e),s=i[++o]}r!==s?.index&&(n=Z.nextNode(),r++)}return Z.currentNode=H,a}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),L(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new G(a,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const n of t)a===e.length?e.push(i=new Q(this.O(T()),this.O(T()),this,this.options)):i=e[a],i._$AI(n),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,a){const n=this.strings;let r=!1;if(void 0===n)t=Y(this,t,e,0),r=!L(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const a=t;let o,s;for(t=n[0],o=0;o<n.length-1;o++)s=Y(this,a[i+o],e,o),s===q&&(s=this._$AH[o]),r||=!L(s)||s!==this._$AH[o],s===F?t=F:t!==F&&(t+=(s??"")+n[o+1]),this._$AH[o]=s}r&&!a&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class at extends tt{constructor(t,e,i,a,n){super(t,e,i,a,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??F)===q)return;const i=this._$AH,a=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==F&&(i===F||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=A.litHtmlPolyfillSupport;rt?.(X,Q),(A.litHtmlVersions??=[]).push("3.3.0");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const a=i?.renderBefore??e;let n=a._$litPart$;if(void 0===n){const t=i?.renderBefore??null;a._$litPart$=n=new Q(e.insertBefore(T(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};st._$litElement$=!0,st.finalized=!0,ot.litElementHydrateSupport?.({LitElement:st});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:st}),(ot.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var dt,ht;function ut(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(dt||(dt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ht||(ht={}));var pt=["closed","locked","off"],mt=function(t,e,i,a){a=a||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=i,t.dispatchEvent(n),n},bt={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function ft(t,e){if(t in bt)return bt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var gt=function(t){mt(window,"haptic",t)},_t=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var a,n=ut(e),r="group"===n?"homeassistant":n;switch(n){case"lock":a=i?"unlock":"lock";break;case"cover":a=i?"open_cover":"close_cover";break;default:a=i?"turn_on":"turn_off"}return t.callService(r,a,{entity_id:e})}(t,e,pt.includes(t.states[e].state))},vt=function(t,e,i,a){if(a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(gt("warning"),confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?")))switch(a.action){case"more-info":(i.entity||i.camera_image)&&mt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":a.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),mt(window,"location-changed",{replace:i})}(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":i.entity&&(_t(e,i.entity),gt("success"));break;case"call-service":if(!a.service)return void gt("failure");var n=a.service.split(".",2);e.callService(n[0],n[1],a.service_data,a.target),gt("success");break;case"fire-dom-event":mt(t,"ll-custom",a)}};function yt(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,i)=>(Object.keys(i).forEach((a=>{const n=t[a],r=i[a];Array.isArray(n)&&Array.isArray(r)?t[a]=n.concat(...r):e(n)&&e(r)?t[a]=yt(n,r):t[a]=r})),t)),{})}function $t(t,e){if("number"==typeof e)return e;if(void 0===t)return 0;if("string"==typeof e){const t=parseFloat(e);if(!isNaN(t))return t}if(t.states[e]){const i=parseFloat(t.states[e].state);return isNaN(i)?0:i}return 0}function wt(t,e,i){const a=t[e],n=t.slice();return n.splice(e,1),n.splice(i,0,a),n}const xt="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",At="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",Et="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",St="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",kt=[{value:"inside",label:"Inside"},{value:"outside",label:"Outside"},{value:"off",label:"Off"}],Ct=[{name:"title",selector:{text:{}}},{name:"columns",selector:{number:{min:1,mode:"box"}}},{name:"stack",selector:{select:{mode:"dropdown",options:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}}},{name:"entity_row",selector:{boolean:{}}},{name:"entity_config",selector:{boolean:{}}}],Pt=[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"color",selector:{text:{}}},{name:"min",selector:{text:{}}},{name:"max",selector:{text:{}}},{name:"unit_of_measurement",selector:{text:{}}},{name:"decimal",selector:{number:{min:0,mode:"box"}}},{name:"height",selector:{text:{}}},{name:"width",selector:{text:{}}},{name:"attribute",selector:{text:{}}},{name:"direction",selector:{select:{mode:"dropdown",options:[{value:"right",label:"Right"},{value:"up",label:"Up"}]}}},{name:"target",selector:{text:{}}},{name:"complementary",selector:{boolean:{}}},{name:"limit_value",selector:{boolean:{}}}],Nt=[{name:"entity",selector:{entity:{}}}],Ht=[{name:"icon",selector:{select:{mode:"dropdown",options:kt}}},{name:"indicator",selector:{select:{mode:"dropdown",options:kt}}},{name:"name",selector:{select:{mode:"dropdown",options:kt}}},{name:"minmax",selector:{select:{mode:"dropdown",options:kt}}},{name:"value",selector:{select:{mode:"dropdown",options:kt}}}],Tt=[{name:"state",selector:{select:{mode:"dropdown",options:[{value:"on",label:"On"},{value:"off",label:"Off"}]}}},{name:"speed",selector:{number:{min:0,step:.5,mode:"box"}}}],Lt=[{name:"from",selector:{number:{mode:"box"}}},{name:"to",selector:{number:{mode:"box"}}},{name:"color",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"hide",selector:{boolean:{}}}],Ot={title:"Title",columns:"Columns",stack:"Stack",entity_row:"Entity row (no card background)",entity_config:"Use entity attributes as config",entity:"Entity",name:"Name",icon:"Icon",color:"Color",min:"Minimum",max:"Maximum",unit_of_measurement:"Unit of measurement",decimal:"Decimals",height:"Height",width:"Width",attribute:"Attribute",direction:"Direction",target:"Target marker",complementary:"Complementary value",limit_value:"Limit value to min/max",state:"Animation",speed:"Speed (seconds)",indicator:"Indicator",minmax:"Min / Max",value:"Value",from:"From",to:"To",hide:"Hide bar"},Mt={min:"A number or an entity id.",max:"A number or an entity id.",target:"Optional. A number or entity id to show a marker.",color:"CSS color, color name, or theme variable.",height:"e.g. 40px.",width:"e.g. 70%."};(()=>{let i,a,n=[lt("bar-card-editor")],r=[],o=st;(class extends o{static{a=this}static{const s="function"==typeof Symbol&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;t(null,i={value:a},n,{kind:"class",name:a.name,metadata:s},null,r),a=i.value,s&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:s}),e(a,r)}_hass;_config;set hass(t){const e=this._hass;this._hass=t,this.requestUpdate("hass",e)}get hass(){return this._hass}setConfig(t){const e={...t};!e.entities&&e.entity&&(e.entities=[{entity:e.entity}],delete e.entity),e.entities||(e.entities=[]),e.entities=e.entities.map((t=>"string"==typeof t?{entity:t}:{...t})),this._config=e,this.requestUpdate()}get _entities(){return this._config?.entities??[]}_computeLabel=t=>Ot[t.name]??t.name;_computeHelper=t=>Mt[t.name];render(){if(!this.hass||!this._config)return F;const t=this._config,e=this._entities;return B`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${Ct}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._baseConfigChanged}
        ></ha-form>

        <h3 class="section-title">Entities</h3>
        ${0===e.length?B`<p class="section-note">No entities yet. Add one below.</p>`:F}
        ${e.map(((t,i)=>this._renderEntityRow(t,i,e.length)))}
        <div class="add-row">
          <ha-icon-button
            .path=${xt}
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
              .data=${t}
              .schema=${Pt}
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
              .data=${t.positions??{}}
              .schema=${Ht}
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
              .data=${t.animation??{}}
              .schema=${Tt}
              .computeLabel=${this._computeLabel}
              @value-changed=${this._animationChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined>
          <div slot="header" role="heading" aria-level="3">Severity (color thresholds)</div>
          <div class="panel-content">
            ${this._renderSeverity(t.severity??[])}
            <div class="add-row">
              <ha-icon-button
                .path=${xt}
                label="Add threshold"
                @click=${this._addSeverity}
              ></ha-icon-button>
              <span>Add color threshold</span>
            </div>
          </div>
        </ha-expansion-panel>
      </div>
    `}_renderEntityRow(t,e,i){return B`
      <div class="row">
        <ha-form
          class="grow"
          .hass=${this.hass}
          .data=${t}
          .schema=${Nt}
          .computeLabel=${this._computeLabel}
          @value-changed=${t=>this._entityChanged(e,t)}
        ></ha-form>
        <div class="row-actions">
          <ha-icon-button
            .path=${Et}
            .disabled=${0===e}
            label="Move up"
            @click=${()=>this._moveEntity(e,-1)}
          ></ha-icon-button>
          <ha-icon-button
            .path=${St}
            .disabled=${e===i-1}
            label="Move down"
            @click=${()=>this._moveEntity(e,1)}
          ></ha-icon-button>
          <ha-icon-button
            .path=${At}
            label="Remove"
            @click=${()=>this._removeEntity(e)}
          ></ha-icon-button>
        </div>
      </div>
      <ha-expansion-panel class="entity-options" outlined>
        <div slot="header" role="heading" aria-level="4">
          Options${t.entity?B` — ${t.entity}`:F}
        </div>
        <div class="panel-content">
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${Pt}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${t=>this._entityChanged(e,t)}
          ></ha-form>
        </div>
      </ha-expansion-panel>
    `}_renderSeverity(t){return t&&0!==t.length?B`
      ${t.map(((e,i)=>B`
          <div class="row">
            <ha-form
              class="grow"
              .hass=${this.hass}
              .data=${e}
              .schema=${Lt}
              .computeLabel=${this._computeLabel}
              @value-changed=${t=>this._severityChanged(i,t)}
            ></ha-form>
            <div class="row-actions">
              <ha-icon-button
                .path=${Et}
                .disabled=${0===i}
                label="Move up"
                @click=${()=>this._moveSeverity(i,-1)}
              ></ha-icon-button>
              <ha-icon-button
                .path=${St}
                .disabled=${i===t.length-1}
                label="Move down"
                @click=${()=>this._moveSeverity(i,1)}
              ></ha-icon-button>
              <ha-icon-button
                .path=${At}
                label="Remove"
                @click=${()=>this._removeSeverity(i)}
              ></ha-icon-button>
            </div>
          </div>
        `))}
    `:B`<p class="section-note">No thresholds defined.</p>`}_updateConfig(t){const e={...this._config,...t};this._config=e,this.requestUpdate(),mt(this,"config-changed",{config:e})}_baseConfigChanged(t){if(t.stopPropagation(),!this._config)return;const e={...this._config,...t.detail.value};this._config=e,this.requestUpdate(),mt(this,"config-changed",{config:e})}_positionsChanged(t){t.stopPropagation(),this._updateConfig({positions:t.detail.value})}_animationChanged(t){t.stopPropagation(),this._updateConfig({animation:t.detail.value})}_entityChanged(t,e){e.stopPropagation();const i=[...this._entities];i[t]={...i[t],...e.detail.value},this._updateConfig({entities:i})}_addEntity(){const t=[...this._entities,{entity:""}];this._updateConfig({entities:t})}_removeEntity(t){const e=this._entities.filter(((e,i)=>i!==t));this._updateConfig({entities:e})}_moveEntity(t,e){const i=t+e,a=this._entities;i<0||i>=a.length||this._updateConfig({entities:wt(a,t,i)})}get _severity(){return this._config?.severity??[]}_severityChanged(t,e){e.stopPropagation();const i=[...this._severity];i[t]={...i[t],...e.detail.value},this._updateConfig({severity:i})}_addSeverity(){const t=[...this._severity,{from:0,to:100,color:""}];this._updateConfig({severity:t})}_removeSeverity(t){const e=this._severity.filter(((e,i)=>i!==t));this._updateConfig({severity:e})}_moveSeverity(t,e){const i=t+e,a=this._severity;i<0||i>=a.length||this._updateConfig({severity:wt(a,t,i)})}static get styles(){return s`
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
    `}})})();const Ut={en:{common:{version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_available:"Entity not available"}},nb:{common:{version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"}}};function zt(t,e="",i=""){const a=t.split(".")[0],n=t.split(".")[1],r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=Ut[r][a][n]}catch(t){o=Ut.en[a][n]}return void 0===o&&(o=Ut.en[a][n]),""!==e&&""!==i&&(o=o.replace(e,i)),o}const Rt=B`
  <style>
    .warning {
      display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;
    }
    #states {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    #states > * {
      margin-bottom: 8px;
    }
    #states > :last-child {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    #states > :first-child {
      margin-top: 0px;
    }
    ha-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    bar-card-row {
      display: flex;
      flex-grow: 1;
    }
    bar-card-row > div {
      flex-basis: 100%;
    }
    bar-card-row:empty {
      display: none;
    }
    bar-card-card {
      display: flex;
      flex-basis: 100%;
      flex-direction: row;
      margin-right: 8px;
    }
    bar-card-card:last-child {
      margin-right: 0px;
    }
    bar-card-background {
      cursor: pointer;
      flex-grow: 1;
      position: relative;
    }
    bar-card-iconbar {
      color: var(--ha-icon-color);
      align-items: center;
      align-self: center;
      display: flex;
      height: 40px;
      justify-content: center;
      position: relative;
      width: 40px;
    }
    bar-card-currentbar,
    bar-card-backgroundbar,
    bar-card-contentbar,
    bar-card-targetbar,
    bar-card-animationbar {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: var(--bar-card-border-radius, var(--ha-card-border-radius));
    }
    bar-card-contentbar {
      align-items: center;
      color: var(--primary-text-color);
      display: flex;
      justify-content: flex-start;
    }
    .contentbar-direction-right {
      flex-direction: row;
    }
    .contentbar-direction-up {
      flex-direction: column;
    }
    bar-card-backgroundbar {
      background: var(--bar-color);
      filter: brightness(0.5);
      opacity: 0.25;
    }
    bar-card-currentbar {
      background: linear-gradient(
        to var(--bar-direction),
        var(--bar-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
    }
    bar-card-targetbar {
      background: linear-gradient(
        to var(--bar-direction),
        #0000 var(--bar-percent),
        var(--bar-color) var(--bar-percent),
        var(--bar-color) var(--bar-target-percent),
        #0000 var(--bar-target-percent)
      );
      display: var(--target-display);
      filter: brightness(0.66);
      opacity: 0.33;
    }
    bar-card-markerbar {
      background: var(--bar-color);
      filter: brightness(0.75);
      opacity: 50%;
      position: absolute;
    }
    bar-card-animationbar {
      background-repeat: no-repeat;
      filter: brightness(0.75);
      opacity: 0%;
    }
    .animationbar-horizontal {
      background: linear-gradient(to var(--animation-direction), var(--bar-color) 0%, var(--bar-color) 1%, #0000 1%);
    }
    .animationbar-vertical {
      background: linear-gradient(to var(--animation-direction), #0000 0%, #0000 1%, var(--bar-color) 1%);
    }
    @keyframes animation-increase {
      0% {
        opacity: 50%;
        background-size: var(--bar-percent) 100%;
      }
      100% {
        opacity: 0%;
        background-size: 10000% 100%;
      }
    }
    @keyframes animation-decrease {
      0% {
        opacity: 0%;
        background-size: 10000%;
      }
      100% {
        opacity: 50%;
        background-size: var(--bar-percent);
      }
    }
    @keyframes animation-increase-vertical {
      0% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
      100% {
        background-size: 100% 0%;
        opacity: 0%;
      }
    }
    @keyframes animation-decrease-vertical {
      0% {
        background-size: 100% 100%;
        opacity: 0%;
      }
      100% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
    }
    bar-card-indicator {
      align-self: center;
      color: var(--bar-color);
      filter: brightness(0.75);
      height: 16px;
      width: 16px;
      position: relative;
      text-align: center;
      opacity: 0;
    }
    .indicator-direction-right {
      margin-right: -16px;
      left: -6px;
    }
    .indicator-direction-up {
      margin: 4px;
    }
    .indicator-show {
      animation: bar-card-indicator-fade 2s forwards;
    }
    @keyframes bar-card-indicator-fade-a {
      0% { opacity: 1; }
      100% { opacity: 0; }
    }
    @keyframes bar-card-indicator-fade-b {
      0% { opacity: 1; }
      100% { opacity: 0; }
    }
    bar-card-name {
      align-items: center;
      align-self: center;
      justify-content: center;
      margin: 4px;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-overflow: ellipsis;
    }
    bar-card-name,
    bar-card-value {
      line-height: 1;      /* makes line-height = font-size */
    }
    .name-outside {
      margin-left: 16px;
    }
    bar-card-value,
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      align-self: center;
      position: relative;
    }
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      font-size: 10px;
      margin: 2px;
      opacity: 0.5;
    }
    .min-direction-up {
      margin-top: auto;
    }
    .min-direction-right {
      margin-left: auto;
    }
    bar-card-divider {
      margin-left: 0px;
      margin-right: 0px;
    }
    bar-card-value {
      white-space: nowrap;
      margin: 4px;
    }
    .value-direction-right {
      margin-left: auto;
    }
    .value-direction-up {
      margin-top: auto;
    }
  </style>
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,jt=6;class Vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const It="ontouchstart"in window||navigator.maxTouchPoints>0;class Dt extends HTMLElement{holdTime;timer;held;cooldownStart;cooldownEnd;dblClickTimeout;constructor(){super(),this.holdTime=500,this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:It?"100px":"50px",height:It?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"});["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1}));const i=t=>{if(this.cooldownStart)return;let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime),this.cooldownStart=!0,window.setTimeout((()=>this.cooldownStart=!1),100)},a=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?mt(t,"action",{action:"hold"}):e.hasDoubleClick?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout((()=>{mt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),mt(t,"action",{action:"double_tap"})):mt(t,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout((()=>this.cooldownEnd=!1),100))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),t.addEventListener("keyup",(t=>{if(13===t.keyCode)return a(t)}));/iPhone OS 13_/.test(window.navigator.userAgent)||(t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",a))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null})}stopAnimation(){this.style.display="none"}}customElements.define("action-handler-bar",Dt);const Bt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-bar"))return t.querySelector("action-handler-bar");const e=document.createElement("action-handler-bar");return t.appendChild(e),e})();i&&i.bind(t,e)};const qt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Vt{update(t,[e,i]){t.type===jt&&Bt(t.element,i)}render(t,e){}});let Ft=(()=>{let i,a,n=[lt("bar-card")],r=[],o=st;return class extends o{static{a=this}static{const s="function"==typeof Symbol&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;t(null,i={value:a},n,{kind:"class",name:a.name,metadata:s},null,r),a=i.value,s&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:s}),e(a,r)}static async getConfigElement(){return document.createElement("bar-card-editor")}static getStubConfig(){return{}}_hass;_config;_configArray=[];_stateArray=[];_animationState=[];_indicatorToggle=[];_rowAmount=1;shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;for(const i of t._configArray)if(i.entity){const a=e.get("hass");if(a){if(a.states[i.entity]!==t.hass.states[i.entity])return!0;continue}return!0}return!1}(this,t,!1)}setConfig(t){if(!t)throw new Error(zt("common.invalid_configuration"));this._config=yt({animation:{state:"off",speed:5},color:"var(--bar-card-color, var(--primary-color))",columns:1,direction:"right",max:100,min:0,positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"}},t),"horizontal"==this._config.stack&&(this._config.columns=this._config.entities.length),this._configArray=function(t){const e=[];if(t.entities){for(const i of t.entities)if("string"==typeof i){const a=yt({},t);delete a.entities;const n=yt(a,{entity:i});e.push(n)}else if("object"==typeof i){const a=yt({},t);delete a.entities;const n=yt(a,i);e.push(n)}}else e.push(t);return e}(this._config),this._rowAmount=this._configArray.length/this._config.columns}_showMoreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}_handleAction(t){if(this._hass&&t.detail&&t.detail.action){const e=parseInt(t.target.dataset.configIndex||"0"),i=this._configArray[e]||this._config;!function(t,e,i,a){var n;"double_tap"===a&&i.double_tap_action?n=i.double_tap_action:"hold"===a&&i.hold_action?n=i.hold_action:"tap"===a&&i.tap_action&&(n=i.tap_action),vt(t,e,i,n)}(t.target,this._hass,i,t.detail.action)}}render(){return this._config&&this._hass?B`
      <ha-card
        .header=${this._config.title?this._config.title:null}
        style="${this._config.entity_row?"background: #0000; box-shadow: none;":""}"
      >
        <div
          id="states"
          class="card-content"
          style="${this._config.entity_row?"padding: 0px;":""} ${"up"==this._config.direction?"":"flex-grow: 0;"}"
        >
          ${this._createBarArray()}
        </div>
      </ha-card>
      ${Rt}
    `:B``}_createBarArray(){const t=[];for(let e=0;e<this._configArray.length;e++)(t.length+1)*this._config.columns==e&&t.push(this._config.columns),this._configArray.length==e+1&&t.push(this._configArray.length-t.length*this._config.columns);const e=[];for(let i=0;i<t.length;i++){const a=[];for(let e=0;e<t[i];e++){const t=i*this._config.columns+e,n=this._configArray[t],r=this._hass.states[n.entity];if(!r){a.push(B`
            <div class="warning" style="margin-bottom: 8px;">
              ${zt("common.entity_not_available")}: ${n.entity}
            </div>
          `);continue}let o;if(o=n.attribute?r.attributes[n.attribute]:r.state,n.severity&&this._computeSeverityVisibility(o,t))continue;let s=$t(this._hass,n.max),c=$t(this._hass,n.min);s<=c&&(0===s&&0===c?(c=0,s=100):s=c+Math.max(1,.1*Math.abs(c))),n.limit_value&&(o=Math.min(o,s),o=Math.max(o,c)),isNaN(Number(o))||(0==n.decimal?o=Number(o).toFixed(0):n.decimal&&(o=Number(o).toFixed(n.decimal)));const l=Math.round(2*this._getLineHeightPx()),d=n.height??l;let h,u,p,m="stretch",b="0px 0px 0px 13px",f="right",g="row",_="left",v="height: 100%; width: 2px;";switch(n.direction){case"right":f="right",_="left";break;case"up":b="0px",f="top",g="column-reverse",_="bottom",v="height: 2px; width: 100%;"}switch(p=this._computeSeverityIcon(o,t)?this._computeSeverityIcon(o,t):n.icon?n.icon:r.attributes.icon?r.attributes.icon:ft(ut(n.entity),o),n.positions.icon){case"outside":h=B`
              <bar-card-iconbar>
                <ha-icon icon="${p}"></ha-icon>
              </bar-card-iconbar>
            `;break;case"inside":u=B`
              <bar-card-iconbar>
                <ha-icon icon="${p}"></ha-icon>
              </bar-card-iconbar>
            `,b="0px";break;case"off":b="0px"}const y=n.name?n.name:r.attributes.friendly_name;let $,w,x,A,E,S,k;switch(n.positions.name){case"outside":$=B`
              <bar-card-name
                class="${n.entity_row?"name-outside":""}"
                style="${"up"==n.direction?"":n.width?`width: calc(100% - ${n.width});`:""}"
                >${y}</bar-card-name
              >
            `,b="0px";break;case"inside":w=B`
              <bar-card-name>${y}</bar-card-name>
            `}switch(x=isNaN(Number(o))?"":n.unit_of_measurement?n.unit_of_measurement:r.attributes.unit_of_measurement,n.positions.minmax){case"outside":A=B`
              <bar-card-min>${s}${x}</bar-card-min>
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max>${s}${x}</bar-card-max>
            `;break;case"inside":E=B`
              <bar-card-min class="${"up"==n.direction?"min-direction-up":"min-direction-right"}"
                >${c}${x}</bar-card-min
              >
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max> ${s}${x}</bar-card-max>
            `}switch(n.positions.value){case"outside":S=B`
              <bar-card-value class="${"up"==n.direction?"value-direction-up":"value-direction-right"}"
                >${n.complementary?s-o:o} ${x}</bar-card-value
              >
            `;break;case"inside":k=B`
              <bar-card-value
                class="${"inside"==n.positions.minmax?"":"up"==n.direction?"value-direction-up":"value-direction-right"}"
                >${n.complementary?s-o:o} ${x}</bar-card-value
              >
            `;break;case"off":b="0px"}let C="";o>this._stateArray[t]?(C="▲","up"==n.direction?this._animationState[t]="animation-increase-vertical":this._animationState[t]="animation-increase"):o<this._stateArray[t]?(C="▼","up"==n.direction?this._animationState[t]="animation-decrease-vertical":this._animationState[t]="animation-decrease"):this._animationState[t]=this._animationState[t],isNaN(Number(o))&&(C="");const P=this._computeBarColor(o,t);let N,H;const T=this._indicatorToggle[t]?"bar-card-indicator-fade-a":"bar-card-indicator-fade-b",L=C?`opacity:1; animation: ${T} 2s forwards;`:"";switch(n.positions.indicator){case"outside":N=B`
              <bar-card-indicator
                class="${"up"==n.direction?"":"indicator-direction-right"}"
                style="--bar-color: ${P}; ${L}"
                >${C}</bar-card-indicator
              >
            `;break;case"inside":H=B`
              <bar-card-indicator style="--bar-color: ${P}; ${L}">${C}</bar-card-indicator>
            `}const O=this._computePercent(o,t,s,c),M=this._computePercent(n.target,t,s,c);let U=O,z=this._computePercent(n.target,t,s,c);z<U&&(U=z,z=O);let R="";n.width&&(m="center",R=`width: ${n.width}`);const j=this._animationState[t];let V="right",I=100*O,D="animationbar-horizontal";"animation-increase-vertical"!=j&&"animation-decrease-vertical"!=j||(V="bottom",D="animationbar-vertical",I=100*(100-O)),a.push(B`
          <bar-card-card
            style="flex-direction: ${g}; align-items: ${m};"
          >
            ${h} ${N} ${$}
            <bar-card-background
              style="margin: ${b}; height: ${d}${"number"==typeof d?"px":""}; ${R}"
              data-config-index="${t}"
              ${qt(this,{hasDoubleClick:void 0!==n.double_tap_action})}
              @action=${this._handleAction}
            >
              <bar-card-backgroundbar style="--bar-color: ${P};"></bar-card-backgroundbar>
              ${"on"===n.animation.state?B`
                    <bar-card-animationbar
                      style="animation: ${j} ${n.animation.speed}s infinite ease-out;
                             --bar-percent: ${I}%;
                             --bar-color: ${P};
                             --animation-direction: ${V};"
                      class="${D}"
                    ></bar-card-animationbar>
                  `:""}
              <bar-card-currentbar
                style="--bar-color: ${P};
                       --bar-percent: ${O}%;
                       --bar-direction: ${f}"
              ></bar-card-currentbar>
              ${n.target?B`
                    <bar-card-targetbar
                      style="--bar-color: ${P};
                             --bar-percent: ${U}%;
                             --bar-target-percent: ${z}%;
                             --bar-direction: ${f};"
                    ></bar-card-targetbar>
                    <bar-card-markerbar
                      style="--bar-color: ${P};
                             --bar-target-percent: ${M}%;
                             ${_}: calc(${M}% - 1px);
                             ${v}"
                    ></bar-card-markerbar>
                  `:""}
              <bar-card-contentbar
                class="${"up"===n.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${u} ${H} ${w} ${E} ${k}
              </bar-card-contentbar>
            </bar-card-background>
            ${A} ${S}
          </bar-card-card>
        `),o!==this._stateArray[t]&&(this._stateArray[t]=o),this._indicatorToggle[t]=!this._indicatorToggle[t]}e.push(a)}let i="column";(this._config.columns||this._config.stack)&&(i="row");const a=[];for(const t of e)a.push(B`
        <bar-card-row style="flex-direction: ${i};">${t}</bar-card-row>
      `);return a}_computeBarColor(t,e){const i=this._configArray[e];let a;return a=i.severity?this._computeSeverityColor(t,e):"unavailable"==t?`var(--bar-card-disabled-color, ${i.color})`:i.color,a}_computeSeverityColor(t,e){const i=this._configArray[e],a=Number(t),n=i.severity;let r;return isNaN(a)?n.forEach((e=>{t==e.text&&(r=e.color)})):n.forEach((t=>{a>=t.from&&a<=t.to&&(r=t.color)})),null==r&&(r=i.color),r}_computeSeverityVisibility(t,e){const i=this._configArray[e],a=Number(t),n=i.severity;let r=!1;return isNaN(a)?n.forEach((e=>{t==e.text&&(r=e.hide)})):n.forEach((t=>{a>=t.from&&a<=t.to&&(r=t.hide)})),r}_computeSeverityIcon(t,e){const i=this._configArray[e],a=Number(t),n=i.severity;let r=!1;return!!n&&(isNaN(a)?n.forEach((e=>{t==e.text&&(r=e.icon)})):n.forEach((t=>{a>=t.from&&a<=t.to&&(r=t.icon)})),r)}_computePercent(t,e,i,a){const n=this._configArray[e],r=Number(t);if("unavailable"==t)return 0;if(isNaN(r))return 100;if(i===a)return r>=i?100:0;switch(n.direction){case"right-reverse":case"left-reverse":case"up-reverse":case"down-reverse":return 100-100*(r-a)/(i-a);default:return 100*(r-a)/(i-a)}}_getLineHeightPx(){try{const t=getComputedStyle(document.body),e=parseFloat(t.lineHeight);if(!isNaN(e)&&isFinite(e))return e;const i=parseFloat(t.fontSize)||14,a=parseFloat(t.getPropertyValue("--ha-line-height-normal"));if(!isNaN(a)&&isFinite(a))return i*a}catch{}return 20}getCardSize(){if(this._config.height){const t=this._config.height.toString();return Math.trunc(Number(t.replace("px",""))/50*this._rowAmount)+1}return this._rowAmount+1}set hass(t){const e=this._hass;this._hass=t,this.requestUpdate("hass",e)}get hass(){return this._hass}},a})();export{Ft as BarCard};
