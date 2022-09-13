import { A as AppLayout } from "./App.9c69cf52.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
  name: "PendaftarPage",
  layout: AppLayout,
  props: {
    status: String,
    student: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))}><div class="table-responsive bg-white rounded p-3 mb-3"><p class="fs-4 m-0">Informasi Biaya Daftar Ulang</p></div><div class="table-responsive bg-white rounded p-3"><img class="img-fluid"${ssrRenderAttr("src", "/storage/img/rincian.svg")} alt="rincian"><h5>CATATAN :</h5><p> Silahkan donwload surat pernyataan berikut ini. Dibawa dan dikumpulkan ketika ananda mengikuti Psikotest </p><a class="btn btn-oorange mb-4"${ssrRenderAttr("href", "/storage/img/surat.pdf")} download> download disini </a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/InformasiPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InformasiPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  InformasiPage as default
};
