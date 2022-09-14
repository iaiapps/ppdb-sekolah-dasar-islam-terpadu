import { useForm } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  props: {
    set_app: Object
  },
  setup(props) {
    const form = useForm(props.set_app);
    return { form };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><form><label>${ssrInterpolate($setup.form.key)}</label><input type="text" placeholder="Date"${ssrRenderAttr("value", $setup.form.value)}><input type="submit" value="Update"></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Settings/EditApp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EditApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  EditApp as default
};
