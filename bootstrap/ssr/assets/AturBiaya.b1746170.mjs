import { A as AppLayout } from "./App.1cb7fdc5.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const AturBiaya_vue_vue_type_style_index_0_scoped_452713fd_lang = "";
const _sfc_main = {
  layout: AppLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))} data-v-452713fd><div class="bg-white rounded p-3 mb-3" data-v-452713fd><p class="fs-4 m-0" data-v-452713fd>Atur Biaya Daftar Ulang</p></div><div class="bg-white rounded p-3 vh-100" data-v-452713fd><button class="btn btn-oorange" data-v-452713fd>tambah kategori</button><hr data-v-452713fd><table class="table table-striped" data-v-452713fd><thead data-v-452713fd><tr data-v-452713fd><th scope="col" data-v-452713fd>No.</th><th scope="col" data-v-452713fd>Kategori</th><th scope="col" data-v-452713fd>Total</th><th scope="col" data-v-452713fd>Action</th></tr></thead><tbody data-v-452713fd><tr data-v-452713fd><td data-v-452713fd>1</td><td data-v-452713fd>adasd</td><td data-v-452713fd>adasd</td><td data-v-452713fd><button class="btn btn-oorange btn-sm" data-v-452713fd>Edit</button><button class="btn btn-oorange btn-sm" data-v-452713fd>Detail</button><button class="btn btn-oorange btn-sm" data-v-452713fd>Hapus</button></td></tr></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/AturBiaya.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AturBiaya = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-452713fd"]]);
export {
  AturBiaya as default
};
