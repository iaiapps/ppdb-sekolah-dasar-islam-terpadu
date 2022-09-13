import { A as AppLayout } from "./App.bf9a89ac.mjs";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const Show_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "PendaftarPage",
  layout: AppLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))}><div class="table-responsive bg-white rounded p-3 mb-3"> status peserta : Diterima di SDIT Harapan Umat Jember </div><div class="table-responsive bg-white rounded p-3 mb-3"><p class="fs-4 m-0">Data Pendaftar</p></div><div class="table-responsive bg-white rounded p-3">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/formulir",
    class: "btn btn-oorange mb-3 w-100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Isi Formulir Pendaftaran`);
      } else {
        return [
          createTextVNode("Isi Formulir Pendaftaran")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="row"><div class="col"><p>Data Diri</p><table class="table"><thead><tr><th scope="col">#</th><th scope="col">Form</th><th scope="col">Keterangan</th></tr></thead><tbody><tr><td scope="row">1</td><td>Nama</td><td>Ikrom</td></tr><tr><td>2</td><td>Alamat</td><td>Jl. Sumatera</td></tr></tbody></table></div><div class="col"><p>Data Ayah</p><table class="table"><thead><tr><th scope="col">#</th><th scope="col">Form</th><th scope="col">Keterangan</th></tr></thead><tbody><tr><th>1</th><td>Nama Ayah</td><td>xyxyxyxyxyxyxy</td></tr><tr><th>2</th><td>Pekerjaan</td><td>xyxyxyxyxyxyxy</td></tr><tr><th>3</th><td>Alamat</td><td>xyxyxyxyxyxyxy</td></tr></tbody></table><p>Data Ibu</p><table class="table"><thead><tr><th scope="col">#</th><th scope="col">Form</th><th scope="col">Keterangan</th></tr></thead><tbody><tr><th>1</th><td>Nama Ibu</td><td>xyxyxyxyxyxyxy</td></tr><tr><th>2</th><td>Pekerjaan</td><td>xyxyxyxyxyxyxy</td></tr><tr><th>3</th><td>Alamat</td><td>xyxyxyxyxyxyxy</td></tr></tbody></table></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
