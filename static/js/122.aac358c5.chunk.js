"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{9122:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(5861),c=e(885),a=e(7757),u=e.n(a),o=e(2791),i=e(8479),s=e(6871),f=e(6032),d=e(184);function p(){var n=(0,s.UO)().movieId,t=(0,o.useState)(null),e=(0,c.Z)(t,2),a=e[0],p=e[1];return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,f.sv(n).then((function(n){return n.results}));case 5:if(0!==(e=t.sent).length){t.next=8;break}return t.abrupt("return",p(null));case 8:p(e),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),i.ZP.error("No any reviews for this movie!");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,d.jsxs)("ul",{children:[!a&&(0,d.jsx)("p",{children:"No any reviews find for this movie!"}),a&&a.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,d.jsxs)("li",{children:[(0,d.jsx)("h3",{children:e}),(0,d.jsx)("p",{children:r})]},t)}))]})}},6032:function(n,t,e){e.d(t,{nO:function(){return i},KL:function(){return s},BG:function(){return f},kK:function(){return d},sv:function(){return p}});var r=e(4569),c=e.n(r),a="api_key=420bed62ddaa3595adaa74e668147d82",u="https://api.themoviedb.org/",o="language=en-US";function i(){return c().get("".concat(u,"3/trending/all/day?").concat(a,"&append_to_response=images")).then((function(n){return n.data}))}function s(n){return c().get("".concat(u,"3/search/movie?").concat(a,"&").concat(o,"&page=1&include_adult=false&query=").concat(n)).then((function(n){return n.data}))}function f(n){return c().get("".concat(u,"3/movie/").concat(n,"?").concat(a,"&append_to_response=images")).then((function(n){return n.data}))}function d(n){return c().get("".concat(u,"3/movie/").concat(n,"/credits?").concat(a,"&").concat(o)).then((function(n){return n.data}))}function p(n){return c().get("".concat(u,"3/movie/").concat(n,"/reviews?").concat(a,"&").concat(o,"&page=1")).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=122.aac358c5.chunk.js.map