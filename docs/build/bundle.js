var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}let c=!1;const r=new Set;function u(t,e){c&&r.delete(e),e.parentNode!==t&&t.appendChild(e)}function a(t,e,n){c&&r.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function f(t){c?r.add(t):t.parentNode&&t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function b(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}let x;function w(t){x=t}function S(){if(!x)throw new Error("Function called outside component initialization");return x}function k(t){S().$$.on_destroy.push(t)}const z=[],_=[],j=[],C=[],R=Promise.resolve();let E=!1;function N(t){j.push(t)}let D=!1;const O=new Set;function A(){if(!D){D=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];w(e),M(e.$$)}for(w(null),z.length=0;_.length;)_.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];O.has(e)||(O.add(e),e())}j.length=0}while(z.length);for(;C.length;)C.pop()();E=!1,D=!1,O.clear()}}function M(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const L=new Set;function P(t,e){t&&t.i&&(L.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(L.has(t))return;L.add(t),undefined.c.push((()=>{L.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function I(t){t&&t.c()}function J(t,n,l,i){const{fragment:c,on_mount:r,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,l),i||N((()=>{const n=r.map(e).filter(o);u?u.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(N)}function q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(z.push(t),E||(E=!0,R.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,o,l,i,u,a,d=[-1]){const p=x;w(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:o.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let m=!1;if(h.ctx=l?l(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&B(e,t)),n})):[],h.update(),m=!0,s(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){c=!0;const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();o.intro&&P(e.$$.fragment),J(e,o.target,o.anchor,o.customElement),function(){c=!1;for(const t of r)t.parentNode.removeChild(t);r.clear()}(),A()}w(p)}class G{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const H=[];const V={weights:[16,24,32],minSets:6,maxSets:20,delta:2,baseReps:6,proportionateReps:!0,includeDensity:!0},W=function(e,n=t){let s;const o=[];function i(t){if(l(e,t)&&(e=t,s)){const t=!H.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),H.push(n,e)}if(t){for(let t=0;t<H.length;t+=2)H[t][0](H[t+1]);H.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(l,c=t){const r=[l,c];return o.push(r),1===o.length&&(s=n(i)||t),l(e),()=>{const t=o.indexOf(r);-1!==t&&o.splice(t,1),0===o.length&&(s(),s=null)}}}}(V);function K(t,e,n){const s=t.slice();return s[3]=e[n],s[5]=n,s}function Q(t){let e,n,s,o,l,i,c,r,d,b,g,$,x,w,S,k,z,_,j,C,R,E,N=t[3].sets+"",D=t[3].reps+"",O=t[3].weight+"",A=t[3].volume+"";return{c(){e=p("div"),n=p("div"),s=p("div"),o=h(N),l=p("div"),l.textContent="sets",i=m(),c=p("div"),c.textContent="of",r=p("div"),d=h(D),b=p("div"),b.textContent="reps",g=m(),$=p("div"),$.textContent="at",x=p("div"),w=h(O),S=p("div"),S.textContent="kg",k=m(),z=p("div"),_=p("div"),j=h(A),C=p("div"),R=m(),v(n,"class","svelte-ombfjo"),v(s,"class","value svelte-ombfjo"),v(l,"class","svelte-ombfjo"),v(c,"class","svelte-ombfjo"),v(r,"class","value svelte-ombfjo"),v(b,"class","svelte-ombfjo"),v($,"class","svelte-ombfjo"),v(x,"class","value svelte-ombfjo"),v(S,"class","svelte-ombfjo"),v(z,"class","svelte-ombfjo"),v(_,"class","total value svelte-ombfjo"),v(C,"class","svelte-ombfjo"),v(e,"class",E="workout w"+t[3].weight+"kg svelte-ombfjo")},m(t,f){a(t,e,f),u(e,n),u(e,s),u(s,o),u(e,l),u(e,i),u(e,c),u(e,r),u(r,d),u(e,b),u(e,g),u(e,$),u(e,x),u(x,w),u(e,S),u(e,k),u(e,z),u(e,_),u(_,j),u(e,C),u(e,R)},p(t,n){1&n&&N!==(N=t[3].sets+"")&&y(o,N),1&n&&D!==(D=t[3].reps+"")&&y(d,D),1&n&&O!==(O=t[3].weight+"")&&y(w,O),1&n&&A!==(A=t[3].volume+"")&&y(j,A),1&n&&E!==(E="workout w"+t[3].weight+"kg svelte-ombfjo")&&v(e,"class",E)},d(t){t&&f(e)}}}function U(e){let n,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=Q(K(e,s,t));return{c(){n=p("div");for(let t=0;t<o.length;t+=1)o[t].c();v(n,"class","workouts svelte-ombfjo")},m(t,e){a(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){let l;for(s=t[0],l=0;l<s.length;l+=1){const i=K(t,s,l);o[l]?o[l].p(i,e):(o[l]=Q(i),o[l].c(),o[l].m(n,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=s.length}},i:t,o:t,d(t){t&&f(n),d(o,t)}}}function X(t,e,n){let s=[];return k(W.subscribe((t=>{if(!(t.minSets>=1&&t.maxSets>=1&&t.maxSets>=t.minSets&&t.delta>=1))return;n(0,s=[]);let e=Math.min(...t.weights);for(let n of t.weights){let o=t.proportionateReps?Math.floor(e/n*t.baseReps):t.baseReps;for(let e=t.minSets;e<=t.maxSets;e+=t.delta)s.push({weight:n,sets:e,reps:o,volume:n*e*o});if(t.includeDensity)for(let e=t.maxSets-t.delta,l=1;e>=t.minSets;e-=t.delta,l++)s.push({weight:n,sets:e,reps:o+l,volume:n*e*(o+l)})}s.sort(((t,e)=>t.volume!==e.volume?t.volume-e.volume:t.weight-e.weight))}))),[s]}class Y extends G{constructor(t){super(),F(this,t,X,U,l,{})}}function Z(t,e,n){const s=t.slice();return s[12]=e[n],s[13]=e,s[14]=n,s}function tt(t){let e,n,s;function o(){return t[5](t[14])}return{c(){e=p("button"),e.textContent="-",v(e,"class","svelte-1dbypcz")},m(t,l){a(t,e,l),n||(s=b(e,"click",o),n=!0)},p(e,n){t=e},d(t){t&&f(e),n=!1,s()}}}function et(t){let e,n,s,o,l;function i(){t[4].call(n,t[13],t[14])}let c=t[0].weights.length>1&&tt(t);return{c(){e=p("div"),n=p("input"),s=m(),c&&c.c(),v(n,"class","weightInput svelte-1dbypcz"),v(n,"type","number"),v(n,"min","0"),v(e,"class","weight")},m(r,f){a(r,e,f),u(e,n),$(n,t[12]),u(e,s),c&&c.m(e,null),o||(l=b(n,"input",i),o=!0)},p(s,o){t=s,1&o&&g(n.value)!==t[12]&&$(n,t[12]),t[0].weights.length>1?c?c.p(t,o):(c=tt(t),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(t){t&&f(e),c&&c.d(),o=!1,l()}}}function nt(e){let n,o,l,i,c,r,y,x,w,S,k,z,_,j,C,R,E,N,D,O,A,M,L,P,T,I,J,q,B,F,G,H,V,W,K,Q,U,X,Y,tt,nt,st,ot,lt=e[0].weights,it=[];for(let t=0;t<lt.length;t+=1)it[t]=et(Z(e,lt,t));return{c(){n=p("div"),o=p("div"),l=p("span"),l.textContent="Weights:",i=m(),c=p("div");for(let t=0;t<it.length;t+=1)it[t].c();r=m(),y=p("button"),y.textContent="+",x=m(),w=p("div"),S=p("label"),S.textContent="Sets:",k=m(),z=p("div"),_=p("input"),j=h(" to\n            "),C=p("input"),R=h(" by\n            "),E=p("input"),N=m(),D=p("br"),O=m(),A=p("input"),M=m(),L=p("span"),L.textContent="Include density",P=m(),T=p("div"),I=p("label"),I.textContent="Reps:",J=m(),q=p("div"),B=p("input"),F=m(),G=p("br"),H=m(),V=p("input"),W=m(),K=p("span"),K.textContent="Proportionate to weight",Q=m(),U=p("div"),X=p("div"),Y=m(),tt=p("div"),nt=p("button"),nt.textContent="reset",v(l,"class","label left svelte-1dbypcz"),v(y,"class","svelte-1dbypcz"),v(c,"class","right svelte-1dbypcz"),v(o,"class","formElement svelte-1dbypcz"),v(S,"for","minSets"),v(S,"class","left svelte-1dbypcz"),v(_,"id","minSets"),v(_,"type","number"),v(_,"class","svelte-1dbypcz"),v(C,"id","maxSets"),v(C,"type","number"),v(C,"class","svelte-1dbypcz"),v(E,"id","delta"),v(E,"type","number"),v(E,"class","svelte-1dbypcz"),v(A,"type","checkbox"),v(A,"id","includeDensity"),v(L,"class","label svelte-1dbypcz"),v(z,"class","right svelte-1dbypcz"),v(w,"class","formElement svelte-1dbypcz"),v(I,"for","baseReps"),v(I,"class","left svelte-1dbypcz"),v(B,"id","baseReps"),v(B,"type","number"),v(B,"class","svelte-1dbypcz"),v(V,"type","checkbox"),v(V,"id","propReps"),v(K,"class","label svelte-1dbypcz"),v(q,"class","right svelte-1dbypcz"),v(T,"class","formElement svelte-1dbypcz"),v(X,"class","left svelte-1dbypcz"),v(nt,"class","svelte-1dbypcz"),v(tt,"class","right svelte-1dbypcz"),v(U,"class","formElement svelte-1dbypcz"),v(n,"class","base svelte-1dbypcz")},m(t,s){a(t,n,s),u(n,o),u(o,l),u(o,i),u(o,c);for(let t=0;t<it.length;t+=1)it[t].m(c,null);u(c,r),u(c,y),u(n,x),u(n,w),u(w,S),u(w,k),u(w,z),u(z,_),$(_,e[0].minSets),u(z,j),u(z,C),$(C,e[0].maxSets),u(z,R),u(z,E),$(E,e[0].delta),u(z,N),u(z,D),u(z,O),u(z,A),A.checked=e[0].includeDensity,u(z,M),u(z,L),u(n,P),u(n,T),u(T,I),u(T,J),u(T,q),u(q,B),$(B,e[0].baseReps),u(q,F),u(q,G),u(q,H),u(q,V),V.checked=e[0].proportionateReps,u(q,W),u(q,K),u(n,Q),u(n,U),u(U,X),u(U,Y),u(U,tt),u(tt,nt),st||(ot=[b(y,"click",e[1]),b(_,"input",e[6]),b(C,"input",e[7]),b(E,"input",e[8]),b(A,"change",e[9]),b(B,"input",e[10]),b(V,"change",e[11]),b(nt,"click",e[3])],st=!0)},p(t,[e]){if(5&e){let n;for(lt=t[0].weights,n=0;n<lt.length;n+=1){const s=Z(t,lt,n);it[n]?it[n].p(s,e):(it[n]=et(s),it[n].c(),it[n].m(c,r))}for(;n<it.length;n+=1)it[n].d(1);it.length=lt.length}1&e&&g(_.value)!==t[0].minSets&&$(_,t[0].minSets),1&e&&g(C.value)!==t[0].maxSets&&$(C,t[0].maxSets),1&e&&g(E.value)!==t[0].delta&&$(E,t[0].delta),1&e&&(A.checked=t[0].includeDensity),1&e&&g(B.value)!==t[0].baseReps&&$(B,t[0].baseReps),1&e&&(V.checked=t[0].proportionateReps)},i:t,o:t,d(t){t&&f(n),d(it,t),st=!1,s(ot)}}}function st(t,e,n){let s;function o(t){W.update((e=>({...e,weights:[...e.weights.slice(0,t),...e.weights.slice(t+1)]})))}i(t,W,(t=>n(0,s=t)));return[s,function(){const t=s.weights.length,e=0===t?16:1===t?s.weights[0]+4:s.weights[t-1]+(s.weights[t-1]-s.weights[t-2]);W.update((t=>({...t,weights:[...t.weights,e]})))},o,function(){W.set(V)},function(t,e){t[e]=g(this.value),W.set(s)},t=>o(t),function(){s.minSets=g(this.value),W.set(s)},function(){s.maxSets=g(this.value),W.set(s)},function(){s.delta=g(this.value),W.set(s)},function(){s.includeDensity=this.checked,W.set(s)},function(){s.baseReps=g(this.value),W.set(s)},function(){s.proportionateReps=this.checked,W.set(s)}]}class ot extends G{constructor(t){super(),F(this,t,st,nt,l,{})}}function lt(e){let n,s,o,l,i,c,r,d,h,b;return c=new ot({}),h=new Y({}),{c(){n=p("main"),s=p("h1"),s.innerHTML="Volume / Density Cycle<br/>Program Generator",o=m(),l=p("div"),i=p("div"),I(c.$$.fragment),r=m(),d=p("div"),I(h.$$.fragment),v(s,"class","svelte-irxci5"),v(i,"class","builder svelte-irxci5"),v(d,"class","workouts svelte-irxci5"),v(l,"id","container"),v(l,"class","svelte-irxci5")},m(t,e){a(t,n,e),u(n,s),u(n,o),u(n,l),u(l,i),J(c,i,null),u(l,r),u(l,d),J(h,d,null),b=!0},p:t,i(t){b||(P(c.$$.fragment,t),P(h.$$.fragment,t),b=!0)},o(t){T(c.$$.fragment,t),T(h.$$.fragment,t),b=!1},d(t){t&&f(n),q(c),q(h)}}}function it(t){let e=!1;const n=W.subscribe((t=>{e&&(location.hash=btoa(JSON.stringify(t)))}));var s;return s=function(){if(location.hash)try{const t=JSON.parse(atob(location.hash.substring(1)));W.set(t)}catch{console.error("failed to parse",location.hash)}e=!0},S().$$.on_mount.push(s),k(n),[]}return new class extends G{constructor(t){super(),F(this,t,it,lt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
