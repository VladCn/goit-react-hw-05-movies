"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[193],{9193:function(e,n,t){t.r(n);var i,o,c,a,r,l=t(885),s=t(168),d=t(6871),u=t(501),h=t(2791),p=t(6031),g=t(9599),v=t(184),f=p.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  border-bottom: 1px solid black;\n"]))),x=p.ZP.ul(o||(o=(0,s.Z)(["\n  list-style-type: none;\n"]))),m=p.ZP.ul(c||(c=(0,s.Z)(["\n  display: flex;\n  list-style-type: none;\n  padding-inline-start: 0;\n"]))),j=p.ZP.li(a||(a=(0,s.Z)(["\n  margin-right: 5px;\n"]))),b=p.ZP.ul(r||(r=(0,s.Z)(["\n  border-bottom: 1px solid black;\n  padding-bottom: 15px;\n"])));n.default=function(){var e,n=(0,d.UO)(),t=(0,h.useState)([]),i=(0,l.Z)(t,2),o=i[0],c=i[1],a=(0,h.useState)([]),r=(0,l.Z)(a,2),s=r[0],p=r[1],_=n.movieId,k=(0,d.s0)();(0,h.useEffect)((function(){(0,g.TP)(_,"70fc5b973179caa818ae6622551a44d1").then((function(e){c(e.data),p(e.data.release_date.split("-")[0]),console.log(e)})).catch((function(e){console.log(e)}))}),[_]);return(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{onClick:function(){return k(-1)},children:"Go back"}),(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{width:"200px",height:"300px",src:"".concat("https://image.tmdb.org/t/p/w500/").concat(o.poster_path),alt:"no img"}),(0,v.jsxs)(x,{children:[(0,v.jsx)("li",{children:(0,v.jsx)("h1",{children:"".concat(o.original_title," (").concat(s,")")})}),(0,v.jsx)("li",{children:"User Score: ".concat(function(){if(o.vote_average)return 10*o.vote_average}(),"%")}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:o.overview})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)(m,{children:null===o||void 0===o||null===(e=o.genres)||void 0===e?void 0:e.map((function(e){return(0,v.jsx)(j,{children:e.name},e.id)}))})]})]})]}),(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)(b,{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(n.movieId,"/cast"),children:"Casts"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(n.movieId,"/reviews"),children:"Reviews"})})]}),(0,v.jsx)(d.j3,{})]})}},9599:function(e,n,t){t.d(n,{FL:function(){return c},gW:function(){return a},TP:function(){return r},IQ:function(){return l},_S:function(){return s}});var i=t(4569),o=t.n(i),c=function(e){return o().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(e,"&language=en-US&page=1"))},a=function(e,n){return o().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},r=function(e,n){return o().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(n,"&language=en-US&page=1"))},l=function(e,n){return o().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(n,"&language=en-US&page=1"))},s=function(e,n){return o().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=193.e7579718.chunk.js.map