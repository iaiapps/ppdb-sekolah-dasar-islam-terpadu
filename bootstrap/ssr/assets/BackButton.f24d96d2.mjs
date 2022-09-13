import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    Link
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/dashboard/BackButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BackButton as B
};
