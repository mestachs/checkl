(this.webpackJsonpcheckl=this.webpackJsonpcheckl||[]).push([[0],{237:function(e,t,n){},239:function(e,t,n){},572:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(215),a=n.n(i),s=(n(237),n(108)),o=n.n(s),l=n(109),u=n(216),h=n(8),d=n(32),j=n(232),b=(n(239),n(45)),f=n.n(b),p=n(217),m=n.n(p),O=n(218),g=n.n(O),x=n(219),v=n.n(x),y=n(220),w=n.n(y),k=n(221),S=n(231),N=n(2),I=function(e){var t=e.headings,n=e.activeId,r=e.setActiveId;return Object(N.jsx)("ul",{children:t.map((function(e){return Object(N.jsxs)("li",{className:e.id===n?"active":"",children:[Object(N.jsx)("a",{href:"#".concat(e.id),onClick:function(t){t.preventDefault(),r(e.id)},children:e.title}),e.items.length>0&&Object(N.jsx)("ul",{children:e.items.map((function(e){return Object(N.jsx)("li",{className:e.id===n?"active":"",children:Object(N.jsx)("a",{href:"#".concat(e.id),onClick:function(t){t.preventDefault(),r(e.id)},children:e.title})},e.id)}))})]},e.id)}))})},A=function(e){var t=[],n={h1:0,h2:0,h3:0};return e.forEach((function(e,r){var c=e.innerText,i=e.id;"H1"===e.nodeName&&(n.h1=n.h1+1,n.h2=0,n.h3=0,t.push({id:i,title:n.h1+". "+c,items:[]})),"H2"===e.nodeName&&t.length>0&&(n.h2=n.h2+1,n.h3=0,t[t.length-1].items.push({id:i,title:n.h1+"."+n.h2+" "+c})),"H3"===e.nodeName&&t.length>0&&(n.h3=n.h3+1,t[t.length-1].items.push({id:i,title:n.h1+"."+n.h2+"."+n.h3+" "+c}))})),t},C=function(){var e=c.a.useState(),t=Object(h.a)(e,2),n=t[0],r=t[1],i=function(){var e=c.a.useState([]),t=Object(h.a)(e,2),n=t[0],r=t[1];return c.a.useEffect((function(){var e=Array.from(document.querySelectorAll("body h1, body h2, body h3")),t=A(e);r(t)}),[]),{nestedHeadings:n}}().nestedHeadings;return function(e){c.a.useEffect((function(){Array.from(document.querySelectorAll("h1, h2, h3")).forEach((function(t){t.addEventListener("mouseover",(function(t){e(t.target.id)}),!1)}))}),[e])}((function(e){var t=document.getElementById(n);t&&(t.style.color="");var c=document.getElementById(e);c&&(c.style.color="orange"),r(e)})),Object(N.jsx)("nav",{"aria-label":"Table of contents",children:Object(N.jsx)(I,{headings:i,activeId:n,setActiveId:function(e){var t=document.getElementById(n);t&&(t.style.color="");var c=document.getElementById(e);c.style.color="orange",c.scrollIntoView({behavior:"smooth"}),r(e)}})})},E=S.a;f.a.registerHelper({eq:function(e,t){return e===t},ne:function(e,t){return e!==t},lt:function(e,t){return e<t},gt:function(e,t){return e>t},lte:function(e,t){return e<=t},gte:function(e,t){return e>=t},and:function(){return Array.prototype.every.call(arguments,Boolean)},or:function(){return Array.prototype.slice.call(arguments,0,-1).some(Boolean)}});var L=function(e){var t=e.href,n=e.children,r=Object(j.a)(e,["href","children"]);return Object(N.jsx)("a",Object(d.a)(Object(d.a)({target:"_blank",rel:"noopener noreferrer",href:t,alt:"external link"},r),{},{children:null!==n&&void 0!==n?n:t}))};var B=function(){var e=Object(r.useState)("r"),t=Object(h.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),a=Object(h.a)(i,2),s=a[0],d=a[1],j=Object(r.useState)(),b=Object(h.a)(j,2),p=b[0],O=b[1],x=Object(r.useState)({}),y=Object(h.a)(x,2),S=y[0],I=y[1],A=Object(r.useState)(),B=Object(h.a)(A,2),D=B[0],T=B[1],P=Object(r.useState)(void 0),_=Object(h.a)(P,2),H=_[0],M=_[1],W=Object(r.useState)(void 0),F=Object(h.a)(W,2),J=F[0],V=F[1],q=Object(r.useState)("{{demo}}"),R=Object(h.a)(q,2),U=R[0],z=R[1],G=Object(r.useState)(""),K=Object(h.a)(G,2),Q=K[0],X=K[1],Y=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r,i,a,s,u,h,d,j,b,p,m,g,x,v,y,w,k,S,N,A,C,E,L,B,T;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),n=t.get("markdown"),r=t.get("gist")||"https://gist.github.com/mestachs/e1819a776ca1618b981d1de082a550aa",c(t.get("mode")||"r"),!n){e.next=24;break}return i=n,n.startsWith("https://github.com/")&&(i="https://raw.githubusercontent.com/"+n.split("/").slice(3,5).join("/")+"/"+n.split("/").slice(6).join("/")),a={},D&&(a={Accept:"application/vnd.github.v3.raw",Authorization:"token ".concat(D)},i="https://api.github.com/repos/"+n.split("/").slice(3,5).join("/")+"/contents/"+n.split("/").slice(7).join("/")),V(n),e.next=12,fetch(i,{headers:a}).then((function(e){return e.text()}));case 12:s=e.sent,z(s),u=f.a.parse(s),h=u.body.filter((function(e){return"MustacheStatement"==e.type})).flatMap((function(e){return e.path.parts})),d={type:"object",properties:{}},j={},b=Object(l.a)(h);try{for(b.s();!(p=b.n()).done;)m=p.value,(g=t.get("params."+m))?(g&&"false"==g&&(g=!1),g&&"true"==g&&(g=!0),j[m]=g):j[m]="exampleValuefor"+m,d.properties[m]={type:"string",default:g},m.endsWith("Url")&&(d.properties[m].format="uri")}catch(o){b.e(o)}finally{b.f()}O(d),I(j),e.next=38;break;case 24:if(!r){e.next=38;break}return x=r,(r.startsWith("https://gist.github.com")||r.startsWith("https://gist.githubusercontent.com"))&&(x=r.split("/")[4]),e.next=29,fetch("https://api.github.com/gists/".concat(x)).then((function(e){return e.json()}));case 29:if(v=e.sent,V(v.html_url),void 0==(y=v.files["tasklist.md"]||v.files["checklist.md"])&&(w=Object.keys(v.files).find((function(e){return e.endsWith(".md")})),y=v.files[w]),void 0==(k=v.files["params.json"])){S=f.a.parse(y.content),N=S.body.filter((function(e){return"MustacheStatement"==e.type})).flatMap((function(e){return e.path.parts})),A={type:"object",properties:{}},C={},E=Object(l.a)(N);try{for(E.s();!(L=E.n()).done;)B=L.value,(T=t.get("params."+B))?(T&&"false"==T&&(T=!1),T&&"true"==T&&(T=!0),C[B]=T):C[B]="exampleValuefor"+B,A.properties[B]={type:"string",default:T},B.endsWith("Url")&&(A.properties[B].format="uri")}catch(o){E.e(o)}finally{E.f()}O(A),k={content:JSON.stringify(C)}}k&&I(JSON.parse(k.content)),z(y.content),setTimeout((function(){var e=window.location.hash;if(e)try{var t=document.querySelector(e);t&&t.scrollIntoView()}catch(n){}}),1e3);case 38:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Y()}),[]),Object(r.useEffect)((function(){try{var e=f.a.compile(U);X(e(S)),M("")}catch(t){M(t.message)}}),[U,JSON.stringify(S),S]),Object(N.jsxs)("div",{className:"App",children:[Object(N.jsxs)("div",{id:"edit",className:"main",children:[Object(N.jsxs)("div",{style:"rw"==n?{display:"flex",flexDirection:"column"}:{},children:[Object(N.jsxs)("div",{className:"noprint login",children:["Accessing a private repo ?",Object(N.jsx)("input",{type:"checkbox",onChange:function(e){return d(!s)}}),Object(N.jsx)("br",{}),s&&Object(N.jsxs)("div",{children:[Object(N.jsxs)("p",{children:["",Object(N.jsx)("br",{}),Object(N.jsxs)(L,{href:"https://github.com/settings/tokens",style:{paddingRight:"10px"},children:["[_] Generate a github token ",Object(N.jsx)("br",{}),"[_] Limit the scope to repo and/or gist ",Object(N.jsx)("br",{}),"[_] Paste it with 1password",Object(N.jsx)("br",{}),"[_] Then hit the reload button",Object(N.jsx)("br",{})]})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("label",{children:["Token:"," ",Object(N.jsx)("input",{type:"password",onChange:function(e){T(e.target.value)}})]}),Object(N.jsx)("button",{onClick:Y,children:"Reload"})]}),Object(N.jsxs)("p",{className:"noprint",children:[Object(N.jsx)("button",{onClick:function(){return window.print()},children:"Print"}),Object(N.jsxs)("button",{style:{marginLeft:"20px"},onClick:function(){return c("rw"==n?"r":"rw")},children:["Toggle to ","rw"==n?"r":"rw"]})]})]}),p&&Object(N.jsx)(E,{schema:p,liveValidate:!0,formData:S,onChange:function(e){for(var t=new URL(window.location),n=t.searchParams,r=0,c=Object.keys(e.formData);r<c.length;r++){var i=c[r];n.set("params."+i,e.formData[i])}window.history.replaceState({},"",t.toString()),I(e.formData)},children:Object(N.jsx)(r.Fragment,{})}),Object(N.jsx)(C,{},Q)]}),"rw"==n&&Object(N.jsx)("div",{className:"noprint",children:Object(N.jsxs)("div",{style:{paddingLeft:"40px"},children:[Object(N.jsxs)("p",{children:[Object(N.jsx)("b",{children:"Markdown template"})," ",J&&Object(N.jsx)(L,{href:J,children:"source"}),Object(N.jsx)("span",{style:{color:"red"},children:H})]}),Object(N.jsx)("textarea",{value:U,onChange:function(e){z(e.target.value)},cols:"80",rows:"50"})]})}),Object(N.jsx)("div",{style:{paddingLeft:"20px",marginLeft:"20px",width:"r"==n?"80%":"",margin:"r"==n?"auto":""},children:Object(N.jsxs)("div",{className:"checklist "+n,children:[Object(N.jsxs)("p",{children:["Source :"," ",Object(N.jsx)(L,{href:J,children:J})]}),Object(N.jsx)(m.a,{remarkPlugins:[w.a,k.a,g.a,v.a],children:Q})]})})]}),"rw"==n&&Object(N.jsxs)("div",{className:"noprint",children:[Object(N.jsx)("p",{children:Object(N.jsxs)("b",{children:["Instantiated markdown, create a"," ",Object(N.jsx)(L,{href:"https://gist.github.com/",target:"_blank",rel:"noreferrer",children:"gist"})," ","and start the procedure"]})}),Object(N.jsx)("textarea",{value:Q,cols:"200",rows:"50"})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,573)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(B,{})}),document.getElementById("root")),D()}},[[572,1,2]]]);
//# sourceMappingURL=main.d6c06871.chunk.js.map