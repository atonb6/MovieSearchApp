(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{19:function(e,t){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(7),i=n.n(r),l=(n(6),n(8)),o=n(9),u=n(12),j=n(11),d=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("nav",{className:"relative mx-auto bg-indigo-700 max-w-7xl py-4 px-4",children:[Object(c.jsxs)("div",{class:"container mx-auto",children:[Object(c.jsx)("h1",{class:"text-white text-center text-3xl pb-4",children:" Buscador de Pel\xedculas "})," "]})," "]})}}]),n}(a.a.Component),b=n(2),x=n(5),h=n.n(x),p=n(10),O=n(3);var m=function(){var e,t=Object(s.useState)(!1),n=Object(O.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(null),l=Object(O.a)(i,2),o=l[0],u=l[1],j=Object(s.useState)(""),d=Object(O.a)(j,2),x=d[0],m=d[1],f=Object(s.useState)([]),v=Object(O.a)(f,2),w=v[0],g=v[1],y=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r(!0),n="http://www.omdbapi.com/?&apikey=872a863d&s=".concat(x,'&type="movie"'),e.prev=3,e.next=6,fetch(n);case 6:return c=e.sent,e.next=9,c.json();case 9:s=e.sent,u(null),g(s.Search),r(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),u("An unexpected error occured."),r(!1);case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"container mx-auto pt-6",children:[Object(c.jsx)("div",{class:"flex justify-center max-w-screen-sm mx-auto overflow-hidden px-10",children:Object(c.jsxs)("form",{class:"w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative",onSubmit:y,children:[Object(c.jsx)("input",{type:"text",name:"query",placeholder:"Search movies by name...",class:"appearance-none w-full outline-none focus:outline-none active:outline-none",value:x,onChange:function(e){return m(e.target.value)}})," ",Object(c.jsx)("button",{type:"submit",class:"ml-1 outline-none focus:outline-none active:outline-none",children:Object(c.jsx)("svg",(e={fill:"none",stroke:"currentColor","stroke-linecap":"round"},Object(b.a)(e,"stroke",!0),Object(b.a)(e,"linejoin","round"),Object(b.a)(e,"stroke-width","2"),Object(b.a)(e,"viewBox","0 0 24 24"),Object(b.a)(e,"class","w-6 h-6"),Object(b.a)(e,"children",Object(c.jsx)("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",children:" "})),e))})]})}),Object(c.jsxs)("div",{class:"container mx-auto",children:[a&&!o?Object(c.jsx)("span",{children:" loading... "}):o?Object(c.jsxs)("div",{className:"message",children:[" ",o," "]}):w.map((function(e){return Object(c.jsx)("div",{class:"inline-block px-2 w-64 h-64",children:Object(c.jsxs)("div",{class:"bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4",children:[Object(c.jsx)("img",{src:e.Poster,alt:"movieimage",class:"w-full h-64"}),Object(c.jsxs)("div",{class:"p-4",children:[Object(c.jsxs)("p",{class:"font-medium text-lg",children:[" Title: ",Object(c.jsxs)("span",{class:"font-normal text-base leadin-relaxed",children:[" ",e.Title," "]})]}),Object(c.jsxs)("p",{class:"font-medium text-lg",children:[" Year of Release: ",Object(c.jsxs)("span",{class:"font-normal text-base",children:[" ",e.Year," "]})]})]})]},e.imdbID)})}))," "]})]})};n(19);var f=function(){return Object(c.jsxs)("div",{className:"relative width-full",children:[Object(c.jsxs)("div",{className:"mx-auto overflow-hidden",children:[Object(c.jsx)(d,{}),Object(c.jsx)(m,{})]})," "]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),v()},6:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.b794ba38.chunk.js.map