import { A as AppLayout } from "./App.bf9a89ac.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
  name: "JadwalPage",
  layout: AppLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))}><div class="table-responsive bg-white rounded p-3 mb-3"><p class="fs-4 m-0">Jadwal Test</p></div><div class="table-responsive bg-white rounded p-3"><p class="text-center fs-4 m-0"> Jadwal Psikotest akan dilaksanakn pada Sabtu, 11 Februari 2023 </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/JadwalPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JadwalPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  JadwalPage as default
};
