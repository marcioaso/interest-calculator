const a={context:void 0,registry:void 0};function M(e){a.context=e}function _e(){return{...a.context,id:`${a.context.id}${a.context.count++}-`,count:0}}const Be=(e,n)=>e===n,oe=Symbol("solid-proxy"),Fe=Symbol("solid-track"),Q={equals:Be};let D=null,Ke=ve;const j=1,Y=2,Ne={owned:null,cleanups:null,context:null,owner:null},re={};var g=null;let c=null,Ue=null,p=null,E=null,C=null,Z=0;function R(e,n){const t=p,s=g,r=e.length===0,i=n===void 0?s:n,l=r?Ne:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>N(()=>_(l)));g=l,p=null;try{return L(o,!0)}finally{p=t,g=s}}function q(e,n){n=n?Object.assign({},Q,n):Q;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=r=>(typeof r=="function"&&(c&&c.running&&c.sources.has(t)?r=r(t.tValue):r=r(t.value)),ke(t,r));return[$e.bind(t),s]}function he(e,n,t){const s=te(e,n,!0,j);G(s)}function H(e,n,t){const s=te(e,n,!1,j);G(s)}function v(e,n,t){t=t?Object.assign({},Q,t):Q;const s=te(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,G(s),$e.bind(s)}function De(e){return e&&typeof e=="object"&&"then"in e}function Re(e,n,t){let s,r,i;arguments.length===2&&typeof n=="object"||arguments.length===1?(s=!0,r=e,i=n||{}):(s=e,r=n,i=t||{});let l=null,o=re,f=null,d=!1,u=!1,h="initialValue"in i,y=typeof s=="function"&&v(s);const m=new Set,[S,T]=(i.storage||q)(i.initialValue),[$,k]=q(void 0),[A,O]=q(void 0,{equals:!1}),[P,I]=q(h?"ready":"unresolved");if(a.context){f=`${a.context.id}${a.context.count++}`;let w;i.ssrLoadFrom==="initial"?o=i.initialValue:a.load&&(w=a.load(f))&&(o=w)}function V(w,b,x,B){return l===w&&(l=null,B!==void 0&&(h=!0),(w===o||b===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(B,{value:b})),o=re,c&&w&&d?(c.promises.delete(w),d=!1,L(()=>{c.running=!0,de(b,x)},!1)):de(b,x)),b}function de(w,b){L(()=>{b===void 0&&T(()=>w),I(b!==void 0?"errored":h?"ready":"unresolved"),k(b);for(const x of m.keys())x.decrement();m.clear()},!1)}function ne(){const w=X&&ae(X),b=S(),x=$();if(x!==void 0&&!l)throw x;return p&&!p.user&&w&&he(()=>{A(),l&&(w.resolved&&c&&d?c.promises.add(l):m.has(w)||(w.increment(),m.add(w)))}),b}function se(w=!0){if(w!==!1&&u)return;u=!1;const b=y?y():s;if(d=c&&c.running,b==null||b===!1){V(l,N(S));return}c&&l&&c.promises.delete(l);const x=o!==re?o:N(()=>r(b,{value:S(),refetching:w}));return De(x)?(l=x,"value"in x?(x.status==="success"?V(l,x.value,void 0,b):V(l,void 0,void 0,b),x):(u=!0,queueMicrotask(()=>u=!1),L(()=>{I(h?"refreshing":"pending"),O()},!1),x.then(B=>V(x,B,void 0,b),B=>V(x,void 0,Me(B),b)))):(V(l,x,void 0,b),x)}return Object.defineProperties(ne,{state:{get:()=>P()},error:{get:()=>$()},loading:{get(){const w=P();return w==="pending"||w==="refreshing"}},latest:{get(){if(!h)return ne();const w=$();if(w&&!l)throw w;return S()}}}),y?he(()=>se(!1)):se(!1),[ne,{refetch:se,mutate:T}]}function N(e){if(p===null)return e();const n=p;p=null;try{return e()}finally{p=n}}function jt(e,n,t){const s=Array.isArray(e);let r,i=t&&t.defer;return l=>{let o;if(s){o=Array(e.length);for(let d=0;d<e.length;d++)o[d]=e[d]()}else o=e();if(i)return i=!1,l;const f=N(()=>n(o,r,l));return r=o,f}}function ee(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Ye(e,n){D||(D=Symbol("error")),g=te(void 0,void 0,!0),g.context={...g.context,[D]:[n]},c&&c.running&&c.sources.add(g);try{return e()}catch(t){W(t)}finally{g=g.owner}}function Xe(){return g}function Mt(e,n){const t=g,s=p;g=e,p=null;try{return L(n,!0)}catch(r){W(r)}finally{g=t,p=s}}function qt(e){if(c&&c.running)return e(),c.done;const n=p,t=g;return Promise.resolve().then(()=>{p=n,g=t;let s;return X&&(s=c||(c={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),L(e,!1),p=g=null,s?s.done:void 0})}const[It,ge]=q(!1);function Ge(e){C.push.apply(C,e),e.length=0}function ce(e,n){const t=Symbol("context");return{id:t,Provider:ze(t),defaultValue:e}}function ae(e){return g&&g.context&&g.context[e.id]!==void 0?g.context[e.id]:e.defaultValue}function We(e){const n=v(e),t=v(()=>le(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}let X;function Je(){return X||(X=ce())}function $e(){const e=c&&c.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===j)G(this);else{const n=E;E=null,L(()=>z(this),!1),E=n}if(p){const n=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(n)):(p.sources=[this],p.sourceSlots=[n]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return e&&c.sources.has(this)?this.tValue:this.value}function ke(e,n,t){let s=c&&c.running&&c.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,n)){if(c){const r=c.running;(r||!t&&c.sources.has(e))&&(c.sources.add(e),e.tValue=n),r||(e.value=n)}else e.value=n;e.observers&&e.observers.length&&L(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=c&&c.running;l&&c.disposed.has(i)||((l?!i.tState:!i.state)&&(i.pure?E.push(i):C.push(i),i.observers&&Le(i)),l?i.tState=j:i.state=j)}if(E.length>1e6)throw E=[],new Error},!1)}return n}function G(e){if(!e.fn)return;_(e);const n=Z;ye(e,c&&c.running&&c.sources.has(e)?e.tValue:e.value,n),c&&!c.running&&c.sources.has(e)&&queueMicrotask(()=>{L(()=>{c&&(c.running=!0),p=g=e,ye(e,e.tValue,n),p=g=null},!1)})}function ye(e,n,t){let s;const r=g,i=p;p=g=e;try{s=e.fn(n)}catch(l){return e.pure&&(c&&c.running?(e.tState=j,e.tOwned&&e.tOwned.forEach(_),e.tOwned=void 0):(e.state=j,e.owned&&e.owned.forEach(_),e.owned=null)),e.updatedAt=t+1,W(l)}finally{p=i,g=r}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ke(e,s,!0):c&&c.running&&e.pure?(c.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=t)}function te(e,n,t,s=j,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:g,context:g?g.context:null,pure:t};return c&&c.running&&(i.state=0,i.tState=s),g===null||g!==Ne&&(c&&c.running&&g.pure?g.tOwned?g.tOwned.push(i):g.tOwned=[i]:g.owned?g.owned.push(i):g.owned=[i]),i}function Pe(e){const n=c&&c.running;if((n?e.tState:e.state)===0)return;if((n?e.tState:e.state)===Y)return z(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Z);){if(n&&c.disposed.has(e))return;(n?e.tState:e.state)&&t.push(e)}for(let s=t.length-1;s>=0;s--){if(e=t[s],n){let r=e,i=t[s+1];for(;(r=r.owner)&&r!==i;)if(c.disposed.has(r))return}if((n?e.tState:e.state)===j)G(e);else if((n?e.tState:e.state)===Y){const r=E;E=null,L(()=>z(e,t[0]),!1),E=r}}}function L(e,n){if(E)return e();let t=!1;n||(E=[]),C?t=!0:C=[],Z++;try{const s=e();return Qe(t),s}catch(s){t||(C=null),E=null,W(s)}}function Qe(e){if(E&&(ve(E),E=null),e)return;let n;if(c){if(!c.promises.size&&!c.queue.size){const s=c.sources,r=c.disposed;C.push.apply(C,c.effects),n=c.resolve;for(const i of C)"tState"in i&&(i.state=i.tState),delete i.tState;c=null,L(()=>{for(const i of r)_(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)_(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}ge(!1)},!1)}else if(c.running){c.running=!1,c.effects.push.apply(c.effects,C),C=null,ge(!0);return}}const t=C;C=null,t.length&&L(()=>Ke(t),!1),n&&n()}function ve(e){for(let n=0;n<e.length;n++)Pe(e[n])}function z(e,n){const t=c&&c.running;t?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=t?r.tState:r.state;i===j?r!==n&&(!r.updatedAt||r.updatedAt<Z)&&Pe(r):i===Y&&z(r,n)}}}function Le(e){const n=c&&c.running;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(n?!s.tState:!s.state)&&(n?s.tState=Y:s.state=Y,s.pure?E.push(s):C.push(s),s.observers&&Le(s))}}function _(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const i=r.pop(),l=t.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,t.observerSlots[s]=l)}}if(c&&c.running&&e.pure){if(e.tOwned){for(n=e.tOwned.length-1;n>=0;n--)_(e.tOwned[n]);delete e.tOwned}je(e,!0)}else if(e.owned){for(n=e.owned.length-1;n>=0;n--)_(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}c&&c.running?e.tState=0:e.state=0}function je(e,n){if(n||(e.tState=0,c.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)je(e.owned[t])}function Me(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function pe(e,n,t){try{for(const s of n)s(e)}catch(s){W(s,t&&t.owner||null)}}function W(e,n=g){const t=D&&n&&n.context&&n.context[D],s=Me(e);if(!t)throw s;C?C.push({fn(){pe(s,t,n)},state:j}):pe(s,t,n)}function le(e){if(typeof e=="function"&&!e.length)return le(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=le(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function ze(e,n){return function(s){let r;return H(()=>r=N(()=>(g.context={...g.context,[e]:s.value},We(()=>s.children))),void 0),r}}const Ze=Symbol("fallback");function me(e){for(let n=0;n<e.length;n++)e[n]()}function et(e,n,t={}){let s=[],r=[],i=[],l=0,o=n.length>1?[]:null;return ee(()=>me(i)),()=>{let f=e()||[],d,u;return f[Fe],N(()=>{let y=f.length,m,S,T,$,k,A,O,P,I;if(y===0)l!==0&&(me(i),i=[],s=[],r=[],l=0,o&&(o=[])),t.fallback&&(s=[Ze],r[0]=R(V=>(i[0]=V,t.fallback())),l=1);else if(l===0){for(r=new Array(y),u=0;u<y;u++)s[u]=f[u],r[u]=R(h);l=y}else{for(T=new Array(y),$=new Array(y),o&&(k=new Array(y)),A=0,O=Math.min(l,y);A<O&&s[A]===f[A];A++);for(O=l-1,P=y-1;O>=A&&P>=A&&s[O]===f[P];O--,P--)T[P]=r[O],$[P]=i[O],o&&(k[P]=o[O]);for(m=new Map,S=new Array(P+1),u=P;u>=A;u--)I=f[u],d=m.get(I),S[u]=d===void 0?-1:d,m.set(I,u);for(d=A;d<=O;d++)I=s[d],u=m.get(I),u!==void 0&&u!==-1?(T[u]=r[d],$[u]=i[d],o&&(k[u]=o[d]),u=S[u],m.set(I,u)):i[d]();for(u=A;u<y;u++)u in T?(r[u]=T[u],i[u]=$[u],o&&(o[u]=k[u],o[u](u))):r[u]=R(h);r=r.slice(0,l=y),s=f.slice(0)}return r});function h(y){if(i[u]=y,o){const[m,S]=q(u);return o[u]=S,n(f[u],m)}return n(f[u])}}}let qe=!1;function tt(){qe=!0}function Ie(e,n){if(qe&&a.context){const t=a.context;M(_e());const s=N(()=>e(n||{}));return M(t),s}return N(()=>e(n||{}))}function J(){return!0}const nt={get(e,n,t){return n===oe?t:e.get(n)},has(e,n){return n===oe?!0:e.has(n)},set:J,deleteProperty:J,getOwnPropertyDescriptor(e,n){return{configurable:!0,enumerable:!0,get(){return e.get(n)},set:J,deleteProperty:J}},ownKeys(e){return e.keys()}};function ie(e){return(e=typeof e=="function"?e():e)?e:{}}function st(){for(let e=0,n=this.length;e<n;++e){const t=this[e]();if(t!==void 0)return t}}function Vt(...e){let n=!1;for(let l=0;l<e.length;l++){const o=e[l];n=n||!!o&&oe in o,e[l]=typeof o=="function"?(n=!0,v(o)):o}if(n)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=ie(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in ie(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(ie(e[o])));return[...new Set(l)]}},nt);const t={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let d=f.length-1;d>=0;d--){const u=f[d];if(u==="__proto__"||u==="constructor")continue;const h=Object.getOwnPropertyDescriptor(o,u);if(!s[u])s[u]=h.get?{enumerable:!0,configurable:!0,get:st.bind(t[u]=[h.get.bind(o)])}:h.value!==void 0?h:void 0;else{const y=t[u];y&&(h.get?y.push(h.get.bind(o)):h.value!==void 0&&y.push(()=>h.value))}}}const r={},i=Object.keys(s);for(let l=i.length-1;l>=0;l--){const o=i[l],f=s[o];f&&f.get?Object.defineProperty(r,o,f):r[o]=f?f.value:void 0}return r}function Ht(e){let n,t;const s=r=>{const i=a.context;if(i){const[o,f]=q();a.count||(a.count=0),a.count++,(t||(t=e())).then(d=>{M(i),a.count--,f(()=>d.default),M()}),n=o}else if(!n){const[o]=Re(()=>(t||(t=e())).then(f=>f.default));n=o}let l;return v(()=>(l=n())&&N(()=>{if(!i)return l(r);const o=a.context;M(i);const f=l(r);return M(o),f}))};return s.preload=()=>t||((t=e()).then(r=>n=()=>r.default),t),s}let rt=0;function it(){const e=a.context;return e?`${e.id}${e.count++}`:`cl-${rt++}`}const ot=e=>`Stale read from <${e}>.`;function _t(e){const n="fallback"in e&&{fallback:()=>e.fallback};return v(et(()=>e.each,e.children,n||void 0))}function Bt(e){const n=e.keyed,t=v(()=>e.when,void 0,{equals:(s,r)=>n?s===r:!s==!r});return v(()=>{const s=t();if(s){const r=e.children;return typeof r=="function"&&r.length>0?N(()=>r(n?s:()=>{if(!N(t))throw ot("Show");return e.when})):r}return e.fallback},void 0,void 0)}let K;function Ft(){K&&[...K].forEach(e=>e())}function Kt(e){let n;a.context&&a.load&&(n=a.load(a.context.id+a.context.count));const[t,s]=q(n,void 0);return K||(K=new Set),K.add(s),ee(()=>K.delete(s)),v(()=>{let r;if(r=t()){const i=e.fallback;return typeof i=="function"&&i.length?N(()=>i(r,()=>s())):i}return Ye(()=>e.children,s)},void 0,void 0)}const lt=ce();function Ut(e){let n=0,t,s,r,i,l;const[o,f]=q(!1),d=Je(),u={increment:()=>{++n===1&&f(!0)},decrement:()=>{--n===0&&f(!1)},inFallback:o,effects:[],resolved:!1},h=Xe();if(a.context&&a.load){const S=a.context.id+a.context.count;let T=a.load(S);if(T&&(typeof T!="object"||T.status!=="success"?r=T:a.gather(S)),r&&r!=="$$f"){const[$,k]=q(void 0,{equals:!1});i=$,r.then(()=>{if(a.done)return k();a.gather(S),M(s),k(),M()},A=>{l=A,k()})}}const y=ae(lt);y&&(t=y.register(u.inFallback));let m;return ee(()=>m&&m()),Ie(d.Provider,{value:u,get children(){return v(()=>{if(l)throw l;if(s=a.context,i)return i(),i=void 0;s&&r==="$$f"&&M();const S=v(()=>e.children);return v(T=>{const $=u.inFallback(),{showContent:k=!0,showFallback:A=!0}=t?t():{};if((!$||r&&r!=="$$f")&&k)return u.resolved=!0,m&&m(),m=s=r=void 0,Ge(u.effects),S();if(A)return m?T:R(O=>(m=O,s&&(M({id:s.id+"f",count:0}),s=void 0),e.fallback),h)})})}})}const ut=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ft=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ut]),ct=new Set(["innerHTML","textContent","innerText","children"]),at=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),dt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ht(e,n){const t=dt[e];return typeof t=="object"?t[n]?t.$:void 0:t}const gt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),yt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function pt(e,n,t){let s=t.length,r=n.length,i=s,l=0,o=0,f=n[r-1].nextSibling,d=null;for(;l<r||o<i;){if(n[l]===t[o]){l++,o++;continue}for(;n[r-1]===t[i-1];)r--,i--;if(r===l){const u=i<s?o?t[o-1].nextSibling:t[i-o]:f;for(;o<i;)e.insertBefore(t[o++],u)}else if(i===o)for(;l<r;)(!d||!d.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[i-1]&&t[o]===n[r-1]){const u=n[--r].nextSibling;e.insertBefore(t[o++],n[l++].nextSibling),e.insertBefore(t[--i],u),n[r]=t[i]}else{if(!d){d=new Map;let h=o;for(;h<i;)d.set(t[h],h++)}const u=d.get(n[l]);if(u!=null)if(o<u&&u<i){let h=l,y=1,m;for(;++h<r&&h<i&&!((m=d.get(n[h]))==null||m!==u+y);)y++;if(y>u-o){const S=n[l];for(;o<u;)e.insertBefore(t[o++],S)}else e.replaceChild(t[o++],n[l++])}else l++;else n[l++].remove()}}}const we="_$DX_DELEGATE";function mt(e,n,t,s={}){let r;return R(i=>{r=i,n===document?e():Et(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{r(),n.textContent=""}}function Dt(e,n,t){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,t?l.content.firstChild.firstChild:l.content.firstChild},i=n?()=>N(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function wt(e,n=window.document){const t=n[we]||(n[we]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,Ve))}}function Rt(e,n,t){a.context&&e.isConnected||(e[n]=t)}function ue(e,n,t){a.context&&e.isConnected||(t==null?e.removeAttribute(n):e.setAttribute(n,t))}function bt(e,n,t,s){a.context&&e.isConnected||(s==null?e.removeAttributeNS(n,t):e.setAttributeNS(n,t,s))}function xt(e,n){a.context&&e.isConnected||(n==null?e.removeAttribute("class"):e.className=n)}function St(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const r=t[0];e.addEventListener(n,t[0]=i=>r.call(e,t[1],i))}else e.addEventListener(n,t)}function At(e,n,t={}){const s=Object.keys(n||{}),r=Object.keys(t);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||n[o]||(xe(e,o,!1),delete t[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],f=!!n[o];!o||o==="undefined"||t[o]===f||!f||(xe(e,o,!0),t[o]=f)}return t}function Ct(e,n,t){if(!n)return t?ue(e,"style"):n;const s=e.style;if(typeof n=="string")return s.cssText=n;typeof t=="string"&&(s.cssText=t=void 0),t||(t={}),n||(n={});let r,i;for(i in t)n[i]==null&&s.removeProperty(i),delete t[i];for(i in n)r=n[i],r!==t[i]&&(s.setProperty(i,r),t[i]=r);return t}function be(e,n={},t,s){const r={};return s||H(()=>r.children=U(e,n.children,r.children)),H(()=>n.ref&&n.ref(e)),H(()=>Tt(e,n,t,!0,r,!0)),r}function Et(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return U(e,n,s,t);H(r=>U(e,n(),r,t),s)}function Tt(e,n,t,s,r={},i=!1){n||(n={});for(const l in r)if(!(l in n)){if(l==="children")continue;r[l]=Se(e,l,null,r[l],t,i)}for(const l in n){if(l==="children"){s||U(e,n.children);continue}const o=n[l];r[l]=Se(e,l,o,r[l],t,i)}}function Ot(e,n,t={}){a.completed=globalThis._$HY.completed,a.events=globalThis._$HY.events,a.load=r=>globalThis._$HY.r[r],a.has=r=>r in globalThis._$HY.r,a.gather=r=>Ce(n,r),a.registry=new Map,a.context={id:t.renderId||"",count:0},Ce(n,t.renderId);const s=mt(e,n,[...n.childNodes],t);return a.context=null,s}function Yt(e){let n,t;return!a.context||!(n=a.registry.get(t=$t()))?e():(a.completed&&a.completed.add(n),a.registry.delete(t),n)}function Xt(e){let n=e,t=0,s=[];if(a.context)for(;n;){if(n.nodeType===8){const r=n.nodeValue;if(r==="$")t++;else if(r==="/"){if(t===0)return[n,s];t--}}s.push(n),n=n.nextSibling}return[n,s]}function Gt(){a.events&&!a.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=a;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;Ve(s),n.shift()}}),a.events.queued=!0)}function Nt(e){return e.toLowerCase().replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function xe(e,n,t){const s=n.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],t)}function Se(e,n,t,s,r,i){let l,o,f,d,u;if(n==="style")return Ct(e,t,s);if(n==="classList")return At(e,t,s);if(t===s)return s;if(n==="ref")i||t(e);else if(n.slice(0,3)==="on:"){const h=n.slice(3);s&&e.removeEventListener(h,s),t&&e.addEventListener(h,t)}else if(n.slice(0,10)==="oncapture:"){const h=n.slice(10);s&&e.removeEventListener(h,s,!0),t&&e.addEventListener(h,t,!0)}else if(n.slice(0,2)==="on"){const h=n.slice(2).toLowerCase(),y=gt.has(h);if(!y&&s){const m=Array.isArray(s)?s[0]:s;e.removeEventListener(h,m)}(y||t)&&(St(e,h,t,y),y&&wt([h]))}else if(n.slice(0,5)==="attr:")ue(e,n.slice(5),t);else if((u=n.slice(0,5)==="prop:")||(f=ct.has(n))||!r&&((d=ht(n,e.tagName))||(o=ft.has(n)))||(l=e.nodeName.includes("-"))){if(u)n=n.slice(5),o=!0;else if(a.context&&e.isConnected)return t;n==="class"||n==="className"?xt(e,t):l&&!o&&!f?e[Nt(n)]=t:e[d||n]=t}else{const h=r&&n.indexOf(":")>-1&&yt[n.split(":")[0]];h?bt(e,h,n,t):ue(e,at[n]||n,t)}return t}function Ve(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),a.registry&&!a.done&&(a.done=_$HY.done=!0);t;){const s=t[n];if(s&&!t.disabled){const r=t[`${n}Data`];if(r!==void 0?s.call(t,r,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function U(e,n,t,s,r){const i=!!a.context&&e.isConnected;if(i){!t&&(t=[...e.childNodes]);let f=[];for(let d=0;d<t.length;d++){const u=t[d];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():f.push(u)}t=f}for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(i)return t;if(l==="number"&&(n=n.toString()),o){let f=t[0];f&&f.nodeType===3?f.data!==n&&(f.data=n):f=document.createTextNode(n),t=F(e,t,s,f)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(i)return t;t=F(e,t,s)}else{if(l==="function")return H(()=>{let f=n();for(;typeof f=="function";)f=f();t=U(e,f,t,s)}),()=>t;if(Array.isArray(n)){const f=[],d=t&&Array.isArray(t);if(fe(f,n,t,r))return H(()=>t=U(e,f,t,s,!0)),()=>t;if(i){if(!f.length)return t;if(s===void 0)return[...e.childNodes];let u=f[0],h=[u];for(;(u=u.nextSibling)!==s;)h.push(u);return t=h}if(f.length===0){if(t=F(e,t,s),o)return t}else d?t.length===0?Ae(e,f,s):pt(e,t,f):(t&&F(e),Ae(e,f));t=f}else if(n.nodeType){if(i&&n.parentNode)return t=o?[n]:n;if(Array.isArray(t)){if(o)return t=F(e,t,s,n);F(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function fe(e,n,t,s){let r=!1;for(let i=0,l=n.length;i<l;i++){let o=n[i],f=t&&t[e.length],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=fe(e,o,f)||r;else if(d==="function")if(s){for(;typeof o=="function";)o=o();r=fe(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||r}else e.push(o),r=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return r}function Ae(e,n,t=null){for(let s=0,r=n.length;s<r;s++)e.insertBefore(n[s],t)}function F(e,n,t,s){if(t===void 0)return e.textContent="";const r=s||document.createTextNode("");if(n.length){let i=!1;for(let l=n.length-1;l>=0;l--){const o=n[l];if(r!==o){const f=o.parentNode===e;!i&&!l?f?e.replaceChild(r,o):e.insertBefore(r,t):f&&o.remove()}else i=!0}}else e.insertBefore(r,t);return[r]}function Ce(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const r=t[s],i=r.getAttribute("data-hk");(!n||i.startsWith(n))&&!a.registry.has(i)&&a.registry.set(i,r)}}function $t(){const e=a.context;return`${e.id}${e.count++}`}const Wt=()=>{},Jt=!1,Qt=(...e)=>(tt(),Ot(...e)),He=ce(),kt=["title","meta"],Ee=[],Te=["name","http-equiv","content","charset","media"].concat(["property"]),Oe=(e,n)=>{const t=Object.fromEntries(Object.entries(e.props).filter(([s])=>n.includes(s)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),e.tag+JSON.stringify(t)};function Pt(){if(!a.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,s=>s.parentNode.removeChild(s))}const e=new Map;function n(t){if(t.ref)return t.ref;let s=document.querySelector(`[data-sm="${t.id}"]`);return s?(s.tagName.toLowerCase()!==t.tag&&(s.parentNode&&s.parentNode.removeChild(s),s=document.createElement(t.tag)),s.removeAttribute("data-sm")):s=document.createElement(t.tag),s}return{addTag(t){if(kt.indexOf(t.tag)!==-1){const i=t.tag==="title"?Ee:Te,l=Oe(t,i);e.has(l)||e.set(l,[]);let o=e.get(l),f=o.length;o=[...o,t],e.set(l,o);let d=n(t);t.ref=d,be(d,t.props);let u=null;for(var s=f-1;s>=0;s--)if(o[s]!=null){u=o[s];break}return d.parentNode!=document.head&&document.head.appendChild(d),u&&u.ref&&document.head.removeChild(u.ref),f}let r=n(t);return t.ref=r,be(r,t.props),r.parentNode!=document.head&&document.head.appendChild(r),-1},removeTag(t,s){const r=t.tag==="title"?Ee:Te,i=Oe(t,r);if(t.ref){const l=e.get(i);if(l){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let o=s-1;o>=0;o--)l[o]!=null&&document.head.appendChild(l[o].ref)}l[s]=null,e.set(i,l)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const zt=e=>{const n=Pt();return Ie(He.Provider,{value:n,get children(){return e.children}})},vt=(e,n,t)=>(Lt({tag:e,props:n,setting:t,id:it(),get name(){return n.name||n.property}}),null);function Lt(e){const n=ae(He);if(!n)throw new Error("<MetaProvider /> should be in the tree");H(()=>{const t=n.addTag(e);ee(()=>n.removeTag(e,t))})}const Zt=e=>vt("title",e,{escape:!0,close:!0});export{Qt as A,Xt as B,ue as C,xt as D,Kt as E,_t as F,Rt as G,zt as M,Bt as S,Zt as T,ce as a,q as b,v as c,H as d,Ft as e,ae as f,Xe as g,Ie as h,Jt as i,We as j,R as k,ee as l,wt as m,Yt as n,jt as o,be as p,Vt as q,Mt as r,qt as s,Et as t,N as u,Wt as v,Gt as w,Dt as x,Ht as y,Ut as z};
