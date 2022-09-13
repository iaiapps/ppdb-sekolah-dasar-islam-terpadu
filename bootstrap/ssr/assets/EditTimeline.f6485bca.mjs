import { useForm } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  props: {
    sets: Object
  },
  setup(props) {
    const form = useForm(props.sets);
    return { form };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><form><input type="text" placeholder="Info"${ssrRenderAttr("value", $setup.form.info)}><input type="text" placeholder="Date"${ssrRenderAttr("value", $setup.form.date)}><input type="text" placeholder="Icon"${ssrRenderAttr("value", $setup.form.icon)}><input type="submit" value="Update"></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Settings/EditTimeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EditTimeline = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  EditTimeline as default
};
