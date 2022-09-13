import { B as BackButton } from "./BackButton.f24d96d2.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { A as AppLayout } from "./App.31ee7799.mjs";
import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    BackButton,
    Link,
    AppLayout
  },
  props: {
    student: Object,
    isReadOnly: Boolean
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
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0"${_scopeId}><div class="table-responsive bg-white rounded p-3 mb-3"${_scopeId}><p class="fs-4 m-0"${_scopeId}>Students</p></div><div class="table-responsive bg-white rounded p-3"${_scopeId}><div class="d-flex justify-content-start"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BackButton, null, null, _parent2, _scopeId));
        if ($props.isReadOnly) {
          _push2(ssrRenderComponent(_component_Link, {
            as: "button",
            href: _ctx.route("admin.students.edit", $setup.form.id),
            class: "btn btn-sm btn-oorange text-light mb-3 mx-2"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="bi bi-pencil-square"${_scopeId2}></i> Edit`);
              } else {
                return [
                  createVNode("i", { class: "bi bi-pencil-square" }),
                  createTextVNode(" Edit")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><form${_scopeId}><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Nama</span><input class="form-control"${ssrRenderAttr("value", $setup.form.full_name)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Panggilan</span><input class="form-control"${ssrRenderAttr("value", $setup.form.nick_name)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Asal TK</span><input class="form-control"${ssrRenderAttr("value", $setup.form.school_origin)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Jenis kelamin</span><input class="form-control"${ssrRenderAttr("value", $setup.form.gender)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Tempat lahir</span><input class="form-control"${ssrRenderAttr("value", $setup.form.place_birth)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Tanggal lahir</span><input class="form-control"${ssrRenderAttr("value", $setup.form.date_birth)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Kebutuhan khusus</span><input class="form-control"${ssrRenderAttr("value", $setup.form.special_needs)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Saudara di SDIT Harum</span><input class="form-control"${ssrRenderAttr("value", $setup.form.saudara_kandung_di_sdit)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Tinggal bersama</span><input class="form-control"${ssrRenderAttr("value", $setup.form.living)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Alamat</span><input class="form-control"${ssrRenderAttr("value", $setup.form.address)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>rt rw</span><input class="form-control"${ssrRenderAttr("value", $setup.form.rtrw)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Kode pos</span><input class="form-control"${ssrRenderAttr("value", $setup.form.postalcode)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Desa</span><input class="form-control"${ssrRenderAttr("value", $setup.form.desa)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Kecamatan</span><input class="form-control"${ssrRenderAttr("value", $setup.form.kecamatan)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Kota</span><input class="form-control"${ssrRenderAttr("value", $setup.form.kota)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Provinsi</span><input class="form-control"${ssrRenderAttr("value", $setup.form.provinsi)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Pendidikan Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad_edu)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Pekerjaan Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad_occupation)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Penghasilan Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad_income)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Hp Ayah</span><input class="form-control"${ssrRenderAttr("value", $setup.form.dad_phone)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Pendidikan Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom_edu)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Pekerjaan Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom_occupation)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Penghasilan Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom_income)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div><div class="input-group mb-1"${_scopeId}><span class="input-group-text"${_scopeId}>Hp Ibu</span><input class="form-control"${ssrRenderAttr("value", $setup.form.mom_phone)}${ssrIncludeBooleanAttr($props.isReadOnly) ? " readonly" : ""}${_scopeId}></div>`);
        if (!$props.isReadOnly) {
          _push2(`<input type="submit" class="btn btn-oorange mt-3" value="Update"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</form></div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, [
            createVNode("div", { class: "table-responsive bg-white rounded p-3 mb-3" }, [
              createVNode("p", { class: "fs-4 m-0" }, "Students")
            ]),
            createVNode("div", { class: "table-responsive bg-white rounded p-3" }, [
              createVNode("div", { class: "d-flex justify-content-start" }, [
                createVNode(_component_BackButton),
                $props.isReadOnly ? (openBlock(), createBlock(_component_Link, {
                  key: 0,
                  as: "button",
                  href: _ctx.route("admin.students.edit", $setup.form.id),
                  class: "btn btn-sm btn-oorange text-light mb-3 mx-2"
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "bi bi-pencil-square" }),
                    createTextVNode(" Edit")
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true)
              ]),
              createVNode("form", {
                onSubmit: withModifiers(($event) => $setup.form.put(_ctx.route("admin.students.update", $setup.form.id)), ["prevent"])
              }, [
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Nama"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.full_name = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.full_name]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Panggilan"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.nick_name = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.nick_name]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Asal TK"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.school_origin = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.school_origin]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Jenis kelamin"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.gender = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.gender]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Tempat lahir"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.place_birth = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.place_birth]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Tanggal lahir"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.date_birth = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.date_birth]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Kebutuhan khusus"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.special_needs = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.special_needs]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Saudara di SDIT Harum"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.saudara_kandung_di_sdit = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.saudara_kandung_di_sdit]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Tinggal bersama"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.living = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.living]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Alamat"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.address = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.address]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "rt rw"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.rtrw = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.rtrw]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Kode pos"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.postalcode = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.postalcode]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Desa"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.desa = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.desa]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Kecamatan"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.kecamatan = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.kecamatan]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Kota"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.kota = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.kota]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Provinsi"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.provinsi = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.provinsi]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Ayah"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.dad = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.dad]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Pendidikan Ayah"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.dad_edu = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.dad_edu]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Pekerjaan Ayah"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.dad_occupation = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.dad_occupation]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Penghasilan Ayah"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.dad_income = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.dad_income]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Hp Ayah"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.dad_phone = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.dad_phone]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Ibu"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.mom = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.mom]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Pendidikan Ibu"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.mom_edu = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.mom_edu]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Pekerjaan Ibu"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.mom_occupation = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.mom_occupation]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Penghasilan Ibu"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.mom_income = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.mom_income]
                  ])
                ]),
                createVNode("div", { class: "input-group mb-1" }, [
                  createVNode("span", { class: "input-group-text" }, "Hp Ibu"),
                  withDirectives(createVNode("input", {
                    class: "form-control",
                    "onUpdate:modelValue": ($event) => $setup.form.mom_phone = $event,
                    readonly: $props.isReadOnly
                  }, null, 8, ["onUpdate:modelValue", "readonly"]), [
                    [vModelText, $setup.form.mom_phone]
                  ])
                ]),
                !$props.isReadOnly ? (openBlock(), createBlock("input", {
                  key: 0,
                  type: "submit",
                  class: "btn btn-oorange mt-3",
                  value: "Update"
                })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Students/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
