import { Link } from "@inertiajs/inertia-vue3";
import "@inertiajs/inertia";
import { A as AppLayout } from "./App.9c69cf52.mjs";
import { A as Alert } from "./Alert.ab78939a.mjs";
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    AppLayout,
    Link,
    Alert
  },
  props: {
    costs: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Alert = resolveComponent("Alert");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-md px-0 px-md-3 mt-3 mt-md-0"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Alert, null, null, _parent2, _scopeId));
        _push2(`<div class="table-responsive bg-white rounded p-3 mb-3"${_scopeId}><p class="fs-4 m-0"${_scopeId}>Set Cost Category</p></div><div class="table-responsive bg-white rounded p-3 vh-100"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          as: "button",
          class: "btn btn-sm btn-oorange text-light mb-3",
          href: _ctx.route("admin.cost.create")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<i class="bi bi-plus-square-fill"${_scopeId2}></i> Add Category`);
            } else {
              return [
                createVNode("i", { class: "bi bi-plus-square-fill" }),
                createTextVNode(" Add Category")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<table class="table table-responsive"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>kategory</th><th${_scopeId}>Jk</th><th${_scopeId}>Gedung</th><th${_scopeId}>Perpus</th><th${_scopeId}>Kegiatan</th><th${_scopeId}>Buku &amp; Media</th><th${_scopeId}>Seragam</th><th${_scopeId}>Jilbab</th><th${_scopeId}>IPP</th><th${_scopeId}>Total</th></tr></thead><tbody${_scopeId}><!--[-->`);
        ssrRenderList($props.costs, (c, index) => {
          _push2(`<tr${_scopeId}><td${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("admin.cost.edit", c.id)
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(c.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(c.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</td><td${_scopeId}>${ssrInterpolate(c.gender)}</td><td${_scopeId}>${ssrInterpolate(c.gedung)}</td><td${_scopeId}>${ssrInterpolate(c.perpustakaan)}</td><td${_scopeId}>${ssrInterpolate(c.kegiatan)}</td><td${_scopeId}>${ssrInterpolate(c.bukumedia)}</td><td${_scopeId}>${ssrInterpolate(c.seragam)}</td><td${_scopeId}>${ssrInterpolate(c.jilbab)}</td><td${_scopeId}>${ssrInterpolate(c.ipp)}</td><td${_scopeId}>${ssrInterpolate(new Intl.NumberFormat().format(
            c.gedung + c.perpustakaan + c.kegiatan + c.bukumedia + c.seragam + c.jilbab + c.ipp
          ))}</td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-md px-0 px-md-3 mt-3 mt-md-0" }, [
            createVNode(_component_Alert),
            createVNode("div", { class: "table-responsive bg-white rounded p-3 mb-3" }, [
              createVNode("p", { class: "fs-4 m-0" }, "Set Cost Category")
            ]),
            createVNode("div", { class: "table-responsive bg-white rounded p-3 vh-100" }, [
              createVNode(_component_Link, {
                as: "button",
                class: "btn btn-sm btn-oorange text-light mb-3",
                href: _ctx.route("admin.cost.create")
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "bi bi-plus-square-fill" }),
                  createTextVNode(" Add Category")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode("table", { class: "table table-responsive" }, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", null, "kategory"),
                    createVNode("th", null, "Jk"),
                    createVNode("th", null, "Gedung"),
                    createVNode("th", null, "Perpus"),
                    createVNode("th", null, "Kegiatan"),
                    createVNode("th", null, "Buku & Media"),
                    createVNode("th", null, "Seragam"),
                    createVNode("th", null, "Jilbab"),
                    createVNode("th", null, "IPP"),
                    createVNode("th", null, "Total")
                  ])
                ]),
                createVNode("tbody", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList($props.costs, (c, index) => {
                    return openBlock(), createBlock("tr", {
                      key: c.id
                    }, [
                      createVNode("td", null, [
                        createVNode(_component_Link, {
                          href: _ctx.route("admin.cost.edit", c.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(c.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      createVNode("td", null, toDisplayString(c.gender), 1),
                      createVNode("td", null, toDisplayString(c.gedung), 1),
                      createVNode("td", null, toDisplayString(c.perpustakaan), 1),
                      createVNode("td", null, toDisplayString(c.kegiatan), 1),
                      createVNode("td", null, toDisplayString(c.bukumedia), 1),
                      createVNode("td", null, toDisplayString(c.seragam), 1),
                      createVNode("td", null, toDisplayString(c.jilbab), 1),
                      createVNode("td", null, toDisplayString(c.ipp), 1),
                      createVNode("td", null, toDisplayString(new Intl.NumberFormat().format(
                        c.gedung + c.perpustakaan + c.kegiatan + c.bukumedia + c.seragam + c.jilbab + c.ipp
                      )), 1)
                    ]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Cost/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
