/*! For license information please see 877.4704c65c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{877:function(t,n,r){r.r(n),r.d(n,{default:function(){return l}});var e=r(439),o=r(689),i=r(791),a=r(465),c=r(885),u=r(81),s=r(184),l=function(){var t,n,r,l=(0,o.UO)().id,p=(0,i.useState)(null),f=(0,e.Z)(p,2),h=f[0],d=f[1];return(0,i.useEffect)((function(){(0,a.$4)(l,"credits").then((function(t){var n=t.data;return d(n)})).catch((function(t){return(0,u.S)("Error loading movie cast (".concat(t,")"))}))}),[l]),(0,s.jsx)(s.Fragment,{children:null!==h?(0,s.jsxs)(s.Fragment,{children:[(null===(t=h.cast)||void 0===t?void 0:t.length)>0?(0,s.jsx)(c.Dx,{children:"Cast"}):null,(0,s.jsx)(c.Nr,{children:(null===(n=h.cast)||void 0===n?void 0:n.length)>0?null===(r=h.cast)||void 0===r?void 0:r.map((function(t){var n=t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path,"?api_key=").concat(a.q1):"https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180216203/95810236-best-actor-award-vector-illustration.jpg";return(0,s.jsxs)(c.dh,{children:[(0,s.jsx)("span",{children:t.name}),(0,s.jsx)("span",{children:t.chracter}),n?(0,s.jsx)(c.Ei,{src:n,alt:t.name}):null]},t.id)})):(0,s.jsx)(c.Bc,{children:"Cast not found"})})]}):null})}},885:function(t,n,r){r.d(n,{BO:function(){return b},Bc:function(){return _},Dx:function(){return x},Ei:function(){return L},F6:function(){return Z},Nr:function(){return v},S3:function(){return k},b0:function(){return m},dh:function(){return w},hb:function(){return E},qs:function(){return j}});var e,o,i,a,c,u,s,l,p,f,h,d=r(168),g=r(867),y=r(87),v=g.ZP.ul(e||(e=(0,d.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 30px;\n\twidth: 80%;\n\tjustify-content: space-evenly;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tlist-style: none;\n\tpadding: 0;\n"]))),m=g.ZP.ul(o||(o=(0,d.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\twidth: 80%;\n\tjustify-content: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tlist-style: none;\n\tpadding: 0;\n"]))),x=g.ZP.li(i||(i=(0,d.Z)(["\n\tfont-weight: 600;\n\tmargin-top: 30px;\n\tmargin-bottom: 30px;\n\tpadding: 20px;\n\ttext-align: center;\n\tlist-style: none;\n\tfont-size: 35px;\n\tborder-top: 1px solid black;\n"]))),w=g.ZP.li(a||(a=(0,d.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 10px;\n\tfont-size: 20px;\n\tborder: 1px solid gray;\n\tbox-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);\n\tborder-radius: 6px;\n"]))),b=g.ZP.li(c||(c=(0,d.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 10px;\n\tfont-size: 20px;\n\tborder: 1px solid gray;\n\tbox-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);\n\tborder-radius: 6px;\n"]))),Z=g.ZP.p(u||(u=(0,d.Z)(["\n\ttext-align: justify;\n"]))),k=g.ZP.span(s||(s=(0,d.Z)(["\n\tcolor: #8c485e;\n\tfont-weight: 600;\n"]))),L=g.ZP.img(l||(l=(0,d.Z)(["\n\tobject-fit: cover;\n\twidth: 200px;\n\theight: 300px;\n"]))),_=g.ZP.p(p||(p=(0,d.Z)(["\n\tpadding: 40px;\n\ttext-align: center;\n\tfont-size: 36px;\n\tcolor: black;\n\tfont-weight: 600;\n\tborder-top: 1px solid black;\n"]))),j=g.ZP.div(f||(f=(0,d.Z)(["\n\tdisplay: flex;\n\tpadding: 0 30px;\n"]))),E=(0,g.ZP)(y.rU)(h||(h=(0,d.Z)(["\n\tpadding: 3px 15px;\n\tborder: 1px solid gray;\n\tborder-radius: 6px;\n\tbackground-color: #d3d3d362;\n"])))},465:function(t,n,r){r.d(n,{$4:function(){return y},MJ:function(){return l},QN:function(){return f},Y5:function(){return d},q1:function(){return a}});var e=r(861),o=r(243);function i(){i=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,r){return t[n]=r}}function p(t,n,r,e){var i=n&&n.prototype instanceof v?n:v,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",d="executing",g="completed",y={};function v(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,Z=b&&b(b(N([])));Z&&Z!==r&&e.call(Z,c)&&(w=Z);var k=x.prototype=v.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function j(n,r,e){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=E(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===h)throw o=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=f(n,r,e);if("normal"===s.type){if(o=e.done?g:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=g,e.method="throw",e.arg=s.arg)}}}function E(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,E(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=f(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},L(_.prototype),l(_.prototype,u,(function(){return this})),n.AsyncIterator=_,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new _(p(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),l(k,s,"Generator"),l(k,c,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=N,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:N(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),y}},n}var a="15f6416b4a05fd751477296c9e2b0403",c="https://api.themoviedb.org/3/search/movie",u="https://api.themoviedb.org/3/trending/all/day",s="https://api.themoviedb.org/3/movie";function l(t){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function t(n){var r,e,u,s,l,p,f,h,d;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.page,e=void 0===r?1:r,u=n.searchItem,s=void 0===u?"":u,l=n.include_adult,p=void 0===l||l,f=n.lang,h={api_key:a,include_adult:p,language:void 0===f?"en-US":f,page:e,query:s},t.next=4,o.Z.get(c,{params:h});case 4:return d=t.sent,t.abrupt("return",d.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={api_key:a,language:"en-US"},t.next=3,o.Z.get(u,{params:n});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:a,language:"en-US"},t.next=3,o.Z.get("".concat(s,"/").concat(n),{params:r});case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,n,r){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(i().mark((function t(n,r,e){var c,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={api_key:a,language:"en-US",page:e||null},t.next=3,o.Z.get("".concat(s,"/").concat(n,"/").concat(r),{params:c});case 3:return u=t.sent,t.abrupt("return",u);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},81:function(t,n,r){r.d(n,{L:function(){return i},S:function(){return o}});var e=r(596);function o(t){e.Am.error(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}function i(t){e.Am.info(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}}}]);
//# sourceMappingURL=877.4704c65c.chunk.js.map