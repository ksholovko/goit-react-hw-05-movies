"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{197:function(e,t,n){n.d(t,{Df:function(){return u},M1:function(){return d},t2:function(){return h},tx:function(){return g},zi:function(){return p}});var r=n(861),a=n(757),c=n.n(a),i=n(340),s={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWNhN2M4YTA1ZGZkNWQ4OTdlMzAwNjk5ODFjZGU2YiIsInN1YiI6IjY1NTRjZGFkZWE4NGM3MTA5MTBiOGZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gVABBeA6GQNEjkvFd3o6J1Cmc4yYrMy1T5k_gQCBZgg"}};function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",s);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),s);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),s);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),s);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),s);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},76:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(791),u=n(689),o=n(197),p=n(6),l="Cast_ImageGallery__hRTKo",h="Cast_ImageGalleryItem__-2wTe",f="Cast_ImageGalleryItemImage__BCH0t",d="Cast_ActorInfo__hn1gA",m="Cast_Title__Pry6c",g="Cast_noInfo__9ds9K",v="Cast_indicator__kt8PD",_=n(184),x=function(){var e=(0,u.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),c=n[0],x=n[1],y=(0,s.useState)(!1),Z=(0,a.Z)(y,2),w=Z[0],N=Z[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,N(!0),t.next=4,(0,o.M1)(e);case 4:n=t.sent,x(n.data.cast),N(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),N(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),w?(0,_.jsx)("div",{className:v,children:"Loading..."}):(0,_.jsx)("div",{children:0!==c.length?(0,_.jsx)("ul",{className:l,children:c.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return(0,_.jsxs)("li",{className:h,children:[(0,_.jsx)("div",{children:null===a?(0,_.jsx)("img",{src:p,alt:"noimage",className:f}):(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:n,className:f})}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("h3",{className:m,children:n}),(0,_.jsx)("p",{children:r})]})]},t)}))}):(0,_.jsx)("p",{className:g,children:"Sorry, no information"})})}},6:function(e,t,n){e.exports=n.p+"static/media/noimage.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=76.036778f4.chunk.js.map