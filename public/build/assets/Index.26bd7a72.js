import{L as p,r as l,o as a,j as m,w as s,b as t,c as o,h,F as _,d as c,e as b,t as n}from"./app.517383fd.js";import{A as g}from"./App.08eef017.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const f={components:{AppLayout:g,Link:p},props:{costs:Object}},x={class:"col-md px-0 px-md-3 mt-3 mt-md-0"},y=t("div",{class:"bg-white rounded p-3 mb-3"},[t("p",{class:"fs-4 m-0"},"Set Cost Category")],-1),L={class:"bg-white rounded p-3 vh-100"},v={class:"table table-responsive"},w=t("thead",null,[t("tr",null,[t("th",null,"kategory"),t("th",null,"Jk"),t("th",null,"Gedung"),t("th",null,"Perpus"),t("th",null,"Kegiatan"),t("th",null,"Buku & Media"),t("th",null,"Seragam"),t("th",null,"Jilbab"),t("th",null,"IPP"),t("th",null,"Total")])],-1);function B(u,j,d,A,C,N){const r=l("Link"),i=l("AppLayout");return a(),m(i,null,{default:s(()=>[t("div",x,[y,t("div",L,[t("table",v,[w,t("tbody",null,[(a(!0),o(_,null,h(d.costs,(e,F)=>(a(),o("tr",{key:e.id},[t("td",null,[c(r,{href:u.route("admin.cost.edit",e.id)},{default:s(()=>[b(n(e.name),1)]),_:2},1032,["href"])]),t("td",null,n(e.gender),1),t("td",null,n(e.gedung),1),t("td",null,n(e.perpustakaan),1),t("td",null,n(e.kegiatan),1),t("td",null,n(e.bukumedia),1),t("td",null,n(e.seragam),1),t("td",null,n(e.jilbab),1),t("td",null,n(e.ipp),1),t("td",null,n(new Intl.NumberFormat().format(e.gedung+e.perpustakaan+e.kegiatan+e.bukumedia+e.seragam+e.jilbab+e.ipp)),1)]))),128))])])])])]),_:1})}const V=k(f,[["render",B]]);export{V as default};