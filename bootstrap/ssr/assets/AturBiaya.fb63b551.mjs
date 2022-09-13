import { A as AppLayout } from "./App.9c69cf52.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const AturBiaya_vue_vue_type_style_index_0_scoped_003e78c5_lang = "";
const _sfc_main = {
  layout: AppLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))} data-v-003e78c5><div class="table-responsive bg-white rounded p-3 mb-3" data-v-003e78c5><p class="fs-4 m-0" data-v-003e78c5>Atur Biaya Daftar Ulang</p></div><div class="table-responsive bg-white rounded p-3 vh-100" data-v-003e78c5><button class="btn btn-oorange" data-v-003e78c5>tambah kategori</button><hr data-v-003e78c5><table class="table table-striped" data-v-003e78c5><thead data-v-003e78c5><tr data-v-003e78c5><th scope="col" data-v-003e78c5>No.</th><th scope="col" data-v-003e78c5>Kategori</th><th scope="col" data-v-003e78c5>Total</th><th scope="col" data-v-003e78c5>Action</th></tr></thead><tbody data-v-003e78c5><tr data-v-003e78c5><td data-v-003e78c5>1</td><td data-v-003e78c5>adasd</td><td data-v-003e78c5>adasd</td><td data-v-003e78c5><button class="btn btn-oorange btn-sm" data-v-003e78c5>Edit</button><button class="btn btn-oorange btn-sm" data-v-003e78c5> Detail </button><button class="btn btn-oorange btn-sm" data-v-003e78c5> Hapus </button></td></tr></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/AturBiaya.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AturBiaya = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-003e78c5"]]);
export {
  AturBiaya as default
};
