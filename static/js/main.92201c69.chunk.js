(this.webpackJsonpcheckl=this.webpackJsonpcheckl||[]).push([[0],{125:function(e,t,n){},342:function(e,t,n){},783:function(e,t,n){var r={"./locale":318,"./locale.js":318};function c(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=a,e.exports=c,c.id=783},841:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(324),i=n.n(a),s=(n(342),n(125),n(842)),o=n(331),l=n(8),u=n.n(l),d=n(26),h=n(12),j=n(7),f=n(2),b=n(123),p=n(121),m=n.n(p),O=n(81),x=n.n(O),g=n(115),v=n.n(g),y=n(116),w=n.n(y),k=n(117),S=n.n(k),N=n(118),A=n.n(N),E=n(119),C=n(120),I=n.n(C),D=n(335),L=n(3),B=function(e){var t=e.headings,n=e.activeId,r=e.setActiveId;return Object(L.jsx)("ul",{children:t.map((function(e){return Object(L.jsxs)("li",{className:e.id===n?"active":"",children:[Object(L.jsx)("a",{href:"#".concat(e.id),onClick:function(t){t.preventDefault(),r(e.id)},children:e.title}),e.items.length>0&&Object(L.jsx)("ul",{children:e.items.map((function(e){return Object(L.jsx)("li",{className:e.id===n?"active":"",children:Object(L.jsx)("a",{href:"#".concat(e.id),onClick:function(t){t.preventDefault(),r(e.id)},children:e.title})},e.id)}))})]},e.id)}))})},M=function(e){var t=[],n={h1:0,h2:0,h3:0};return e.forEach((function(e,r){var c=e.innerText,a=e.id;"H1"===e.nodeName&&(n.h1=n.h1+1,n.h2=0,n.h3=0,t.push({id:a,title:n.h1+". "+c,items:[]})),"H2"===e.nodeName&&t.length>0&&(n.h2=n.h2+1,n.h3=0,t[t.length-1].items.push({id:a,title:n.h1+"."+n.h2+" "+c})),"H3"===e.nodeName&&t.length>0&&(n.h3=n.h3+1,t[t.length-1].items.push({id:a,title:n.h1+"."+n.h2+"."+n.h3+" "+c}))})),t},T=function(){var e=c.a.useState(),t=Object(j.a)(e,2),n=t[0],r=t[1],a=function(){var e=c.a.useState([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return c.a.useEffect((function(){var e=Array.from(document.querySelectorAll("body h1, body h2, body h3")),t=M(e);r(t)}),[]),{nestedHeadings:n}}().nestedHeadings;return function(e){c.a.useEffect((function(){Array.from(document.querySelectorAll("h1, h2, h3")).forEach((function(t){t.addEventListener("mouseover",(function(t){e(t.target.id)}),!1)}))}),[e])}((function(e){var t=document.getElementById(n);t&&(t.style.color="");var c=document.getElementById(e);c&&(c.style.color="orange"),r(e)})),Object(L.jsx)("nav",{"aria-label":"Table of contents",className:"fade-in-text",children:Object(L.jsx)(B,{headings:a,activeId:n,setActiveId:function(e){var t=document.getElementById(n);t&&(t.style.color="");var c=document.getElementById(e);c.style.color="orange",c.scrollIntoView({behavior:"smooth"}),r(e)}})})},_=D.a;x.a.registerHelper({eq:function(e,t){return e===t},ne:function(e,t){return e!==t},lt:function(e,t){return e<t},gt:function(e,t){return e>t},lte:function(e,t){return e<=t},gte:function(e,t){return e>=t},and:function(){return Array.prototype.every.call(arguments,Boolean)},or:function(){return Array.prototype.slice.call(arguments,0,-1).some(Boolean)}});var P=function(e){var t=e.href,n=e.children,r=Object(b.a)(e,["href","children"]);return Object(L.jsx)("a",Object(f.a)(Object(f.a)({target:"_blank",rel:"noopener noreferrer",href:t,alt:"external link"},r),{},{children:null!==n&&void 0!==n?n:t}))};var W=function(){var e=Object(r.useState)("r"),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(j.a)(a,2),s=i[0],o=i[1],l=Object(r.useState)(),f=Object(j.a)(l,2),b=f[0],p=f[1],O=Object(r.useState)({}),g=Object(j.a)(O,2),y=g[0],k=g[1],N=Object(r.useState)(),C=Object(j.a)(N,2),D=C[0],B=C[1],M=Object(r.useState)(void 0),W=Object(j.a)(M,2),q=W[0],F=W[1],H=Object(r.useState)(void 0),J=Object(j.a)(H,2),U=J[0],V=J[1],R=Object(r.useState)("{{demo}}"),z=Object(j.a)(R,2),G=z[0],K=z[1],Q=Object(r.useState)(""),X=Object(j.a)(Q,2),Y=X[0],Z=X[1],$=function(){var e=Object(h.a)(u.a.mark((function e(){var t,n,r,a,i,s,l,h,j,f,b,m,O,g,v,y,w,S,N,A,E,C,I,L,B,M,T;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),n=t.get("markdown"),r=t.get("gist")||"https://gist.github.com/mestachs/e1819a776ca1618b981d1de082a550aa",c(t.get("mode")||"r"),!n){e.next=24;break}return a=n,n.startsWith("https://github.com/")&&(a="https://raw.githubusercontent.com/"+n.split("/").slice(3,5).join("/")+"/"+n.split("/").slice(6).join("/")),i={},D&&(i={Accept:"application/vnd.github.v3.raw",Authorization:"token ".concat(D)},a="https://api.github.com/repos/"+n.split("/").slice(3,5).join("/")+"/contents/"+n.split("/").slice(7).join("/")),V(n),e.next=12,fetch(a,{headers:i}).then((function(e){return o(404==e.status),e.text()}));case 12:s=e.sent,K(s),l=x.a.parse(s),h=l.body.filter((function(e){return"MustacheStatement"==e.type})).flatMap((function(e){return e.path.parts})),j={type:"object",properties:{}},f={},b=Object(d.a)(h);try{for(b.s();!(m=b.n()).done;)O=m.value,(g=t.get("params."+O))?(g&&"false"==g&&(g=!1),g&&"true"==g&&(g=!0),f[O]=g):f[O]="exampleValuefor"+O,j.properties[O]={type:"string",default:g},O.endsWith("Url")&&(j.properties[O].format="uri")}catch(u){b.e(u)}finally{b.f()}p(j),k(f),e.next=38;break;case 24:if(!r){e.next=38;break}return v=r,(r.startsWith("https://gist.github.com")||r.startsWith("https://gist.githubusercontent.com"))&&(v=r.split("/")[4]),e.next=29,fetch("https://api.github.com/gists/".concat(v)).then((function(e){return e.json()}));case 29:if(y=e.sent,V(y.html_url),void 0==(w=y.files["tasklist.md"]||y.files["checklist.md"])&&(S=Object.keys(y.files).find((function(e){return e.endsWith(".md")})),w=y.files[S]),void 0==(N=y.files["params.json"])){A=x.a.parse(w.content),E=A.body.filter((function(e){return"MustacheStatement"==e.type})).flatMap((function(e){return e.path.parts})),C={type:"object",properties:{}},I={},L=Object(d.a)(E);try{for(L.s();!(B=L.n()).done;)M=B.value,(T=t.get("params."+M))?(T&&"false"==T&&(T=!1),T&&"true"==T&&(T=!0),I[M]=T):I[M]="exampleValuefor"+M,C.properties[M]={type:"string",default:T},M.endsWith("Url")&&(C.properties[M].format="uri")}catch(u){L.e(u)}finally{L.f()}p(C),N={content:JSON.stringify(I)}}N&&k(JSON.parse(N.content)),K(w.content),setTimeout((function(){var e=window.location.hash;if(e)try{var t=document.querySelector(e);t&&t.scrollIntoView()}catch(n){}}),1e3);case 38:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){$()}),[]),Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme","dark");try{var e=x.a.compile(G);Z(e(y)),F("")}catch(t){F(t.message)}}),[G,JSON.stringify(y),y]),Object(r.useEffect)((function(){var e=document.querySelectorAll(".language-mermaid"),t=Array.from(e);t.forEach((function(e){return e.parentNode.style="background-color:white"})),console.log(t),m.a.init({noteMargin:10},".language-mermaid")}),[Y]),Object(L.jsxs)("div",{className:"App",children:[Object(L.jsxs)("div",{id:"edit",className:"main",children:[Object(L.jsxs)("div",{style:"rw"==n?{display:"flex",flexDirection:"column"}:{},children:[Object(L.jsxs)("div",{className:"noprint login fade-in-text",children:["Accessing a private repo ?",Object(L.jsx)("input",{type:"checkbox",onChange:function(e){return o(!s)}}),Object(L.jsx)("br",{}),s&&Object(L.jsxs)("div",{children:[Object(L.jsxs)("p",{children:["",Object(L.jsx)("br",{}),Object(L.jsxs)(P,{href:"https://github.com/settings/tokens",style:{paddingRight:"10px"},children:["[_] Generate a github token ",Object(L.jsx)("br",{}),"[_] Limit the scope to repo and/or gist ",Object(L.jsx)("br",{}),"[_] Paste it with 1password",Object(L.jsx)("br",{}),"[_] Then hit the reload button",Object(L.jsx)("br",{})]})]}),Object(L.jsx)("br",{}),Object(L.jsxs)("label",{children:["Token:"," ",Object(L.jsx)("input",{type:"password",onChange:function(e){B(e.target.value)}})]}),Object(L.jsx)("button",{onClick:$,children:"Reload"})]}),Object(L.jsxs)("p",{className:"noprint",children:[Object(L.jsx)("button",{onClick:function(){return window.print()},children:"Print"}),Object(L.jsxs)("button",{style:{marginLeft:"20px"},onClick:function(){return c("rw"==n?"r":"rw")},children:["Toggle to ","rw"==n?"r":"rw"]})]})]}),b&&Object(L.jsx)(_,{schema:b,liveValidate:!0,formData:y,onChange:function(e){for(var t=new URL(window.location),n=t.searchParams,r=0,c=Object.keys(e.formData);r<c.length;r++){var a=c[r];n.set("params."+a,e.formData[a])}window.history.replaceState({},"",t.toString()),k(e.formData)},children:Object(L.jsx)(r.Fragment,{})}),Object(L.jsx)(T,{},Y)]}),"rw"==n&&Object(L.jsx)("div",{className:"noprint",children:Object(L.jsxs)("div",{style:{paddingLeft:"40px"},children:[Object(L.jsxs)("p",{children:[Object(L.jsx)("b",{children:"Markdown template"})," ",U&&Object(L.jsx)(P,{href:U,children:"source"}),Object(L.jsx)("span",{style:{color:"red"},children:q})]}),Object(L.jsx)("textarea",{value:G,onChange:function(e){K(e.target.value)},cols:"80",rows:"50"})]})}),Object(L.jsx)("div",{style:{paddingLeft:"20px",marginLeft:"20px",width:"r"==n?"80%":"",margin:"r"==n?"auto":""},children:Object(L.jsxs)("div",{className:"checklist "+n+" fade-in-text",children:[Object(L.jsxs)("p",{children:["Source :"," ",Object(L.jsx)(P,{href:U,children:U})]}),Object(L.jsx)(v.a,{remarkPlugins:[A.a,E.a,w.a,S.a,I.a],children:Y},Y)]})})]}),"rw"==n&&Object(L.jsxs)("div",{className:"noprint",children:[Object(L.jsx)("p",{children:Object(L.jsxs)("b",{children:["Instantiated markdown, create a"," ",Object(L.jsx)(P,{href:"https://gist.github.com/",target:"_blank",rel:"noreferrer",children:"gist"})," ","and start the procedure"]})}),Object(L.jsx)("textarea",{value:Y,cols:"200",rows:"50"})]})]})},q=n(843),F=n(333),H=n.n(F),J=function(e){var t=e.text;return Object(L.jsx)("div",{class:"chip",alt:t,children:t})},U=function(e){var t,n=window.location.href.split("/gh/")[1],c=Object(q.a)(["repoContent",n],Object(h.a)(u.a.mark((function e(){var t,r,c,a,i,s,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/"+n).then((function(e){return e.text()}));case 2:t=e.sent,r=t.indexOf("---",5),c=t.slice(3,r).split("\n"),a={},i=Object(d.a)(c);try{for(i.s();!(s=i.n()).done;){o=s.value,l=o.indexOf(":");try{a[o.slice(0,l)]=JSON.parse(o.slice(l+1))}catch(u){a[o.slice(0,l)]=o.slice(l+1)}}}catch(h){i.e(h)}finally{i.f()}return e.abrupt("return",{location:n,meta:a,content:t.slice(r+3)});case 9:case"end":return e.stop()}}),e)}))));return Object(r.useEffect)((function(){var e=document.querySelectorAll(".language-mermaid"),t=Array.from(e);t.forEach((function(e){return e.parentNode.style="background-color:white"})),console.log(t),m.a.init({noteMargin:10},".language-mermaid"),H.a.highlightAll()}),[null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.content]),Object(L.jsx)("div",{children:Object(L.jsx)("div",{style:{width:"80%",margin:"auto"},children:c.data&&Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(T,{},c.data.content),Object(L.jsx)("br",{}),c.data.meta.tags&&c.data.meta.tags.map((function(e){return Object(L.jsx)(J,{title:e,text:e})}))]}),Object(L.jsxs)("div",{style:{minWidth:"70%"},children:[Object(L.jsx)("div",{style:{fontSize:"3em",fontWeight:"bolder",textAlign:"center",width:"70%",margin:"auto",marginBottom:"30px"},children:c.data.meta.title}),Object(L.jsx)("code",{style:{float:"right"},children:c.data.meta.date}),Object(L.jsx)("br",{}),Object(L.jsx)(v.a,{remarkPlugins:[A.a,E.a,w.a,S.a,I.a],children:c.data.content},c.data.content)]})]})})})},V=n(334),R=n(4),z=new s.a;var G=function(){return Object(L.jsx)(o.a,{client:z,children:Object(L.jsx)(V.a,{children:Object(L.jsxs)(R.c,{children:[Object(L.jsx)(R.a,{path:"gh/:user/:repo/*",element:Object(L.jsx)(U,{})}),Object(L.jsx)(R.a,{exact:!0,path:"/",element:Object(L.jsx)(W,{})})]})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,844)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(G,{})}),document.getElementById("root")),K()}},[[841,1,2]]]);
//# sourceMappingURL=main.92201c69.chunk.js.map