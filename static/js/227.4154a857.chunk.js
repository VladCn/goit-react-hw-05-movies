"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{7227:function(e,n,t){t.r(n);var a=t(885),i=t(2791),o=t(6871),u=t(501),r=t(9599),c=t(184);n.default=function(){var e,n,t,l,s,d=(0,i.useState)(""),g=(0,a.Z)(d,2),v=g[0],f=g[1],p=(0,i.useState)([]),h=(0,a.Z)(p,2),m=h[0],k=h[1],_=(0,o.s0)(),b=(0,u.lr)(),y=(0,a.Z)(b,2),S=y[0],j=y[1];return(0,i.useEffect)((function(){var e=S.get("query");e&&(0,r.gW)("70fc5b973179caa818ae6622551a44d1",e).then((function(e){k(e),console.log(e)})).catch((function(e){console.log(e)}))}),[S]),(0,i.useEffect)((function(){var e,n,t;null===m||void 0===m||null===(e=m.data)||void 0===e||!e.results||null!==m&&void 0!==m&&null!==(n=m.data)&&void 0!==n&&null!==(t=n.results)&&void 0!==t&&t.length||!v||_("/",{replace:!0})}),[null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.results,_,v]),(0,c.jsxs)("div",{children:[(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v&&j({query:v})},children:[(0,c.jsx)("p",{children:"MoviesPage"}),(0,c.jsx)("input",{onChange:function(e){f(e.target.value.trim())}}),(0,c.jsx)("button",{children:"search"})]}),(0,c.jsx)("ul",{children:0!==(null===m||void 0===m||null===(n=m.data)||void 0===n||null===(t=n.results)||void 0===t?void 0:t.length)&&(null===(l=m.data)||void 0===l||null===(s=l.results)||void 0===s?void 0:s.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)})))})]})}},9599:function(e,n,t){t.d(n,{FL:function(){return o},gW:function(){return u},TP:function(){return r},IQ:function(){return c},_S:function(){return l}});var a=t(4569),i=t.n(a),o=function(e){return i().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(e,"&language=en-US&page=1"))},u=function(e,n){return i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},r=function(e,n){return i().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(n,"&language=en-US&page=1"))},c=function(e,n){return i().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(n,"&language=en-US&page=1"))},l=function(e,n){return i().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=227.4154a857.chunk.js.map