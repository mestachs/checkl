(this.webpackJsonpcheckl=this.webpackJsonpcheckl||[]).push([[0],{258:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(82),a=n.n(i),s=(n(94),n(40)),o=n.n(s),u=n(83),l=n(84),h=n(7),d=(n(96),n(27)),f=n.n(d),j=n(85),b=n.n(j),p=n(86),O=n.n(p),m=n(87),g=n.n(m),v=n(88),x=n.n(v),y=n(89),w=n(0),S=function(e){var t=e.headings,n=e.activeId;return Object(w.jsx)("ul",{children:t.map((function(e){return Object(w.jsxs)("li",{className:e.id===n?"active":"",children:[Object(w.jsx)("a",{href:"#".concat(e.id),onClick:function(t){t.preventDefault(),document.querySelector("#".concat(e.id)).scrollIntoView({behavior:"smooth"})},children:e.title}),e.items.length>0&&Object(w.jsx)("ul",{children:e.items.map((function(e){return Object(w.jsx)("li",{className:e.id===n?"active":"",children:Object(w.jsx)("a",{href:"#".concat(e.id),onClick:function(t){t.preventDefault(),document.querySelector("#".concat(e.id)).scrollIntoView({behavior:"smooth"})},children:e.title})},e.id)}))})]},e.id)}))})},k=function(e){var t=[],n={h1:0,h2:0,h3:0};return e.forEach((function(e,r){var c=e.innerText,i=e.id;"H1"===e.nodeName&&(n.h1=n.h1+1,n.h2=0,n.h3=0,t.push({id:i,title:n.h1+". "+c,items:[]})),"H2"===e.nodeName&&t.length>0&&(n.h2=n.h2+1,n.h3=0,t[t.length-1].items.push({id:i,title:n.h1+". "+n.h2+" "+c})),"H3"===e.nodeName&&t.length>0&&(n.h3=n.h3+1,t[t.length-1].items.push({id:i,title:n.h1+". "+n.h2+". "+n.h3+" "+c}))})),t},N=function(){var e=c.a.useState(),t=Object(h.a)(e,2),n=t[0],r=t[1],i=function(){var e=c.a.useState([]),t=Object(h.a)(e,2),n=t[0],r=t[1];return c.a.useEffect((function(){var e=Array.from(document.querySelectorAll("body h1, body h2, body h3")),t=k(e);r(t)}),[]),{nestedHeadings:n}}().nestedHeadings;return function(e){var t=c.a.useRef({});c.a.useEffect((function(){var n=new IntersectionObserver((function(n){t.current=n.reduce((function(e,t){return e[t.target.id]=t,e}),t.current);var c=[];Object.keys(t.current).forEach((function(e){var n=t.current[e];n.isIntersecting&&c.push(n)}));var i=function(e){return r.findIndex((function(t){return t.id===e}))};if(1===c.length)e(c[0].target.id);else if(c.length>1){var a=c.sort((function(e,t){return i(e.target.id)>i(t.target.id)}));e(a[0].target.id)}}),{root:document.querySelector("iframe"),rootMargin:"500px"}),r=Array.from(document.querySelectorAll("h1, h2, h3"));return r.forEach((function(e){return n.observe(e)})),function(){return n.disconnect()}}),[e])}(r),Object(w.jsx)("nav",{"aria-label":"Table of contents",children:Object(w.jsx)(S,{headings:i,activeId:n})})};f.a.registerHelper({eq:function(e,t){return e===t},ne:function(e,t){return e!==t},lt:function(e,t){return e<t},gt:function(e,t){return e>t},lte:function(e,t){return e<=t},gte:function(e,t){return e>=t},and:function(){return Array.prototype.every.call(arguments,Boolean)},or:function(){return Array.prototype.slice.call(arguments,0,-1).some(Boolean)}});var I=function(){var e=Object(r.useState)("rw"),t=Object(h.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)({demo:"St\xe9phan"}),a=Object(h.a)(i,2),s=a[0],d=a[1],j=Object(r.useState)(void 0),p=Object(h.a)(j,2),m=p[0],v=p[1],S=Object(r.useState)('{ "demo": "St\xe9phan" }'),k=Object(h.a)(S,2),I=k[0],C=k[1],E=Object(r.useState)(void 0),A=Object(h.a)(E,2),J=A[0],L=A[1],P=Object(r.useState)(void 0),q=Object(h.a)(P,2),H=q[0],M=q[1],T=Object(r.useState)("{{demo}}"),B=Object(h.a)(T,2),F=B[0],W=B[1],D=Object(r.useState)(""),V=Object(h.a)(D,2),_=V[0],R=V[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,i,a,s,l,h,j,b,p,O,m,g,v,x,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),n=t.get("markdown"),r=t.get("gist")||"https://gist.github.com/mestachs/e1819a776ca1618b981d1de082a550aa",c(t.get("mode")||"rw"),!n){e.next=14;break}return i=n,n.startsWith("https://github.com/")&&(i="https://raw.githubusercontent.com/"+n.split("/").slice(3,5).join("/")+"/"+n.split("/").slice(6).join("/")),M(i),e.next=10,fetch(i).then((function(e){return e.text()}));case 10:a=e.sent,W(a),e.next=27;break;case 14:if(!r){e.next=27;break}return s=r,(r.startsWith("https://gist.github.com")||r.startsWith("https://gist.githubusercontent.com"))&&(s=r.split("/")[4]),e.next=19,fetch("https://api.github.com/gists/".concat(s)).then((function(e){return e.json()}));case 19:if(l=e.sent,M(l.html_url),void 0==(h=l.files["tasklist.md"]||l.files["checklist.md"])&&(j=Object.keys(l.files).find((function(e){return e.endsWith(".md")})),h=l.files[j]),void 0==(b=l.files["params.json"])){p=f.a.parse(h.content),O=p.body.filter((function(e){return"MustacheStatement"==e.type})).flatMap((function(e){return e.path.parts})),m={},g=Object(u.a)(O);try{for(g.s();!(v=g.n()).done;)x=v.value,(y=t.get("params."+x))?(y&&"false"==y&&(y=!1),y&&"true"==y&&(y=!0),m[x]=y):m[x]="exampleValue for "+x}catch(o){g.e(o)}finally{g.f()}b={content:JSON.stringify(m)}}b&&(C(JSON.stringify(JSON.parse(b.content),void 0,2)),d(JSON.parse(b.content))),W(h.content);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){try{var e=f.a.compile(F);R(e(s)),L("")}catch(t){L(t.message)}}),[F,I,s]),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)("div",{id:"edit",className:"main",children:[Object(w.jsx)(N,{},_),"rw"==n&&Object(w.jsxs)("div",{className:"noprint",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"Parameters"})," ",Object(w.jsx)("span",{style:{color:"red"},children:m})]}),Object(w.jsx)("textarea",{value:I,onChange:function(e){C(e.target.value);try{d(JSON.parse(e.target.value)),v(void 0)}catch(t){v(t.message)}},cols:"120",rows:"10"})]}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:[Object(w.jsx)("b",{children:"Markdown template"})," ",H&&Object(w.jsx)("a",{href:H,target:"_blank",rel:"noreferrer",children:"source"}),Object(w.jsx)("span",{style:{color:"red"},children:J})]}),Object(w.jsx)("textarea",{value:F,onChange:function(e){W(e.target.value)},cols:"120",rows:"50"})]})]}),Object(w.jsxs)("div",{style:{paddingLeft:"20px",marginLeft:"20px",width:"r"==n?"80%":"",margin:"r"==n?"auto":""},children:[Object(w.jsxs)("p",{className:"noprint",children:["rw"==n&&Object(w.jsx)("b",{children:"Preview"}),Object(w.jsx)("button",{style:{marginLeft:"20px"},onClick:function(){return window.print()},children:"Print"}),Object(w.jsxs)("button",{style:{marginLeft:"20px"},onClick:function(){return c("rw"==n?"r":"rw")},children:["Toggle to ","rw"==n?"r":"rw"]})]}),Object(w.jsx)("div",{className:"checklist "+n,children:Object(w.jsx)(b.a,{remarkPlugins:[x.a,y.a,O.a,g.a],children:_})})]})]}),"rw"==n&&Object(w.jsxs)("div",{className:"noprint",children:[Object(w.jsx)("p",{children:Object(w.jsxs)("b",{children:["Instantiated markdown, create a"," ",Object(w.jsx)("a",{href:"https://gist.github.com/",target:"_blank",rel:"noreferrer",children:"gist"})," ","and start the procedure"]})}),Object(w.jsx)("textarea",{value:_,cols:"200",rows:"50"})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,259)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(I,{})}),document.getElementById("root")),C()},94:function(e,t,n){},96:function(e,t,n){}},[[258,1,2]]]);
//# sourceMappingURL=main.8c2137b2.chunk.js.map