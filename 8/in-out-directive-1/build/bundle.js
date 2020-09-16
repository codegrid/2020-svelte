var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let u=i?()=>window.performance.now():()=>Date.now(),a=i?t=>requestAnimationFrame(t):t;const l=new Set;function f(t){l.forEach(e=>{e.c(t)||(l.delete(e),e.f())}),0!==l.size&&a(f)}function d(t){let e;return 0===l.size&&a(f),{promise:new Promise(n=>{l.add(e={c:t,f:n})}),abort(){l.delete(e)}}}function p(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const _=new Set;let v,b=0;function x(t,e,n,o,r,c,s,i=0){const u=16.666/o;let a="{\n";for(let t=0;t<=1;t+=u){const o=e+(n-e)*c(t);a+=100*t+`%{${s(o,1-o)}}\n`}const l=a+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${i}`,d=t.ownerDocument;_.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild($("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${o}ms linear ${r}ms 1 both`,b+=1,f}function w(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),b-=r,b||a(()=>{b||(_.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),_.clear())}))}function k(t){v=t}const E=[],C=[],A=[],S=[],N=Promise.resolve();let O=!1;function R(t){A.push(t)}let j=!1;const P=new Set;function q(){if(!j){j=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];k(e),z(e.$$)}for(E.length=0;C.length;)C.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];P.has(e)||(P.add(e),e())}A.length=0}while(E.length);for(;S.length;)S.pop()();O=!1,j=!1,P.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let D;function L(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function B(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const F=new Set;let M;function T(t,e){t&&t.i&&(F.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),M.c.push(()=>{F.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const H={duration:0};function I(t,e){-1===t.$$.dirty[0]&&(E.push(t),O||(O=!0,N.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,s,i,u,a,l,f=[-1]){const d=v;k(e);const p=s.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:o(),dirty:f};let $=!1;if(h.ctx=i?i(e,p,(t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(h.bound[t]&&h.bound[t](r),$&&I(e,t)),n}):[],h.update(),$=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();s.intro&&T(e.$$.fragment),function(t,e,o){const{fragment:s,on_mount:i,on_destroy:u,after_update:a}=t.$$;s&&s.m(e,o),R(()=>{const e=i.map(n).filter(c);u?u.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(R)}(e,s.target,s.anchor),q()}k(d)}function K(t){const e=t-1;return e*e*e+1}function Q(t,{delay:n=0,duration:o=400,easing:r=e}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*c}}function U(t,{delay:e=0,duration:n=400,easing:o=K,start:r=0,opacity:c=0}){const s=getComputedStyle(t),i=+s.opacity,u="none"===s.transform?"":s.transform,a=1-r,l=i*(1-c);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${u} scale(${1-a*e});\n\t\t\topacity: ${i-l*e}\n\t\t`}}function V(n){let o,s,i,a;return{c(){o=$("div"),y(o,"class","box svelte-pkc92i")},m(t,e){h(t,o,e),a=!0},i(n){a||(R(()=>{i&&i.end(1),s||(s=function(n,o,r){let s,i,a=o(n,r),l=!1,f=0;function p(){s&&w(n,s)}function h(){const{delay:o=0,duration:r=300,easing:c=e,tick:h=t,css:m}=a||H;m&&(s=x(n,0,1,r,o,c,m,f++)),h(0,1);const $=u()+o,g=$+r;i&&i.abort(),l=!0,R(()=>B(n,!0,"start")),i=d(t=>{if(l){if(t>=g)return h(1,0),B(n,!0,"end"),p(),l=!1;if(t>=$){const e=c((t-$)/r);h(e,1-e)}}return l})}let m=!1;return{start(){m||(w(n),c(a)?(a=a(),L().then(h)):h())},invalidate(){m=!1},end(){l&&(p(),l=!1)}}}(o,U,{})),s.start()}),a=!0)},o(n){s&&s.invalidate(),i=function(n,o,s){let i,a=o(n,s),l=!0;const f=M;function p(){const{delay:o=0,duration:c=300,easing:s=e,tick:p=t,css:h}=a||H;h&&(i=x(n,1,0,c,o,s,h));const m=u()+o,$=m+c;R(()=>B(n,!1,"start")),d(t=>{if(l){if(t>=$)return p(0,1),B(n,!1,"end"),--f.r||r(f.c),!1;if(t>=m){const e=s((t-m)/c);p(1-e,e)}}return l})}return f.r+=1,c(a)?L().then(()=>{a=a(),p()}):p(),{end(t){t&&a.tick&&a.tick(1,0),l&&(i&&w(n,i),l=!1)}}}(o,Q,{}),a=!1},d(t){t&&m(o),t&&i&&i.end()}}}function W(t){let e,n,o,c,s,i,u,a,l=t[0]&&V();return{c(){e=$("p"),n=$("label"),o=$("input"),c=g(" ボックスを表示"),s=g(" "),l&&l.c(),i=g(""),y(o,"type","checkbox")},m(r,f,d){var m,$,g,y;h(r,e,f),p(e,n),p(n,o),o.checked=t[0],p(n,c),h(r,s,f),l&&l.m(r,f),h(r,i,f),u=!0,d&&a(),m=o,$="change",g=t[1],m.addEventListener($,g,y),a=()=>m.removeEventListener($,g,y)},p(t,[e]){1&e&&(o.checked=t[0]),t[0]?l?T(l,1):(l=V(),l.c(),T(l,1),l.m(i.parentNode,i)):l&&(M={r:0,c:[],p:M},G(l,1,1,()=>{l=null}),M.r||r(M.c),M=M.p)},i(t){u||(T(l),u=!0)},o(t){G(l),u=!1},d(t){t&&m(e),t&&m(s),l&&l.d(t),t&&m(i),a()}}}function X(t,e,n){let o=!0;return[o,function(){o=this.checked,n(0,o)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),J(this,t,X,W,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
