import{o as t,c as n,b as s,t as o,F as l,h as c,j as i,n as d,x as u,L as m,e as b}from"./app.a478931d.js";const _={class:"d-md-flex justify-content-between align-middle text-around my-3"},y={class:"my-1"},h=b(" Total: "),x={class:"badge bg-dark"},f=["innerHTML"],p={__name:"Pagination",props:{links:Array,total:Number},setup(a){return(g,L)=>(t(),n("div",_,[s("div",y,[h,s("span",x,o(a.total),1)]),s("div",null,[(t(!0),n(l,null,c(a.links,(e,r)=>(t(),n(l,{key:r},[e.url===null?(t(),n("div",{key:0,innerHTML:e.label,class:"btn mx-1 btn-sm btn-outline-secondary disabled"},null,8,f)):(t(),i(u(m),{key:1,href:e.url,innerHTML:e.label,class:d(["btn mx-1 btn-sm btn-outline-secondary",{"btn-oorange":e.active}])},null,8,["href","innerHTML","class"]))],64))),128))])]))}};export{p as _};
