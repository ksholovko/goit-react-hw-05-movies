"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[516],{197:function(e,t,n){n.d(t,{Df:function(){return s},M1:function(){return v},t2:function(){return h},tx:function(){return d},zi:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(340),i={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWNhN2M4YTA1ZGZkNWQ4OTdlMzAwNjk5ODFjZGU2YiIsInN1YiI6IjY1NTRjZGFkZWE4NGM3MTA5MTBiOGZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gVABBeA6GQNEjkvFd3o6J1Cmc4yYrMy1T5k_gQCBZgg"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",i);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),i);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),i);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),i);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},516:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(87),o=n(197),p="SearchInput_form__5l7m6",f="SearchInput_SearchInput__r+ZtX",h="SearchInput_button__a2oUc",l=n(184),v=function(e){var t=e.onSubmit;return(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("form",{name:"search-form",className:p,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,r=n.elements.search.value;t(r),n.reset()},children:[(0,l.jsx)("input",{type:"text",name:"search",placeholder:"Enter movie...",className:f}),(0,l.jsx)("button",{className:h,type:"submit",children:"Search"})]})})},m=(0,i.lazy)((function(){return n.e(155).then(n.bind(n,155))})),d=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.lr)(),f=(0,a.Z)(p,2),h=f[0],d=f[1],g=(0,i.useState)(!1),x=(0,a.Z)(g,2),y=x[0],Z=x[1];(0,i.useEffect)((function(){var e=h.get("query"),t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u([]),Z(!0),t.next=5,(0,o.zi)(e);case 5:n=t.sent,u(n.data.results),Z(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),Z(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();null!==e?t():d({})}),[h,d]);return(0,l.jsxs)("main",{className:"container",children:[(0,l.jsx)(v,{onSubmit:function(e){if(""===e)return d({});d({query:e})}}),y&&(0,l.jsx)("div",{className:"indicator",children:"Loading..."}),n&&(0,l.jsx)(m,{movies:n})]})}}}]);
//# sourceMappingURL=516.2e5b9ded.chunk.js.map