import{u as m,o as a,c as d,b as n,m as l,v as i,l as s}from"./app.7efc3097.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";const p={props:{sets:Object},setup(r){return{form:m(r.sets)}}},u=n("input",{type:"submit",value:"Update"},null,-1);function c(r,e,v,o,x,b){return a(),d("div",null,[n("form",{onSubmit:e[3]||(e[3]=s(t=>o.form.put(r.route("timeline.update",o.form.id)),["prevent"]))},[l(n("input",{type:"text",placeholder:"Info","onUpdate:modelValue":e[0]||(e[0]=t=>o.form.info=t)},null,512),[[i,o.form.info]]),l(n("input",{type:"text",placeholder:"Date","onUpdate:modelValue":e[1]||(e[1]=t=>o.form.date=t)},null,512),[[i,o.form.date]]),l(n("input",{type:"text",placeholder:"Icon","onUpdate:modelValue":e[2]||(e[2]=t=>o.form.icon=t)},null,512),[[i,o.form.icon]]),u],32)])}const V=f(p,[["render",c]]);export{V as default};