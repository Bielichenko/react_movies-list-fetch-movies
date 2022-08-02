(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(15),c(10)),n=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.Plot,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},j=c(8),m=c(6),b=c.n(m),u=c(9),v=c.n(u);c(21);var h=function(e){var t=e.setSelectedMovie,c=Object(r.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],d=Object(r.useState)(!1),m=Object(n.a)(d,2),u=m[0],h=m[1],O=Object(r.useState)(null),x=Object(n.a)(O,2),p=x[0],f=x[1],N=Object(r.useState)(!1),g=Object(n.a)(N,2),y=g[0],w=g[1],D=function(){var e=Object(j.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(!0),e.next=4,i=s,fetch("".concat("https://www.omdbapi.com/?apikey=a6296849","&t=").concat(i)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}));case 4:"Error"in(c=e.sent)?w(!0):f({Poster:"N/A"===c.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":c.Poster,Title:c.Title,Plot:c.Plot,imdbID:c.imdbID,imdbUrl:"https://www.imdb.com/title/".concat(c.imdbID,"/")}),h(!1);case 7:case"end":return e.stop()}var i}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:s,onChange:function(e){return a(e.target.value)}})}),y&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:s?Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button","is-light",{"is-loading":u}),onClick:function(e){return D(e)},children:"Find a movie"}):Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:"button is-light is-Loading",disabled:!0,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:p&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return p&&t(p),a(""),void f(null)},children:"Add to the list"})})]})]}),p&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:p})]})]})},O=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],s=Object(r.useState)(null),o=Object(n.a)(s,2),j=o[0],m=o[1];return Object(r.useEffect)((function(){j&&!c.some((function(e){return e.imdbID===j.imdbID}))&&(c.push(j),i(Object(a.a)(c)))}),[j]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{setSelectedMovie:m})})]})};s.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9ca10460.chunk.js.map