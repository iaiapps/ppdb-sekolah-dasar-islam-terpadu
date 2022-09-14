import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  props: {
    sets: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="table-responsive bg-white rounded p-3 position-relative mb-3"><div class="mb-5"><div class="d-md-flex justify-content-between"><p class="fs-5">Setting App</p></div><hr><table class="table table-striped"><thead><tr><th scope="col">Key</th><th scope="col">Value</th><th scope="col">Action</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.sets, (set) => {
    _push(`<tr><td>${ssrInterpolate(set.key)}</td><td>${ssrInterpolate(set.value)}</td><td><a${ssrRenderAttr("href", _ctx.route("setApp.edit", set.id))} class="btn btn-sm btn-oorange">Edit</a></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Settings/SetApp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SetApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SetApp as default
};
