"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{7227:function(e,n,t){t.r(n);var i=t(885),a=t(2791),o=t(501),u=t(9599),r=t(184);n.default=function(){var e,n,t,c,l,d,s,g=(0,a.useState)(""),v=(0,i.Z)(g,2),h=v[0],p=v[1],f=(0,a.useState)([]),m=(0,i.Z)(f,2),k=m[0],_=m[1],b=(0,o.lr)(),j=(0,i.Z)(b,2),x=j[0],y=j[1],S=(null===k||void 0===k||null===(e=k.data)||void 0===e?void 0:e.results)&&0===(null===k||void 0===k||null===(n=k.data)||void 0===n||null===(t=n.results)||void 0===t?void 0:t.length)&&h;return(0,a.useEffect)((function(){var e=x.get("query");e&&(0,u.gW)("70fc5b973179caa818ae6622551a44d1",e).then((function(e){_(e),console.log(e)})).catch((function(e){console.log(e)}))}),[x]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h&&y({query:h})},children:[(0,r.jsx)("p",{children:"MoviesPage"}),(0,r.jsx)("input",{onChange:function(e){p(e.target.value.trim())}}),(0,r.jsx)("button",{children:"search"})]}),(0,r.jsxs)("ul",{children:[0!==(null===k||void 0===k||null===(c=k.data)||void 0===c||null===(l=c.results)||void 0===l?void 0:l.length)&&(null===(d=k.data)||void 0===d||null===(s=d.results)||void 0===s?void 0:s.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))),S&&(0,r.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 404"})]})]})}},9599:function(e,n,t){t.d(n,{FL:function(){return o},gW:function(){return u},TP:function(){return r},IQ:function(){return c},_S:function(){return l}});var i=t(4569),a=t.n(i),o=function(e){return a().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(e,"&language=en-US&page=1"))},u=function(e,n){return a().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},r=function(e,n){return a().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(n,"&language=en-US&page=1"))},c=function(e,n){return a().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(n,"&language=en-US&page=1"))},l=function(e,n){return a().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=227.d95d8087.chunk.js.map