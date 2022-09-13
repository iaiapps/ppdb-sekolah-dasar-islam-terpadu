import { Link, useForm } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, withDirectives, vModelText } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { A as AppLayout } from "./App.d1713471.mjs";
const _sfc_main$1 = {
  components: {
    Link
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    as: "button",
    onClick: $options.goBack,
    class: "btn btn-sm btn-oorange text-light mb-3"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-arrow-left"${_scopeId}></i> Back`);
      } else {
        return [
          createVNode("i", { class: "bi bi-arrow-left" }),
          createTextVNode(" Back")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/dashboard/BackButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BackButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    BackButton,
    Link,
    AppLayout
  },
  props: {
    student: Object
  },
  setup(props) {
    const form = useForm(props.student);
    return {
      form
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_BackButton = resolveComponent("BackButton");
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0"${_scopeId}><div class="bg-white rounded p-3 mb-3"${_scopeId}><p class="fs-4 m-0"${_scopeId}>Students</p></div><div class="bg-white rounded p-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BackButton, null, null, _parent2, _scopeId));
        _push2(`<div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Nama</span><input class="form-control"${ssrRenderAttr("value", $setup.form.full_name)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Panggilan</span><input class="form-control"${ssrRenderAttr("value", $setup.form.nick_name)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Asal TK</span><input class="form-control"${ssrRenderAttr("value", $setup.form.school_origin)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Jenis kelamin</span><input class="form-control"${ssrRenderAttr("value", $setup.form.gender)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Tempat lahir</span><input class="form-control"${ssrRenderAttr("value", $setup.form.place_birth)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Tanggal lahir</span><input class="form-control"${ssrRenderAttr("value", $setup.form.date_birth)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Kebutuhan khusus</span><input class="form-control"${ssrRenderAttr("value", $setup.form.special_needs)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Saudara di SDIT Harum</span><input class="form-control"${ssrRenderAttr("value", $setup.form.saudara_kandung_di_sdit)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Tinggal bersama</span><input class="form-control"${ssrRenderAttr("value", $setup.form.living)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Alamat</span><input class="form-control"${ssrRenderAttr("value", $setup.form.address)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>rt rw</span><input class="form-control"${ssrRenderAttr("value", $setup.form.rtrw)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Kode pos</span><input class="form-control"${ssrRenderAttr("value", $setup.form.postalcode)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Desa</span><input class="form-control"${ssrRenderAttr("value", $setup.form.desa)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Kecamatan</span><input class="form-control"${ssrRenderAttr("value", $setup.form.kecamatan)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Kota</span><input class="form-control"${ssrRenderAttr("value", $setup.form.kota)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Provinsi</span><input class="form-control"${ssrRenderAttr("value", $setup.form.provinsi)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Pendidikan Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad_edu)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Pekerjaan Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad_occupation)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Penghasilan Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad_income)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Hp Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad_phone)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Pendidikan Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom_edu)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Pekerjaan Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom_occupation)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Penghasilan Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom_income)} readonly${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Hp Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom_phone)} readonly${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, [
            createVNode("div", { class: "bg-white rounded p-3 mb-3" }, [
              createVNode("p", { class: "fs-4 m-0" }, "Students")
            ]),
            createVNode("div", { class: "bg-white rounded p-3" }, [
              createVNode(_component_BackButton),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Nama"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.full_name = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.full_name]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Panggilan"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.nick_name = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.nick_name]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Asal TK"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.school_origin = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.school_origin]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Jenis kelamin"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.gender = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.gender]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Tempat lahir"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.place_birth = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.place_birth]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Tanggal lahir"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.date_birth = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.date_birth]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Kebutuhan khusus"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.special_needs = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.special_needs]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Saudara di SDIT Harum"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.saudara_kandung_di_sdit = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.saudara_kandung_di_sdit]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Tinggal bersama"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.living = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.living]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Alamat"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.address = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.address]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "rt rw"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.rtrw = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.rtrw]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Kode pos"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.postalcode = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.postalcode]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Desa"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.desa = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.desa]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Kecamatan"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.kecamatan = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.kecamatan]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Kota"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.kota = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.kota]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Provinsi"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.provinsi = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.provinsi]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Ayah"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.dad = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.dad]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Pendidikan Ayah"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.dad_edu = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.dad_edu]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Pekerjaan Ayah"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.dad_occupation = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.dad_occupation]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Penghasilan Ayah"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.dad_income = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.dad_income]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Hp Ayah"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.dad_phone = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.dad_phone]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Ibu"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.mom = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.mom]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Pendidikan Ibu"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.mom_edu = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.mom_edu]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Pekerjaan Ibu"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.mom_occupation = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.mom_occupation]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Penghasilan Ibu"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.mom_income = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.mom_income]
                ])
              ]),
              createVNode("div", { class: "input-group mb-1" }, [
                createVNode("span", { class: "input-group-text" }, "Hp Ibu"),
                withDirectives(createVNode("input", {
                  class: "form-control",
                  "onUpdate:modelValue": ($event) => $setup.form.mom_phone = $event,
                  readonly: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $setup.form.mom_phone]
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Students/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
