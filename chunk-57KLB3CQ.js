var j=function(){return j=Object.assign||function(t){for(var n,i=1,l=arguments.length;i<l;i++)for(var f in n=arguments[i])Object.prototype.hasOwnProperty.call(n,f)&&(t[f]=n[f]);return t},j.apply(this,arguments)};function ut(t,n,i){if(i||arguments.length===2)for(var l,f=0,a=n.length;f<a;f++)!l&&f in n||(l||(l=Array.prototype.slice.call(n,0,f)),l[f]=n[f]);return t.concat(l||Array.prototype.slice.call(n))}function rt(t){return Array.prototype.slice.call(t)}function et(t,n){var i=Math.floor(t);return i===n||i+1===n?t:n}function at(){return Date.now()}function Z(t,n,i){if(n="data-keen-slider-"+n,i===null)return t.removeAttribute(n);t.setAttribute(n,i||"")}function U(t,n){return n=n||document,typeof t=="function"&&(t=t(n)),Array.isArray(t)?t:typeof t=="string"?rt(n.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?rt(t):[]}function G(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function J(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function st(){var t=[];return{add:function(n,i,l,f){n.addListener?n.addListener(l):n.addEventListener(i,l,f),t.push([n,i,l,f])},input:function(n,i,l,f){this.add(n,i,function(a){return function(e){e.nativeEvent&&(e=e.nativeEvent);var k=e.changedTouches||[],w=e.targetTouches||[],s=e.detail&&e.detail.x?e.detail:null;return a({id:s?s.identifier?s.identifier:"i":w[0]?w[0]?w[0].identifier:"e":"d",idChanged:s?s.identifier?s.identifier:"i":k[0]?k[0]?k[0].identifier:"e":"d",raw:e,x:s&&s.x?s.x:w[0]?w[0].screenX:s?s.x:e.pageX,y:s&&s.y?s.y:w[0]?w[0].screenY:s?s.y:e.pageY})}}(l),f)},purge:function(){t.forEach(function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])}),t=[]}}}function $(t,n,i){return Math.min(Math.max(t,n),i)}function X(t){return(t>0?1:0)-(t<0?1:0)||+t}function ot(t){var n=t.getBoundingClientRect();return{height:et(n.height,t.offsetHeight),width:et(n.width,t.offsetWidth)}}function q(t,n,i,l){var f=t&&t[n];return f==null?i:l&&typeof f=="function"?f():f}function V(t){return Math.round(1e6*t)/1e6}function lt(t){var n,i,l,f,a,e;function k(y){e||(e=y),w(!0);var C=y-e;C>l&&(C=l);var m=f[i];if(m[3]<C)return i++,k(y);var T=m[2],z=m[4],p=m[0],g=m[1]*(0,m[5])(z===0?1:(C-T)/z);if(g&&t.track.to(p+g),C<l)return M();e=null,w(!1),s(null),t.emit("animationEnded")}function w(y){n.active=y}function s(y){n.targetIdx=y}function M(){var y;y=k,a=window.requestAnimationFrame(y)}function O(){var y;y=a,window.cancelAnimationFrame(y),w(!1),s(null),e&&t.emit("animationStopped"),e=null}return n={active:!1,start:function(y){if(O(),t.track.details){var C=0,m=t.track.details.position;i=0,l=0,f=y.map(function(T){var z,p=Number(m),g=(z=T.earlyExit)!==null&&z!==void 0?z:T.duration,h=T.easing,S=T.distance*h(g/T.duration)||0;m+=S;var A=l;return l+=g,C+=S,[p,T.distance,A,l,T.duration,h]}),s(t.track.distToIdx(C)),M(),t.emit("animationStarted")}},stop:O,targetIdx:null}}function ft(t){var n,i,l,f,a,e,k,w,s,M,O,y,C,m,T=1/0,z=[],p=null,g=0;function h(u){N(g+u)}function S(u){var d=A(g+u).abs;return o(d)?d:null}function A(u){var d=Math.floor(Math.abs(V(u/i))),r=V((u%i+i)%i);r===i&&(r=0);var v=X(u),c=k.indexOf(ut([],k,!0).reduce(function(D,L){return Math.abs(L-r)<Math.abs(D-r)?L:D})),x=c;return v<0&&d++,c===e&&(x=0,d+=v>0?1:-1),{abs:x+d*e*v,origin:c,rel:x}}function I(u,d,r){var v;if(d||!H())return P(u,r);if(!o(u))return null;var c=A(r??g),x=c.abs,D=u-c.rel,L=x+D;v=P(L);var _=P(L-e*X(D));return(_!==null&&Math.abs(_)<Math.abs(v)||v===null)&&(v=_),V(v)}function P(u,d){if(d==null&&(d=V(g)),!o(u)||u===null)return null;u=Math.round(u);var r=A(d),v=r.abs,c=r.rel,x=r.origin,D=F(u),L=(d%i+i)%i,_=k[x],R=Math.floor((u-(v-c))/e)*i;return V(_-L-_+k[D]+R+(x===e?i:0))}function o(u){return E(u)===u}function E(u){return $(u,s,M)}function H(){return f.loop}function F(u){return(u%e+e)%e}function N(u){var d;d=u-g,z.push({distance:d,timestamp:at()}),z.length>6&&(z=z.slice(-6)),g=V(u);var r=b().abs;if(r!==p){var v=p!==null;p=r,v&&t.emit("slideChanged")}}function b(u){var d=u?null:function(){if(e){var r=H(),v=r?(g%i+i)%i:g,c=(r?g%i:g)-a[0][2],x=0-(c<0&&r?i-Math.abs(c):c),D=0,L=A(g),_=L.abs,R=L.rel,K=a[R][2],Q=a.map(function(Y,ct){var W=x+D;(W<0-Y[0]||W>1)&&(W+=(Math.abs(W)>i-1&&r?i:0)*X(-W));var tt=ct-R,it=X(tt),B=tt+_;r&&(it===-1&&W>K&&(B+=e),it===1&&W<K&&(B-=e),O!==null&&B<O&&(W+=i),y!==null&&B>y&&(W-=i));var nt=W+Y[0]+Y[1],dt=Math.max(W>=0&&nt<=1?1:nt<0||W>1?0:W<0?Math.min(1,(Y[0]+W)/Y[0]):(1-W)/Y[0],0);return D+=Y[0]+Y[1],{abs:B,distance:f.rtl?-1*W+1-Y[0]:W,portion:dt,size:Y[0]}});return _=E(_),R=F(_),{abs:E(_),length:l,max:m,maxIdx:M,min:C,minIdx:s,position:g,progress:r?v/i:g/l,rel:R,slides:Q,slidesLength:i}}}();return n.details=d,t.emit("detailsChanged"),d}return n={absToRel:F,add:h,details:null,distToIdx:S,idxToDist:I,init:function(u){if(function(){if(f=t.options,a=(f.trackConfig||[]).map(function(c){return[q(c,"size",1),q(c,"spacing",0),q(c,"origin",0)]}),e=a.length){i=V(a.reduce(function(c,x){return c+x[0]+x[1]},0));var r,v=e-1;l=V(i+a[0][2]-a[v][0]-a[v][2]-a[v][1]),k=a.reduce(function(c,x){if(!c)return[0];var D=a[c.length-1],L=c[c.length-1]+(D[0]+D[2])+D[1];return L-=x[2],c[c.length-1]>L&&(L=c[c.length-1]),L=V(L),c.push(L),(!r||r<L)&&(w=c.length-1),r=L,c},null),l===0&&(w=0),k.push(V(i))}}(),!e)return b(!0);var d;(function(){var r=t.options.range,v=t.options.loop;O=s=v?q(v,"min",-1/0):0,y=M=v?q(v,"max",T):w;var c=q(r,"min",null),x=q(r,"max",null);c!==null&&(s=c),x!==null&&(M=x),C=s===-1/0?s:t.track.idxToDist(s||0,!0,0),m=M===T?M:I(M,!0,0),x===null&&(y=M),q(r,"align",!1)&&M!==T&&a[F(M)][2]===0&&(m-=1-a[F(M)][0],M=S(m-g)),C=V(C),m=V(m)})(),d=u,Number(d)===d?h(P(E(u))):b()},to:N,velocity:function(){var u=at(),d=z.reduce(function(r,v){var c=v.distance,x=v.timestamp;return u-x>200||(X(c)!==X(r.distance)&&r.distance&&(r={distance:0,lastTimestamp:0,time:0}),r.time&&(r.distance+=c),r.lastTimestamp&&(r.time+=x-r.lastTimestamp),r.lastTimestamp=x),r},{distance:0,lastTimestamp:0,time:0});return d.distance/d.time||0}}}function pt(t){var n,i,l,f,a,e,k,w;function s(p){return 2*p}function M(p){return $(p,k,w)}function O(p){return 1-Math.pow(1-p,3)}function y(){return l?t.track.velocity():0}function C(){z();var p=t.options.mode==="free-snap",g=t.track,h=y();f=X(h);var S=t.track.details,A=[];if(h||!p){var I=m(h),P=I.dist,o=I.dur;if(o=s(o),P*=f,p){var E=g.idxToDist(g.distToIdx(P),!0);E&&(P=E)}A.push({distance:P,duration:o,easing:O});var H=S.position,F=H+P;if(F<a||F>e){var N=F<a?a-H:e-H,b=0,u=h;if(X(N)===f){var d=Math.min(Math.abs(N)/Math.abs(P),1),r=function(x){return 1-Math.pow(1-x,1/3)}(d)*o;A[0].earlyExit=r,u=h*(1-d)}else A[0].earlyExit=0,b+=N;var v=m(u,100),c=v.dist*f;t.options.rubberband&&(A.push({distance:c,duration:s(v.dur),easing:O}),A.push({distance:-c+b,duration:500,easing:O}))}t.animator.start(A)}else t.moveToIdx(M(S.abs),!0,{duration:500,easing:function(x){return 1+--x*x*x*x*x}})}function m(p,g){g===void 0&&(g=1e3);var h=147e-9+(p=Math.abs(p))/g;return{dist:Math.pow(p,2)/h,dur:p/h}}function T(){var p=t.track.details;p&&(a=p.min,e=p.max,k=p.minIdx,w=p.maxIdx)}function z(){t.animator.stop()}t.on("updated",T),t.on("optionsChanged",T),t.on("created",T),t.on("dragStarted",function(){l=!1,z(),n=i=t.track.details.abs}),t.on("dragChecked",function(){l=!0}),t.on("dragEnded",function(){var p=t.options.mode;p==="snap"&&function(){var g=t.track,h=t.track.details,S=h.position,A=X(y());(S>e||S<a)&&(A=0);var I=n+A;h.slides[g.absToRel(I)].portion===0&&(I-=A),n!==i&&(I=i),X(g.idxToDist(I,!0))!==A&&(I+=A),I=M(I);var P=g.idxToDist(I,!0);t.animator.start([{distance:P,duration:500,easing:function(o){return 1+--o*o*o*o*o}}])}(),p!=="free"&&p!=="free-snap"||C()}),t.on("dragged",function(){i=t.track.details.abs})}function vt(t){var n,i,l,f,a,e,k,w,s,M,O,y,C,m,T,z,p,g,h=st();function S(b){if(e&&w===b.id){var u=o(b);if(s){if(!P(b))return I(b);M=u,s=!1,t.emit("dragChecked")}if(z)return M=u;G(b);var d=function(v){if(p===-1/0&&g===1/0)return v;var c=t.track.details,x=c.length,D=c.position,L=$(v,p-D,g-D);if(x===0)return 0;if(!t.options.rubberband)return L;if(D<=g&&D>=p||D<p&&i>0||D>g&&i<0)return v;var _=(D<p?D-p:D-g)/x,R=f*x,K=Math.abs(_*R),Q=Math.max(0,1-K/a*2);return Q*Q*v}(k(M-u)/f*l);i=X(d);var r=t.track.details.position;(r>p&&r<g||r===p&&i>0||r===g&&i<0)&&J(b),O+=d,!y&&Math.abs(O*f)>5&&(y=!0),t.track.add(d),M=u,t.emit("dragged")}}function A(b){!e&&t.track.details&&t.track.details.length&&(O=0,e=!0,y=!1,s=!0,w=b.id,P(b),M=o(b),t.emit("dragStarted"))}function I(b){e&&w===b.idChanged&&(e=!1,t.emit("dragEnded"))}function P(b){var u=E(),d=u?b.y:b.x,r=u?b.x:b.y,v=C!==void 0&&m!==void 0&&Math.abs(m-r)<=Math.abs(C-d);return C=d,m=r,v}function o(b){return E()?b.y:b.x}function E(){return t.options.vertical}function H(){f=t.size,a=E()?window.innerHeight:window.innerWidth;var b=t.track.details;b&&(p=b.min,g=b.max)}function F(b){y&&(J(b),G(b))}function N(){if(h.purge(),t.options.drag&&!t.options.disabled){var b;b=t.options.dragSpeed||1,k=typeof b=="function"?b:function(d){return d*b},l=t.options.rtl?-1:1,H(),n=t.container,function(){var d="data-keen-slider-clickable";U("[".concat(d,"]:not([").concat(d,"=false])"),n).map(function(r){h.add(r,"dragstart",J),h.add(r,"mousedown",J),h.add(r,"touchstart",J)})}(),h.add(n,"dragstart",function(d){G(d)}),h.add(n,"click",F,{capture:!0}),h.input(n,"ksDragStart",A),h.input(n,"ksDrag",S),h.input(n,"ksDragEnd",I),h.input(n,"mousedown",A),h.input(n,"mousemove",S),h.input(n,"mouseleave",I),h.input(n,"mouseup",I),h.input(n,"touchstart",A,{passive:!0}),h.input(n,"touchmove",S,{passive:!1}),h.input(n,"touchend",I),h.input(n,"touchcancel",I),h.add(window,"wheel",function(d){e&&G(d)});var u="data-keen-slider-scrollable";U("[".concat(u,"]:not([").concat(u,"=false])"),t.container).map(function(d){return function(r){var v;h.input(r,"touchstart",function(c){v=o(c),z=!0,T=!0},{passive:!0}),h.input(r,"touchmove",function(c){var x=E(),D=x?r.scrollHeight-r.clientHeight:r.scrollWidth-r.clientWidth,L=v-o(c),_=x?r.scrollTop:r.scrollLeft,R=x&&r.style.overflowY==="scroll"||!x&&r.style.overflowX==="scroll";if(v=o(c),(L<0&&_>0||L>0&&_<D)&&T&&R)return z=!0;T=!1,G(c),z=!1}),h.input(r,"touchend",function(){z=!1})}(d)})}}t.on("updated",H),t.on("optionsChanged",N),t.on("created",N),t.on("destroyed",h.purge)}function mt(t){var n,i,l=null;function f(C,m,T){t.animator.active?e(C,m,T):requestAnimationFrame(function(){return e(C,m,T)})}function a(){f(!1,!1,i)}function e(C,m,T){var z=0,p=t.size,g=t.track.details;if(g&&n){var h=g.slides;n.forEach(function(S,A){if(C)!l&&m&&w(S,null,T),s(S,null,T);else{if(!h[A])return;var I=h[A].size*p;!l&&m&&w(S,I,T),s(S,h[A].distance*p-z,T),z+=I}})}}function k(C){return t.options.renderMode==="performance"?Math.round(C):C}function w(C,m,T){var z=T?"height":"width";m!==null&&(m=k(m)+"px"),C.style["min-"+z]=m,C.style["max-"+z]=m}function s(C,m,T){if(m!==null){m=k(m);var z=T?m:0;m="translate3d(".concat(T?0:m,"px, ").concat(z,"px, 0)")}C.style.transform=m,C.style["-webkit-transform"]=m}function M(){n&&(e(!0,!0,i),n=null),t.on("detailsChanged",a,!0)}function O(){f(!1,!0,i)}function y(){M(),i=t.options.vertical,t.options.disabled||t.options.renderMode==="custom"||(l=q(t.options.slides,"perView",null)==="auto",t.on("detailsChanged",a),(n=t.slides).length&&O())}t.on("created",y),t.on("optionsChanged",y),t.on("beforeOptionsChanged",function(){M()}),t.on("updated",O),t.on("destroyed",M)}function ht(t,n){return function(i){var l,f,a,e,k,w,s=st();function M(o){var E;Z(i.container,"reverse",(E=i.container,window.getComputedStyle(E,null).getPropertyValue("direction")!=="rtl"||o?null:"")),Z(i.container,"v",i.options.vertical&&!o?"":null),Z(i.container,"disabled",i.options.disabled&&!o?"":null)}function O(){y()&&p()}function y(){var o=null;if(e.forEach(function(H){H.matches&&(o=H.__media)}),o===l)return!1;l||i.emit("beforeOptionsChanged"),l=o;var E=o?a.breakpoints[o]:a;return i.options=j(j({},a),E),M(),I(),P(),h(),!0}function C(o){var E=ot(o);return(i.options.vertical?E.height:E.width)/i.size||1}function m(){return i.options.trackConfig.length}function T(o){for(var E in l=!1,a=j(j({},n),o),s.purge(),f=i.size,e=[],a.breakpoints||[]){var H=window.matchMedia(E);H.__media=E,e.push(H),s.add(H,"change",O)}s.add(window,"orientationchange",A),s.add(window,"resize",S),y()}function z(o){i.animator.stop();var E=i.track.details;i.track.init(o??(E?E.abs:0))}function p(o){z(o),i.emit("optionsChanged")}function g(o,E){if(o)return T(o),void p(E);I(),P();var H=m();h(),m()!==H?p(E):z(E),i.emit("updated")}function h(){var o=i.options.slides;if(typeof o=="function")return i.options.trackConfig=o(i.size,i.slides);for(var E=i.slides,H=E.length,F=typeof o=="number"?o:q(o,"number",H,!0),N=[],b=q(o,"perView",1,!0),u=q(o,"spacing",0,!0)/i.size||0,d=b==="auto"?u:u/b,r=q(o,"origin","auto"),v=0,c=0;c<F;c++){var x=b==="auto"?C(E[c]):1/b-u+d,D=r==="center"?.5-x/2:r==="auto"?0:r;N.push({origin:D,size:x,spacing:u}),v+=x}if(v+=u*(F-1),r==="auto"&&!i.options.loop&&b!==1){var L=0;N.map(function(_){var R=v-L;return L+=_.size+u,R>=1||(_.origin=1-R-(v>1?0:1-v)),_})}i.options.trackConfig=N}function S(){I();var o=i.size;i.options.disabled||o===f||(f=o,g())}function A(){S(),setTimeout(S,500),setTimeout(S,2e3)}function I(){var o=ot(i.container);i.size=(i.options.vertical?o.height:o.width)||1}function P(){i.slides=U(i.options.selector,i.container)}i.container=(w=U(t,k||document)).length?w[0]:null,i.destroy=function(){s.purge(),i.emit("destroyed"),M(!0)},i.prev=function(){i.moveToIdx(i.track.details.abs-1,!0)},i.next=function(){i.moveToIdx(i.track.details.abs+1,!0)},i.update=g,T(i.options)}}var gt=function(t,n,i){try{return function(l,f){var a,e={};return a={emit:function(k){e[k]&&e[k].forEach(function(s){s(a)});var w=a.options&&a.options[k];w&&w(a)},moveToIdx:function(k,w,s){var M=a.track.idxToDist(k,w);if(M){var O=a.options.defaultAnimation;a.animator.start([{distance:M,duration:q(s||O,"duration",500),easing:q(s||O,"easing",function(y){return 1+--y*y*y*y*y})}])}},on:function(k,w,s){s===void 0&&(s=!1),e[k]||(e[k]=[]);var M=e[k].indexOf(w);M>-1?s&&delete e[k][M]:s||e[k].push(w)},options:l},function(){if(a.track=ft(a),a.animator=lt(a),f)for(var k=0,w=f;k<w.length;k++)(0,w[k])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}(n,ut([ht(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),mt,vt,pt],i||[],!0))}catch(l){console.error(l)}};export{gt as a};
