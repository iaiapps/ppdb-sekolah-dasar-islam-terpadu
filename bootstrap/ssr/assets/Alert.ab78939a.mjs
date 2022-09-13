import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  if (_ctx.$page.props.flash.message) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white text-center alert alert-dismissible mb-3" }, _attrs))}>${ssrInterpolate(_ctx.$page.props.flash.message)} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/dashboard/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Alert as A
};
