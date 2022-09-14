import SetPpdb from "./SetPpdb.8ca76d38.mjs";
import SetTimeline from "./SetTimeline.06404a6f.mjs";
import SetApp from "./SetApp.aaad12c4.mjs";
import { A as AppLayout } from "./App.31ee7799.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { A as Alert } from "./Alert.6772aba3.mjs";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
const _sfc_main = {
  layout: AppLayout,
  components: {
    Alert,
    SetPpdb,
    SetTimeline,
    SetApp,
    Link,
    AppLayout
  },
  props: {
    set_ppdb: Object,
    set_app: Object,
    set_timeline: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Alert = resolveComponent("Alert");
  const _component_SetTimeline = resolveComponent("SetTimeline");
  const _component_SetPpdb = resolveComponent("SetPpdb");
  const _component_SetApp = resolveComponent("SetApp");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Alert, null, null, _parent));
  _push(`<div class="table-responsive bg-white rounded p-3 mb-3"><p class="fs-4 m-0">Settings Website</p></div>`);
  _push(ssrRenderComponent(_component_SetTimeline, { sets: $props.set_timeline }, null, _parent));
  _push(ssrRenderComponent(_component_SetPpdb, { sets: $props.set_ppdb }, null, _parent));
  _push(ssrRenderComponent(_component_SetApp, { sets: $props.set_app }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Settings/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
