(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(13),c=a.n(s),i=(a(20),a(3)),d=a(15),l=(a(21),r.a.createContext({})),o=a(0),j=function(){var e=Object(n.useContext)(l);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(o.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(o.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(o.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(o.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(o.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(o.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(o.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(i.date)})]},a.uuid)})):Object(o.jsx)(o.Fragment,{})})},u=(a(23),function(){var e=Object(n.useContext)(l);return Object(o.jsx)("div",{className:"datatable mt-5",children:Object(o.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,n=t.width;return Object(o.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.handleSort(a)},children:[a,Object(o.jsx)("span",{className:"pointer"})]},a)}))})}),Object(o.jsx)(j,{})]})})}),b=(a(24),function(){var e=Object(n.useContext)(l);return Object(o.jsx)("div",{className:"searchbox",children:Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("div",{className:"input-group-prepend",children:Object(o.jsx)("span",{className:"input-group-text",id:"",children:"Search"})}),Object(o.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"name","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}})]})})});a(25);var h=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse row",id:"navbarNav",children:Object(o.jsx)("div",{className:"search-area col-4",children:Object(o.jsx)(b,{})})})]})},m=a(14),f=a.n(m),v=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},O=(a(44),function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){v().then((function(e){console.log(e.data.results),r(Object(i.a)(Object(i.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(o.jsxs)(l.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,n=a.users.filter((function(e){var a=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(t,a),-1!==a.indexOf(t.toLowerCase()))return e}));r(Object(i.a)(Object(i.a)({},a),{},{filteredUsers:n}))},handleSort:function(e){var t=a.headings.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="descend"===t?"ascend":"descend";var n=a.filteredUsers.sort((function(a,n){return"ascend"===t?void 0===a[e]?1:void 0===n[e]?-1:"name"===e?a[e].first.localeCompare(n[e].first):"dob"===e?a[e].age-n[e].age:a[e].localeCompare(n[e]):void 0===a[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(a[e].first):"dob"===e?n[e].age-a[e].age:n[e].localeCompare(a[e])})),s=a.headings.map((function(a){return a.order=a.name===e?t:a.order,a}));r(Object(i.a)(Object(i.a)({},a),{},{filteredUsers:n,headings:s}))}},children:[Object(o.jsx)(h,{}),Object(o.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(o.jsx)(u,{}):Object(o.jsx)("div",{})})]})});a(45);var p=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(O,{})})};a(46);var g=function(e){var t=e.children;return Object(o.jsx)("div",{className:"wrapper",children:t})};a(47);var x=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Employee Directory"}),Object(o.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})};a(48);var N=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(g,{children:[Object(o.jsx)(x,{}),Object(o.jsx)(p,{})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};a(49);c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.c4a369b0.chunk.js.map