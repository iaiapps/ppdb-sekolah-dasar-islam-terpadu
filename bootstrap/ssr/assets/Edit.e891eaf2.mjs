import { Link } from "@inertiajs/inertia-vue3";
import "@inertiajs/inertia";
import { A as AppLayout } from "./App.1cb7fdc5.mjs";
import { resolveComponent, withCtx, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    AppLayout,
    Link
  },
  props: {
    cost: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-md px-0 px-md-3 mt-3 mt-md-0"${_scopeId}><div class="bg-white rounded p-3 mb-3"${_scopeId}><p class="fs-4 m-0"${_scopeId}>Set Cost Category</p></div><div class="bg-white rounded p-3"${_scopeId}><form${_scopeId}><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>Kategori</span><input type="text" class="form-control"${ssrRenderAttr("value", $props.cost.name)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>Jenis kelamin</span><input type="text" class="form-control"${ssrRenderAttr("value", $props.cost.gender)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>gedung</span><input for="gedung" type="text" class="form-control"${ssrRenderAttr("value", $props.cost.gedung)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>perpustakaan</span><input for="perpustakaan" type="text" class="form-control"${ssrRenderAttr("value", $props.cost.perpustakaan)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>kegiatan</span><input for="kegiatan" type="text" class="form-control"${ssrRenderAttr("value", $props.cost.kegiatan)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>bukumedia</span><input for="bukumedia" type="text" class="form-control"${ssrRenderAttr("value", $props.cost.bukumedia)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>seragam</span><input for="seragam" type="text" class="form-control"${ssrRenderAttr("value", $props.cost.seragam)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>jilbab</span><input for="jilbab" type="text" class="form-control"${ssrRenderAttr("value", $props.cost.jilbab)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>ipp</span><input for="ipp" type="text" class="form-control"${ssrRenderAttr("value", $props.cost.ipp)}${_scopeId}></div><input type="submit" value="Update" class="btn btn-oorange"${_scopeId}></form></div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-md px-0 px-md-3 mt-3 mt-md-0" }, [
            createVNode("div", { class: "bg-white rounded p-3 mb-3" }, [
              createVNode("p", { class: "fs-4 m-0" }, "Set Cost Category")
            ]),
            createVNode("div", { class: "bg-white rounded p-3" }, [
              createVNode("form", {
                onSubmit: withModifiers(_ctx.editCost, ["prevent"])
              }, [
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "Kategori"),
                  createVNode("input", {
                    type: "text",
                    class: "form-control",
                    value: $props.cost.name
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "Jenis kelamin"),
                  createVNode("input", {
                    type: "text",
                    class: "form-control",
                    value: $props.cost.gender
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "gedung"),
                  createVNode("input", {
                    for: "gedung",
                    type: "text",
                    class: "form-control",
                    value: $props.cost.gedung
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "perpustakaan"),
                  createVNode("input", {
                    for: "perpustakaan",
                    type: "text",
                    class: "form-control",
                    value: $props.cost.perpustakaan
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "kegiatan"),
                  createVNode("input", {
                    for: "kegiatan",
                    type: "text",
                    class: "form-control",
                    value: $props.cost.kegiatan
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "bukumedia"),
                  createVNode("input", {
                    for: "bukumedia",
                    type: "text",
                    class: "form-control",
                    value: $props.cost.bukumedia
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "seragam"),
                  createVNode("input", {
                    for: "seragam",
                    type: "text",
                    class: "form-control",
                    value: $props.cost.seragam
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "jilbab"),
                  createVNode("input", {
                    for: "jilbab",
                    type: "text",
                    class: "form-control",
                    value: $props.cost.jilbab
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "ipp"),
                  createVNode("input", {
                    for: "ipp",
                    type: "text",
                    class: "form-control",
                    value: $props.cost.ipp
                  }, null, 8, ["value"])
                ]),
                createVNode("input", {
                  type: "submit",
                  value: "Update",
                  class: "btn btn-oorange"
                })
              ], 40, ["onSubmit"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Cost/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
