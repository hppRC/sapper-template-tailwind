function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return x(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function N(t){S=t}function R(){if(!S)throw new Error("Function called outside component initialization");return S}const A=[],k=[],P=[],j=[],C=Promise.resolve();let O=!1;function T(t){P.push(t)}let L=!1;const q=new Set;function U(){if(!L){L=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];N(e),I(e.$$)}for(A.length=0;k.length;)k.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];q.has(e)||(q.add(e),e())}P.length=0}while(A.length);for(;j.length;)j.pop()();O=!1,L=!1,q.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const V=new Set;let D;function J(){D={r:0,c:[],p:D}}function B(){D.r||o(D.c),D=D.p}function H(t,e){t&&t.i&&(V.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),D.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),T(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(T)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(A.push(t),O||(O=!0,C.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,s,c,a,i,l=[-1]){const u=S;N(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&X(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=v(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&H(e.$$.fragment),G(e,n.target,n.anchor),U()}N(u)}class Z{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=[];function et(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const nt={};function rt(e){let n,r,o,s,c,a,i,l,u,$,E,w,S;return{c(){n=d("header"),r=d("nav"),o=d("div"),s=d("a"),c=d("h1"),a=m("Sapper Template Tailwind"),i=g(),l=d("ul"),u=d("a"),$=m("home"),E=g(),w=d("a"),S=m("links"),this.h()},l(t){n=b(t,"HEADER",{className:!0});var e=v(n);r=b(e,"NAV",{className:!0});var f=v(r);o=b(f,"DIV",{className:!0});var p=v(o);s=b(p,"A",{href:!0});var d=v(s);c=b(d,"H1",{className:!0});var m=v(c);a=x(m,"Sapper Template Tailwind"),m.forEach(h),d.forEach(h),p.forEach(h),i=_(f),l=b(f,"UL",{className:!0});var g=v(l);u=b(g,"A",{href:!0,class:!0});var y=v(u);$=x(y,"home"),y.forEach(h),E=_(g),w=b(g,"A",{href:!0,class:!0});var N=v(w);S=x(N,"links"),N.forEach(h),g.forEach(h),f.forEach(h),e.forEach(h),this.h()},h(){y(c,"classname","font-bold text-2xl lg:text-4xl"),y(s,"href","/"),y(o,"classname","mx-2 lg:mx-0"),y(u,"href","/"),y(u,"class","mr-1 my-1 lg:mr-2 lg:my-2"),y(w,"href","links"),y(w,"class","m-1 lg:m-2"),y(l,"classname","h-full items-center hidden lg:flex"),y(r,"classname","flex h-full bg-white max-w-screen-xl mx-auto items-center justify-between"),y(n,"classname","fixed top-0 bg-white border-b pointer-events-auto w-full h-12 lg:h-16 lg:px-4")},m(t,e){p(t,n,e),f(n,r),f(r,o),f(o,s),f(s,c),f(c,a),f(r,i),f(r,l),f(l,u),f(u,$),f(l,E),f(l,w),f(w,S)},p:t,i:t,o:t,d(t){t&&h(n)}}}class ot extends Z{constructor(t){super(),Q(this,t,null,rt,c,{})}}function st(t){let e,n,r;const o=t[3].default,s=a(o,t,t[2],null);return{c(){e=d("a"),s&&s.c(),this.h()},l(t){e=b(t,"A",{class:!0,href:!0,target:!0,rel:!0});var n=v(e);s&&s.l(n),n.forEach(h),this.h()},h(){y(e,"class",n=t[1].class),y(e,"href",t[0]),y(e,"target","_blank"),y(e,"rel","noopener noreferrer")},m(t,n){p(t,e,n),s&&s.m(e,null),r=!0},p(t,[c]){s&&s.p&&4&c&&l(s,o,t,t[2],c,null,null),(!r||2&c&&n!==(n=t[1].class))&&y(e,"class",n),(!r||1&c)&&y(e,"href",t[0])},i(t){r||(H(s,t),r=!0)},o(t){K(s,t),r=!1},d(t){t&&h(e),s&&s.d(t)}}}function ct(t,n,r){let{href:o}=n,{$$slots:s={},$$scope:c}=n;return t.$$set=t=>{r(1,n=e(e({},n),u(t))),"href"in t&&r(0,o=t.href),"$$scope"in t&&r(2,c=t.$$scope)},n=u(n),[o,n,c,s]}class at extends Z{constructor(t){super(),Q(this,t,ct,st,c,{href:0})}}function it(t){let e;return{c(){e=m("hppRC")},l(t){e=x(t,"hppRC")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function lt(t){let e,n,r,o,s;return o=new at({props:{href:"https://twitter.com/hpp_ricecake",$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){e=d("footer"),n=d("div"),r=m("Copyright©2020.\n    "),F(o.$$.fragment),this.h()},l(t){e=b(t,"FOOTER",{class:!0});var s=v(e);n=b(s,"DIV",{});var c=v(n);r=x(c,"Copyright©2020.\n    "),Y(o.$$.fragment,c),c.forEach(h),s.forEach(h),this.h()},h(){y(e,"class","flex items-center justify-center w-full text-center border-t border-grey p-4 pointer-events-auto text-sm\n  lg:text-base")},m(t,c){p(t,e,c),f(e,n),f(n,r),G(o,n,null),s=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){s||(H(o.$$.fragment,t),s=!0)},o(t){K(o.$$.fragment,t),s=!1},d(t){t&&h(e),W(o)}}}class ut extends Z{constructor(t){super(),Q(this,t,null,lt,c,{})}}function ft(t){let e,n,r,o,s,c,i;n=new ot({});const u=t[1].default,m=a(u,t,t[0],null);return c=new ut({}),{c(){e=d("div"),F(n.$$.fragment),r=g(),o=d("main"),m&&m.c(),s=g(),F(c.$$.fragment),this.h()},l(t){e=b(t,"DIV",{className:!0});var a=v(e);Y(n.$$.fragment,a),r=_(a),o=b(a,"MAIN",{class:!0});var i=v(o);m&&m.l(i),i.forEach(h),s=_(a),Y(c.$$.fragment,a),a.forEach(h),this.h()},h(){y(o,"class","flex-1 max-w-screen-xl w-full mx-auto pointer-events-auto p-2 pt-12 lg:pt-16 lg:px-4"),y(e,"classname","flex flex-col min-h-screen pointer-events-none")},m(t,a){p(t,e,a),G(n,e,null),f(e,r),f(e,o),m&&m.m(o,null),f(e,s),G(c,e,null),i=!0},p(t,[e]){m&&m.p&&1&e&&l(m,u,t,t[0],e,null,null)},i(t){i||(H(n.$$.fragment,t),H(m,t),H(c.$$.fragment,t),i=!0)},o(t){K(n.$$.fragment,t),K(m,t),K(c.$$.fragment,t),i=!1},d(t){t&&h(e),W(n),m&&m.d(t),W(c)}}}function pt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ht extends Z{constructor(t){super(),Q(this,t,pt,ft,c,{})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=b(t,"PRE",{});var o=v(e);n=x(o,r),o.forEach(h)},m(t,r){p(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&h(e)}}}function mt(e){let n,r,o,s,c,a,i,l,u,S=e[1].message+"";document.title=n=e[0];let N=e[2]&&e[1].stack&&dt(e);return{c(){r=g(),o=d("h1"),s=m(e[0]),c=g(),a=d("p"),i=m(S),l=g(),N&&N.c(),u=$(),this.h()},l(t){w('[data-svelte="svelte-1moakz"]',document.head).forEach(h),r=_(t),o=b(t,"H1",{class:!0});var n=v(o);s=x(n,e[0]),n.forEach(h),c=_(t),a=b(t,"P",{});var f=v(a);i=x(f,S),f.forEach(h),l=_(t),N&&N.l(t),u=$(),this.h()},h(){y(o,"class","mb-2 font-bold")},m(t,e){p(t,r,e),p(t,o,e),f(o,s),p(t,c,e),p(t,a,e),f(a,i),p(t,l,e),N&&N.m(t,e),p(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&S!==(S=t[1].message+"")&&E(i,S),t[2]&&t[1].stack?N?N.p(t,e):(N=dt(t),N.c(),N.m(u.parentNode,u)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&h(r),t&&h(o),t&&h(c),t&&h(a),t&&h(l),N&&N.d(t),t&&h(u)}}}function gt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class $t extends Z{constructor(t){super(),Q(this,t,gt,mt,c,{status:0,error:1})}}function yt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&F(n.$$.fragment),r=$()},l(t){n&&Y(n.$$.fragment,t),r=$()},m(t,e){n&&G(n,t,e),p(t,r,e),o=!0},p(t,e){const o=16&e?M(s,[z(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){J();const t=n;K(t.$$.fragment,1,0,()=>{W(t,1)}),B()}c?(n=new c(a()),F(n.$$.fragment),H(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&H(n.$$.fragment,t),o=!0)},o(t){n&&K(n.$$.fragment,t),o=!1},d(t){t&&h(r),n&&W(n,t)}}}function vt(t){let e,n;return e=new $t({props:{error:t[0],status:t[1]}}),{c(){F(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){G(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function bt(t){let e,n,r,o;const s=[vt,yt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){c[e].m(t,n),p(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(J(),K(c[i],1,1,()=>{c[i]=null}),B(),n=c[e],n||(n=c[e]=s[e](t),n.c()),H(n,1),n.m(r.parentNode,r))},i(t){o||(H(n),o=!0)},o(t){K(n),o=!1},d(t){c[e].d(t),t&&h(r)}}}function xt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ht({props:s}),{c(){F(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=12&e?M(o,[4&e&&{segment:t[2][0]},8&e&&z(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){W(n,t)}}}function _t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=nt,p=r,R().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class Et extends Z{constructor(t){super(),Q(this,t,_t,xt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[],St=[{js:()=>Promise.all([import("./index.1b0db199.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.d87bc560.js"),]).then((function(t){return t[0]}))}],Nt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Rt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function At(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let kt,Pt=1;const jt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ct={};let Ot,Tt;function Lt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ot))return null;let e=t.pathname.slice(Ot.length);if(""===e&&(e="/"),!wt.some(t=>t.test(e)))for(let n=0;n<Nt.length;n+=1){const r=Nt[n],o=r.pattern.exec(e);if(o){const n=Lt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Ut(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=At(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=qt(o);if(s){Dt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),jt.pushState({id:kt},"",o.href)}}function It(){return{x:pageXOffset,y:pageYOffset}}function Vt(t){if(Ct[kt]=It(),t.state){const e=qt(new URL(location.href));e?Dt(e,t.state.id):location.href=location.href}else Pt=Pt+1,function(t){kt=t}(Pt),jt.replaceState({id:kt},"",location.href)}function Dt(t,e,n,r){return Rt(this,void 0,void 0,(function*(){const o=!!e;if(o)kt=e;else{const t=It();Ct[kt]=t,kt=e=++Pt,Ct[kt]=n?t:{x:0,y:0}}if(yield Tt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Ct[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Ct[kt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Jt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Bt,Ht=null;function Kt(t){const e=At(t.target);e&&"prefetch"===e.rel&&function(t){const e=qt(new URL(t,Jt(document)));if(e)Ht&&t===Ht.href||(Ht={href:t,promise:ae(e)}),Ht.promise}(e.href)}function Mt(t){clearTimeout(Bt),Bt=setTimeout(()=>{Kt(t)},20)}function zt(t,e={noscroll:!1,replaceState:!1}){const n=qt(new URL(t,Jt(document)));return n?(jt[e.replaceState?"replaceState":"pushState"]({id:kt},"",t),Dt(n,null,e.noscroll)):(location.href=t,new Promise(()=>{}))}const Ft="undefined"!=typeof __SAPPER__&&__SAPPER__;let Yt,Gt,Wt,Xt=!1,Qt=[],Zt="{}";const te={page:function(t){const e=et(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:et(null),session:et(Ft&&Ft.session)};let ee,ne,re;function oe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function se(t){return Rt(this,void 0,void 0,(function*(){Yt&&te.preloading.set(!0);const e=function(t){return Ht&&Ht.href===t.href?Ht.promise:ae(t)}(t),n=Gt={},r=yield e,{redirect:o}=r;if(n===Gt)if(o)yield zt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ce(n,e,oe(e,t.page))}}))}function ce(t,e,n){return Rt(this,void 0,void 0,(function*(){te.page.set(n),te.preloading.set(!1),Yt?Yt.$set(e):(e.stores={page:{subscribe:te.page.subscribe},preloading:{subscribe:te.preloading.subscribe},session:te.session},e.level0={props:yield Wt},e.notify=te.page.notify,Yt=new Et({target:re,props:e,hydrate:!0})),Qt=t,Zt=JSON.stringify(n.query),Xt=!0,ne=!1}))}function ae(t){return Rt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Wt){const t=()=>({});Wt=Ft.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},ee)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map((e,a)=>Rt(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Zt)return!0;const o=Qt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!ne&&!u&&Qt[a]&&Qt[a].part===e.i)return Qt[a];u=!1;const{default:h,preload:d}=yield St[e.i].js();let m;return m=Xt||!Ft.preloaded[a+1]?d?yield d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ee):{}:Ft.preloaded[a+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var ie,le,ue;te.session.subscribe(t=>Rt(void 0,void 0,void 0,(function*(){if(ee=t,!Xt)return;ne=!0;const e=qt(new URL(location.href)),n=Gt={},{redirect:r,props:o,branch:s}=yield ae(e);n===Gt&&(r?yield zt(r.location,{replaceState:!0}):yield ce(s,o,oe(o,e.page)))}))),ie={target:document.querySelector("#sapper")},le=ie.target,re=le,ue=Ft.baseUrl,Ot=ue,Tt=se,"scrollRestoration"in jt&&(jt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{jt.scrollRestoration="auto"}),addEventListener("load",()=>{jt.scrollRestoration="manual"}),addEventListener("click",Ut),addEventListener("popstate",Vt),addEventListener("touchstart",Kt),addEventListener("mousemove",Mt),Ft.error?Promise.resolve().then(()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Ft;Wt||(Wt=o&&o[0]);const a={error:c,status:s,session:r,level0:{props:Wt},level1:{props:{status:s,error:c},component:$t},segments:o},i=Lt(n);ce([],a,{host:t,path:e,query:i,params:{},error:c})}()):Promise.resolve().then(()=>{const{hash:t,href:e}=location;jt.replaceState({id:Pt},"",e);const n=qt(new URL(location.href));if(n)return Dt(n,Pt,!0,t)});export{Z as S,g as a,b,_ as c,h as d,d as e,v as f,x as g,y as h,Q as i,p as j,f as k,t as n,w as q,c as s,m as t};
