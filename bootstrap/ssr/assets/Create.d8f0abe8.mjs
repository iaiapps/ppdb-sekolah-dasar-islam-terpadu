import { B as BackButton } from "./BackButton.f24d96d2.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { A as AppLayout } from "./App.9c69cf52.mjs";
import { resolveComponent, withCtx, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    BackButton,
    AppLayout,
    Link
  },
  props: {
    cost: Object
  },
  setup() {
    const form = {
      name: "",
      gender: "",
      gedung: "",
      perpustakaan: "",
      kegiatan: "",
      bukumedia: "",
      seragam: "",
      jilbab: "",
      ipp: ""
    };
    const storeCost = () => {
      Inertia.post(route("admin.cost.store"), form);
    };
    return {
      form,
      storeCost
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_BackButton = resolveComponent("BackButton");
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-md px-0 px-md-3 mt-3 mt-md-0"${_scopeId}><div class="table-responsive bg-white rounded p-3 mb-3"${_scopeId}><p class="fs-4 m-0"${_scopeId}>Set Cost Category</p></div><div class="table-responsive bg-white rounded p-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BackButton, null, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>Kategori</span><input type="text" class="form-control"${ssrRenderAttr("value", $setup.form.name)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>Jenis kelamin</span><input type="text" class="form-control"${ssrRenderAttr("value", $setup.form.gender)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>gedung</span><input for="gedung" type="number" class="form-control"${ssrRenderAttr("value", $setup.form.gedung)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>perpustakaan</span><input for="perpustakaan" type="number" class="form-control"${ssrRenderAttr("value", $setup.form.perpustakaan)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>kegiatan</span><input for="kegiatan" type="number" class="form-control"${ssrRenderAttr("value", $setup.form.kegiatan)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>bukumedia</span><input for="bukumedia" type="number" class="form-control"${ssrRenderAttr("value", $setup.form.bukumedia)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>seragam</span><input for="seragam" type="number" class="form-control"${ssrRenderAttr("value", $setup.form.seragam)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>jilbab</span><input for="jilbab" type="number" class="form-control"${ssrRenderAttr("value", $setup.form.jilbab)}${_scopeId}></div><div class="input-group mb-3"${_scopeId}><span class="input-group-text"${_scopeId}>ipp</span><input for="ipp" type="number" class="form-control"${ssrRenderAttr("value", $setup.form.ipp)}${_scopeId}></div><button type="submit" class="btn btn-oorange btn-sm"${_scopeId}> Simpan </button></form></div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-md px-0 px-md-3 mt-3 mt-md-0" }, [
            createVNode("div", { class: "table-responsive bg-white rounded p-3 mb-3" }, [
              createVNode("p", { class: "fs-4 m-0" }, "Set Cost Category")
            ]),
            createVNode("div", { class: "table-responsive bg-white rounded p-3" }, [
              createVNode(_component_BackButton),
              createVNode("form", {
                onSubmit: withModifiers($setup.storeCost, ["prevent"])
              }, [
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "Kategori"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.name = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.name]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "Jenis kelamin"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.gender = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.gender]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "gedung"),
                  withDirectives(createVNode("input", {
                    for: "gedung",
                    type: "number",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.gedung = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.gedung]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "perpustakaan"),
                  withDirectives(createVNode("input", {
                    for: "perpustakaan",
                    type: "number",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.perpustakaan = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.perpustakaan]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "kegiatan"),
                  withDirectives(createVNode("input", {
                    for: "kegiatan",
                    type: "number",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.kegiatan = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.kegiatan]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "bukumedia"),
                  withDirectives(createVNode("input", {
                    for: "bukumedia",
                    type: "number",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.bukumedia = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.bukumedia]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "seragam"),
                  withDirectives(createVNode("input", {
                    for: "seragam",
                    type: "number",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.seragam = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.seragam]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "jilbab"),
                  withDirectives(createVNode("input", {
                    for: "jilbab",
                    type: "number",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.jilbab = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.jilbab]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-3" }, [
                  createVNode("span", { class: "input-group-text" }, "ipp"),
                  withDirectives(createVNode("input", {
                    for: "ipp",
                    type: "number",
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.ipp = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.ipp]
                  ])
                ]),
                createVNode("button", {
                  type: "submit",
                  class: "btn btn-oorange btn-sm"
                }, " Simpan ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Cost/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
