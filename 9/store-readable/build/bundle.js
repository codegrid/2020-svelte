var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t){t.parentNode.removeChild(t)}let f;function i(t){f=t}const l=[],a=[],d=[],p=[],h=Promise.resolve();let g=!1;function $(t){d.push(t)}let m=!1;const b=new Set;function y(){if(!m){m=!0;do{for(let t=0;t<l.length;t+=1){const n=l[t];i(n),_(n.$$)}for(l.length=0;a.length;)a.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];b.has(n)||(b.add(n),n())}d.length=0}while(l.length);for(;p.length;)p.pop()();g=!1,m=!1,b.clear()}}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}const x=new Set;function v(t,n){-1===t.$$.dirty[0]&&(l.push(t),g||(g=!0,h.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function w(c,u,l,a,d,p,h=[-1]){const g=f;i(c);const m=u.props||{},b=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:e(),dirty:h};let _=!1;if(b.ctx=l?l(c,m,(t,n,...e)=>{const o=e.length?e[0]:n;return b.ctx&&d(b.ctx[t],b.ctx[t]=o)&&(b.bound[t]&&b.bound[t](o),_&&v(c,t)),n}):[],b.update(),_=!0,o(b.before_update),b.fragment=!!a&&a(b.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);b.fragment&&b.fragment.l(t),t.forEach(s)}else b.fragment&&b.fragment.c();u.intro&&((w=c.$$.fragment)&&w.i&&(x.delete(w),w.i(E))),function(t,e,c){const{fragment:u,on_mount:s,on_destroy:f,after_update:i}=t.$$;u&&u.m(e,c),$(()=>{const e=s.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]}),i.forEach($)}(c,u.target,u.anchor),y()}var w,E;i(g)}const E=[];function k(n,e=t){let o;const r=[];function u(t){if(c(n,t)&&(n=t,o)){const t=!E.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),E.push(e,n)}if(t){for(let t=0;t<E.length;t+=2)E[t][0](E[t+1]);E.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(c,s=t){const f=[c,s];return r.push(f),1===r.length&&(o=e(u)||t),c(n),()=>{const t=r.indexOf(f);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const N=function(t,n){return{subscribe:k(t,n).subscribe}}(0,t=>{let n=0;const e=setInterval(()=>{n+=1,t(n)},1e3);return()=>{clearInterval(e)}});function O(n){let e,o;return{c(){var t,r;t="output",e=document.createElement(t),r=n[0],o=document.createTextNode(r)},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),function(t,n){t.appendChild(n)}(e,o)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(o,t[0])},i:t,o:t,d(t){t&&s(e)}}}function j(t,n,e){let o;return u(t,N,t=>e(0,o=t)),[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),w(this,t,j,O,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
