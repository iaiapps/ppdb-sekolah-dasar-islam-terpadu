import{L as h,r as l,o as a,j as b,w as s,b as t,d as o,c as d,h as c,e as i,t as n,F as g}from"./app.a478931d.js";import{A as f}from"./App.f90d1e5f.js";import{A as k}from"./Alert.c6fe46e1.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const A={components:{AppLayout:f,Link:h,Alert:k},props:{costs:Object}},v={class:"col-md px-0 px-md-3 mt-3 mt-md-0"},x=t("div",{class:"table-responsive bg-white rounded p-3 mb-3"},[t("p",{class:"fs-4 m-0"},"Set Cost Category")],-1),L={class:"table-responsive bg-white rounded p-3 vh-100"},w=t("i",{class:"bi bi-plus-square-fill"},null,-1),B=i(" Add Category"),C={class:"table table-responsive"},j=t("thead",null,[t("tr",null,[t("th",null,"kategory"),t("th",null,"Jk"),t("th",null,"Gedung"),t("th",null,"Perpus"),t("th",null,"Kegiatan"),t("th",null,"Buku & Media"),t("th",null,"Seragam"),t("th",null,"Jilbab"),t("th",null,"IPP"),t("th",null,"Total")])],-1);function N(r,F,p,I,P,S){const m=l("Alert"),u=l("Link"),_=l("AppLayout");return a(),b(_,null,{default:s(()=>[t("div",v,[o(m),x,t("div",L,[o(u,{as:"button",class:"btn btn-sm btn-oorange text-light mb-3",href:r.route("admin.cost.create")},{default:s(()=>[w,B]),_:1},8,["href"]),t("table",C,[j,t("tbody",null,[(a(!0),d(g,null,c(p.costs,(e,V)=>(a(),d("tr",{key:e.id},[t("td",null,[o(u,{href:r.route("admin.cost.edit",e.id)},{default:s(()=>[i(n(e.name),1)]),_:2},1032,["href"])]),t("td",null,n(e.gender),1),t("td",null,n(e.gedung),1),t("td",null,n(e.perpustakaan),1),t("td",null,n(e.kegiatan),1),t("td",null,n(e.bukumedia),1),t("td",null,n(e.seragam),1),t("td",null,n(e.jilbab),1),t("td",null,n(e.ipp),1),t("td",null,n(new Intl.NumberFormat().format(e.gedung+e.perpustakaan+e.kegiatan+e.bukumedia+e.seragam+e.jilbab+e.ipp)),1)]))),128))])])])])]),_:1})}const D=y(A,[["render",N]]);export{D as default};
