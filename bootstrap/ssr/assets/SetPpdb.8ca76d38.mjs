import { Link } from "@inertiajs/inertia-vue3";
import { reactive, resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    Link
  },
  props: {
    sets: Object
  },
  setup() {
    const form = reactive({
      tahun_ajaran: "",
      gelombang: "",
      start_date: "",
      end_date: ""
    });
    const handleSubmit = () => {
      Inertia.post(route("ppdb.store"), form);
    };
    return { form, handleSubmit };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="table-responsive bg-white rounded p-3 position-relative mb-3"><div class="mb-5"><div class="d-flex justify-content-between"><p class="fs-5">Setting PPDB</p><button as="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-sm btn-oorange text-light mb-3"> + </button><div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><form><input type="text" placeholder="Tahun ajaran" class="form-control mb-2"${ssrRenderAttr("value", $setup.form.tahun_ajaran)} required><input type="number" placeholder="gelombang" class="form-control mb-2"${ssrRenderAttr("value", $setup.form.gelombang)} required><input type="date" placeholder="start_date" class="form-control mb-2"${ssrRenderAttr("value", $setup.form.start_date)} required><input type="date" placeholder="end_date" class="form-control mb-2"${ssrRenderAttr("value", $setup.form.end_date)} required><input type="submit" class="btn btn-sm btn-oorange me-2" value="save"><button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal"> Close </button></form></div></div></div></div></div><hr><table class="table table-striped"><thead><tr><th scope="col">Tahun ajaran</th><th scope="col">Gelombang</th><th scope="col">Start</th><th scope="col">End</th><th scope="col">Action</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.sets, (set) => {
    _push(`<tr class="${ssrRenderClass({ "table-success": set.is_active })}"><td>${ssrInterpolate(set.tahun_ajaran)}</td><td>${ssrInterpolate(set.gelombang)}</td><td>${ssrInterpolate(set.start_date)}</td><td>${ssrInterpolate(set.end_date)}</td><td>`);
    if (set.is_active === 1) {
      _push(`<span>Sedang aktif</span>`);
    } else {
      _push(`<!---->`);
    }
    if (set.is_active !== 1) {
      _push(ssrRenderComponent(_component_Link, {
        as: "button",
        href: _ctx.route("ppdb.aktifkan", set.id),
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
