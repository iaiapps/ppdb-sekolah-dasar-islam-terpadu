import { ref, watch, withCtx, createVNode, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, vModelCheckbox, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from "vue/server-renderer";
import { A as AppLayout } from "./App.31ee7799.mjs";
import { _ as _sfc_main$1 } from "./Pagination.1873c08a.mjs";
import { Inertia } from "@inertiajs/inertia";
import "@inertiajs/inertia-vue3";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "SetSchedule",
  __ssrInlineRender: true,
  props: {
    students: Object
  },
  setup(__props) {
    const select_all = ref(false);
    const selected = ref([]);
    const cari = ref("");
    watch(cari, (value) => {
      Inertia.get(
        route("admin.students"),
        { cari: value },
        { preserveState: true, replace: true }
      );
    });
    const select = () => {
      console.log("ok");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0"${_scopeId}><div class="table-responsive bg-white rounded p-3 mb-3"${_scopeId}><p class="fs-4 m-0"${_scopeId}>Students</p></div><div class="table-responsive bg-white rounded p-3"${_scopeId}><input type="text" class="form-control mb-3" placeholder="Search"${ssrRenderAttr("value", cari.value)}${_scopeId}><table class="table table-striped"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Name</th><th${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.students.data, (st, index) => {
              _push2(`<tr${_scopeId}><td${_scopeId}><input type="checkbox" class="form-check-input"${ssrRenderAttr("value", st.id)}${ssrIncludeBooleanAttr(Array.isArray(selected.value) ? ssrLooseContain(selected.value, st.id) : selected.value) ? " checked" : ""}${_scopeId}></td><td${_scopeId}>${ssrInterpolate(st.full_name)}</td><td${_scopeId}>xc</td></tr>`);
            });
            _push2(`<!--]--></tbody></table><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(select_all.value) ? ssrLooseContain(select_all.value, null) : select_all.value) ? " checked" : ""}${_scopeId}> Pilih semua `);
            _push2(ssrRenderComponent(_sfc_main$1, {
              links: __props.students.links,
              total: __props.students.total
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, [
                createVNode("div", { class: "table-responsive bg-white rounded p-3 mb-3" }, [
                  createVNode("p", { class: "fs-4 m-0" }, "Students")
                ]),
                createVNode("div", { class: "table-responsive bg-white rounded p-3" }, [
                  withDirectives(createVNode("input", {
                    type: "text",
                    class: "form-control mb-3",
                    placeholder: "Search",
                    "onUpdate:modelValue": ($event) => cari.value = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, cari.value]
                  ]),
                  createVNode("table", { class: "table table-striped" }, [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", null, "Name"),
                        createVNode("th", null, "Action")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.students.data, (st, index) => {
                        return openBlock(), createBlock("tr", {
                          key: st.id
                        }, [
                          createVNode("td", null, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              class: "form-check-input",
                              value: st.id,
                              "onUpdate:modelValue": ($event) => selected.value = $event
                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                              [vModelCheckbox, selected.value]
                            ])
                          ]),
                          createVNode("td", null, toDisplayString(st.full_name), 1),
                          createVNode("td", null, "xc")
                        ]);
                      }), 128))
                    ])
                  ]),
                  withDirectives(createVNode("input", {
                    class: "form-check-input",
                    type: "checkbox",
                    "onUpdate:modelValue": ($event) => select_all.value = $event,
                    onClick: select
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelCheckbox, select_all.value]
                  ]),
                  createTextVNode(" Pilih semua "),
                  createVNode(_sfc_main$1, {
                    links: __props.students.links,
                    total: __props.students.total
                  }, null, 8, ["links", "total"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Students/SetSchedule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
