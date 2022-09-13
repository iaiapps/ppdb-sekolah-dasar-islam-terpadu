import { A as AppLayout } from "./App.9c69cf52.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const Index_vue_vue_type_style_index_0_scoped_c6064eec_lang = "";
const _sfc_main = {
  layout: AppLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))} data-v-c6064eec><div class="table-responsive bg-white rounded p-3 mb-3" data-v-c6064eec><p class="fs-4 m-0" data-v-c6064eec>Home</p></div><div class="table-responsive bg-white rounded p-3 vh-100 position-relative text-center" data-v-c6064eec><div class="bg-oorange back" data-v-c6064eec><img class="logo"${ssrRenderAttr("src", "/storage/img/administrator.png")} alt="user" data-v-c6064eec></div><p class="fs-4 m-0 text-center" data-v-c6064eec> Selamat datang Admin di Dashboard website PPDB SDIT Harapan Umat Jember </p><a class="btn btn-oorange w-50 mt-4" href="/admin/users" data-v-c6064eec> Informasi pendaftar</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c6064eec"]]);
export {
  Index as default
};
