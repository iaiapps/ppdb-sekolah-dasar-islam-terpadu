import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    links: Array,
    total: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-md-flex justify-content-between align-middle text-around my-3" }, _attrs))}><div class="my-1"> Total: <span class="badge bg-dark">${ssrInterpolate(__props.total)}</span></div><div><!--[-->`);
      ssrRenderList(__props.links, (link, key) => {
        _push(`<!--[-->`);
        if (link.url === null) {
          _push(`<div class="btn mx-1 btn-sm btn-outline-secondary disabled">${link.label}</div>`);
        } else {
          _push(ssrRenderComponent(unref(Link), {
            href: link.url,
            class: ["btn mx-1 btn-sm btn-outline-secondary", { "btn-oorange": link.active }]
          }, null, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Table/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
