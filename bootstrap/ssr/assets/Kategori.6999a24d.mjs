import { A as AppLayout } from "./App.d1713471.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const Kategori_vue_vue_type_style_index_0_scoped_d74b8f2c_lang = "";
const _sfc_main = {
  layout: AppLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))} data-v-d74b8f2c><div class="bg-white rounded p-3 mb-3" data-v-d74b8f2c><p class="fs-4 m-0" data-v-d74b8f2c>Kategori Biaya Daftar Ulang</p></div><div class="bg-white rounded p-3 vh-100 position-relative text-center" data-v-d74b8f2c><table class="table table-striped" data-v-d74b8f2c><thead data-v-d74b8f2c><tr data-v-d74b8f2c><th scope="col" data-v-d74b8f2c>No.</th><th scope="col" data-v-d74b8f2c>No. WhatssApp</th><th scope="col" data-v-d74b8f2c>Nama</th><th scope="col" data-v-d74b8f2c>Kategori Biaya</th><th scope="col" data-v-d74b8f2c>Action</th></tr></thead><tbody data-v-d74b8f2c><tr data-v-d74b8f2c><td data-v-d74b8f2c>adasd</td><td data-v-d74b8f2c>adasd</td><td data-v-d74b8f2c>adasd</td><td data-v-d74b8f2c>Terima|Tolak</td><td data-v-d74b8f2c><button class="btn btn-oorange btn-sm" data-v-d74b8f2c>Simpan</button></td></tr></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Kategori.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Kategori = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d74b8f2c"]]);
export {
  Kategori as default
};
