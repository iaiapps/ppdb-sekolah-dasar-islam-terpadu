import { A as AppLayout } from "./App.9c69cf52.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const TerimaTolak_vue_vue_type_style_index_0_scoped_2adc91c2_lang = "";
const _sfc_main = {
  layout: AppLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))} data-v-2adc91c2><div class="table-responsive bg-white rounded p-3 mb-3" data-v-2adc91c2><p class="fs-4 m-0" data-v-2adc91c2>Terima atau Tolak Peserta</p></div><div class="table-responsive bg-white rounded p-3 vh-100 position-relative text-center" data-v-2adc91c2><table class="table table-striped" data-v-2adc91c2><thead data-v-2adc91c2><tr data-v-2adc91c2><th scope="col" data-v-2adc91c2>No.</th><th scope="col" data-v-2adc91c2>No. WhatssApp</th><th scope="col" data-v-2adc91c2>Nama</th><th scope="col" data-v-2adc91c2>Status</th><th scope="col" data-v-2adc91c2>Action</th></tr></thead><tbody data-v-2adc91c2><tr data-v-2adc91c2><td data-v-2adc91c2>adasd</td><td data-v-2adc91c2>adasd</td><td data-v-2adc91c2>adasd</td><td data-v-2adc91c2>Terima|Tolak</td><td data-v-2adc91c2><div class="btn-group" data-v-2adc91c2><button class="btn btn-oorange btn-sm" data-v-2adc91c2> Terima </button><button class="btn btn-danger btn-sm" data-v-2adc91c2> Tolak </button></div></td></tr></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/TerimaTolak.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TerimaTolak = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2adc91c2"]]);
export {
  TerimaTolak as default
};
