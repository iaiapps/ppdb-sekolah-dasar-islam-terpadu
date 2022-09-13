import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  props: {
    sets: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white rounded p-3 position-relative mb-3"><div class="mb-5"><p class="fs-5">Setting PPDB</p><hr><table class="table table-striped"><thead><tr><th scope="col">Tahun ajaran</th><th scope="col">Gelombang</th><th scope="col">isActive</th><th scope="col">Action</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.sets, (set) => {
    _push(`<tr><td>${ssrInterpolate(set.tahun_ajaran)}</td><td>${ssrInterpolate(set.gelombang)}</td><td>${ssrInterpolate(set.is_active ? "Yes" : "No")}</td><td>`);
    if (set.is_active !== 1) {
      _push(ssrRenderComponent(_component_Link, {
        as: "button",
        class: "btn btn-sm btn-oorange"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Aktifkan`);
          } else {
            return [
              createTextVNode("Aktifkan")
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Settings/SetPpdb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SetPpdb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SetPpdb as default
};
