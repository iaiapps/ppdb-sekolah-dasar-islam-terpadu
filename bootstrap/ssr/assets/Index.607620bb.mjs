import { ref, watch, withCtx, unref, createTextVNode, toDisplayString, createVNode, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
import { A as AppLayout } from "./App.d1713471.mjs";
import { _ as _sfc_main$1 } from "./Pagination.1873c08a.mjs";
import { Inertia } from "@inertiajs/inertia";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    students: Object
  },
  setup(__props) {
    const cari = ref("");
    watch(cari, (value) => {
      Inertia.get(
        route("admin.students"),
        { cari: value },
        { preserveState: true, replace: true }
      );
    });
    const reject = (id, student) => {
      if (confirm("Are you sure you reject: " + student)) {
        Inertia.get(route("admin.acc-or-reject", [id, false]));
      }
    };
    const acc = (id, student) => {
      if (confirm("Are you sure you Accept: " + student)) {
        Inertia.get(route("admin.acc-or-reject", [id, true]));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0"${_scopeId}><div class="bg-white rounded p-3 mb-3"${_scopeId}><p class="fs-4 m-0"${_scopeId}>Students</p></div><div class="bg-white rounded p-3"${_scopeId}><input type="text" class="form-control mb-3" placeholder="Search"${ssrRenderAttr("value", cari.value)}${_scopeId}><table class="table table-striped"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Name</th><th${_scopeId}>School Origin</th><th${_scopeId}>Created at</th><th${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.students.data, (st, index) => {
              _push2(`<tr class="${ssrRenderClass({ "table-danger": st.status === "reject" })}"${_scopeId}><td${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.students.detail", st.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(st.full_name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(st.full_name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td${_scopeId}>${ssrInterpolate(st.school_origin)}</td><td${_scopeId}>${ssrInterpolate(st.created_at)}</td><td${_scopeId}>`);
              if (st.status === "acc") {
                _push2(ssrRenderComponent(unref(Link), {
                  as: "button",
                  class: "btn btn-sm mx-1 btn-danger",
                  onClick: ($event) => reject(st.id, st.full_name)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Reject`);
                    } else {
                      return [
                        createTextVNode("Reject")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (st.status === "reject") {
                _push2(ssrRenderComponent(unref(Link), {
                  as: "button",
                  class: "btn btn-sm mx-1 btn-success",
                  onClick: ($event) => acc(st.id, st.full_name)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Acc`);
                    } else {
                      return [
                        createTextVNode("Acc")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (st.status === "menunggu") {
                _push2(ssrRenderComponent(unref(Link), {
                  as: "button",
                  class: "btn btn-sm mx-1 btn-success",
                  onClick: ($event) => acc(st.id, st.full_name)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Acc`);
                    } else {
                      return [
                        createTextVNode("Acc")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              links: __props.students.links,
              total: __props.students.total
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, [
                createVNode("div", { class: "bg-white rounded p-3 mb-3" }, [
                  createVNode("p", { class: "fs-4 m-0" }, "Students")
                ]),
                createVNode("div", { class: "bg-white rounded p-3" }, [
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
                        createVNode("th", null, "School Origin"),
                        createVNode("th", null, "Created at"),
                        createVNode("th", null, "Action")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.students.data, (st, index) => {
                        return openBlock(), createBlock("tr", {
                          key: st.id,
                          class: { "table-danger": st.status === "reject" }
                        }, [
                          createVNode("td", null, [
                            createVNode(unref(Link), {
                              href: _ctx.route("admin.students.detail", st.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(st.full_name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          createVNode("td", null, toDisplayString(st.school_origin), 1),
                          createVNode("td", null, toDisplayString(st.created_at), 1),
                          createVNode("td", null, [
                            st.status === "acc" ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              as: "button",
                              class: "btn btn-sm mx-1 btn-danger",
                              onClick: ($event) => reject(st.id, st.full_name)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Reject")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                            st.status === "reject" ? (openBlock(), createBlock(unref(Link), {
                              key: 1,
                              as: "button",
                              class: "btn btn-sm mx-1 btn-success",
                              onClick: ($event) => acc(st.id, st.full_name)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Acc")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                            st.status === "menunggu" ? (openBlock(), createBlock(unref(Link), {
                              key: 2,
                              as: "button",
                              class: "btn btn-sm mx-1 btn-success",
                              onClick: ($event) => acc(st.id, st.full_name)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Acc")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ], 2);
                      }), 128))
                    ])
                  ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Students/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
