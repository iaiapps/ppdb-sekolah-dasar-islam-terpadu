import { A as AppLayout } from "./App.1cb7fdc5.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const Settings_vue_vue_type_style_index_0_scoped_1e6efa23_lang = "";
const _sfc_main = {
  layout: AppLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))} data-v-1e6efa23><div class="bg-white rounded p-3 mb-3" data-v-1e6efa23><p class="fs-4 m-0" data-v-1e6efa23>Settings Website</p></div><div class="bg-white rounded p-3 vh-100 position-relative" data-v-1e6efa23><div class="mb-5" data-v-1e6efa23><p class="fs-5" data-v-1e6efa23>Setting Timeline</p><hr data-v-1e6efa23><table class="table table-striped" data-v-1e6efa23><thead data-v-1e6efa23><tr data-v-1e6efa23><th scope="col" data-v-1e6efa23>No.</th><th scope="col" data-v-1e6efa23>Keterangan</th><th scope="col" data-v-1e6efa23>Tanggal</th><th scope="col" data-v-1e6efa23>Action</th></tr></thead><tbody data-v-1e6efa23><tr data-v-1e6efa23><td data-v-1e6efa23>adasd</td><td data-v-1e6efa23>adasd</td><td data-v-1e6efa23>adasd</td><td data-v-1e6efa23><button class="btn btn-secondary btn-sm" data-v-1e6efa23>Edit</button></td></tr></tbody></table></div><div class="mb-5" data-v-1e6efa23><p class="fs-5" data-v-1e6efa23>Setting Gelombang</p><hr data-v-1e6efa23><table class="table table-striped" data-v-1e6efa23><thead data-v-1e6efa23><tr data-v-1e6efa23><th scope="col" data-v-1e6efa23>No.</th><th scope="col" data-v-1e6efa23>Keterangan</th><th scope="col" data-v-1e6efa23>Tanggal</th><th scope="col" data-v-1e6efa23>Action</th></tr></thead><tbody data-v-1e6efa23><tr data-v-1e6efa23><td data-v-1e6efa23>adasd</td><td data-v-1e6efa23>adasd</td><td data-v-1e6efa23>adasd</td><td data-v-1e6efa23><button class="btn btn-secondary btn-sm" data-v-1e6efa23>Edit</button></td></tr></tbody></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1e6efa23"]]);
export {
  Settings as default
};
