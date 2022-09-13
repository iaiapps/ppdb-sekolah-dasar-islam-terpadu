import { ref, watch, withCtx, unref, createTextVNode, toDisplayString, createVNode, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
import { A as AppLayout } from "./App.9c69cf52.mjs";
import { _ as _sfc_main$1 } from "./Pagination.1873c08a.mjs";
import { Inertia } from "@inertiajs/inertia";
import { A as Alert } from "./Alert.ab78939a.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: Object
  },
  setup(__props) {
    const search = ref("");
    ref("5");
    watch(search, (value) => {
      Inertia.get(
        "/admin/users",
        { search: value },
        { preserveState: true, replace: true }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0"${_scopeId}>`);
            _push2(ssrRenderComponent(Alert, null, null, _parent2, _scopeId));
            _push2(`<div class="table-responsive bg-white rounded p-3 mb-3"${_scopeId}><p class="fs-4 m-0"${_scopeId}>Users</p></div><div class="table-responsive bg-white rounded p-3"${_scopeId}><div${_scopeId}><input type="text" placeholder="Cari nama atau nomor wa" class="form-control mb-3"${ssrRenderAttr("value", search.value)}${_scopeId}></div><table class="table table-striped"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th scope="col"${_scopeId}>No.</th><th scope="col"${_scopeId}>No. WhatssApp</th><th scope="col"${_scopeId}>Nama</th><th scope="col"${_scopeId}>Ket</th><th scope="col"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.users.data, (item, index) => {
              _push2(`<tr${_scopeId}><td scope="row"${_scopeId}>${ssrInterpolate(index + 1)}</td><td${_scopeId}>${ssrInterpolate(item.email)}</td><td${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.user.detail", item.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td${_scopeId}>${ssrInterpolate(item.role)}</td><td${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                style: item.aktifkan ? null : { display: "none" },
                as: "button",
                class: "btn btn-sm btn-secondary",
                href: _ctx.route("admin.user-aktifkan", item.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Aktifkan `);
                  } else {
                    return [
                      createTextVNode(" Aktifkan ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              links: __props.users.links,
              total: __props.users.total
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, [
                createVNode(Alert),
                createVNode("div", { class: "table-responsive bg-white rounded p-3 mb-3" }, [
                  createVNode("p", { class: "fs-4 m-0" }, "Users")
                ]),
                createVNode("div", { class: "table-responsive bg-white rounded p-3" }, [
                  createVNode("div", null, [
                    withDirectives(createVNode("input", {
                      type: "text",
                      placeholder: "Cari nama atau nomor wa",
                      class: "form-control mb-3",
                      "onUpdate:modelValue": ($event) => search.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ]),
                  createVNode("table", { class: "table table-striped" }, [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, "No."),
                        createVNode("th", { scope: "col" }, "No. WhatssApp"),
                        createVNode("th", { scope: "col" }, "Nama"),
                        createVNode("th", { scope: "col" }, "Ket"),
                        createVNode("th", { scope: "col" }, "Action")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (item, index) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id
                        }, [
                          createVNode("td", { scope: "row" }, toDisplayString(index + 1), 1),
                          createVNode("td", null, toDisplayString(item.email), 1),
                          createVNode("td", null, [
                            createVNode(unref(Link), {
                              href: _ctx.route("admin.user.detail", item.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          createVNode("td", null, toDisplayString(item.role), 1),
                          createVNode("td", null, [
                            withDirectives(createVNode(unref(Link), {
                              as: "button",
                              class: "btn btn-sm btn-secondary",
                              href: _ctx.route("admin.user-aktifkan", item.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Aktifkan ")
                              ]),
                              _: 2
                            }, 1032, ["href"]), [
                              [vShow, item.aktifkan]
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode(_sfc_main$1, {
                    links: __props.users.links,
                    total: __props.users.total
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
