import { reactive, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const Login_vue_vue_type_style_index_0_scoped_b1351e87_lang = "";
const _sfc_main = {
  components: {
    Link
  },
  props: {
    errors: Object
  },
  setup() {
    const form = reactive({
      email: "",
      password: ""
    });
    const storeLogin = () => {
      Inertia.post("/login", {
        email: form.email,
        password: form.password
      });
    };
    return {
      form,
      storeLogin
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))} data-v-b1351e87><div class="row vh-100" data-v-b1351e87><div class="col-12 col-md-6 p-5 bg-grey rounded" data-v-b1351e87><div class="p-0 p-md-3 text-center text-md-start" data-v-b1351e87><img class="logo rounded-circle bg-oorange p-1 mb-3"${ssrRenderAttr("src", "/storage/img/logosdit.png")} alt="logosdit" data-v-b1351e87><p class="fs-5 mb-0" data-v-b1351e87>Selamat datang</p><p class="fs-3 mb-0" data-v-b1351e87>Silahkan Login ...</p><form class="mt-3" data-v-b1351e87><input${ssrRenderAttr("value", $setup.form.email)} class="form-control form-control-lg mb-3 text-center" type="text" name="No WA" placeholder="No WhatsApp" data-v-b1351e87>`);
  if ($props.errors.email) {
    _push(`<div class="alert alert-danger" data-v-b1351e87>${ssrInterpolate($props.errors.email)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttr("value", $setup.form.password)} class="form-control form-control-lg mb-3 text-center" type="password" name="Password" placeholder="Password" data-v-b1351e87>`);
  if ($props.errors.password) {
    _push(`<div class="alert alert-danger" data-v-b1351e87>${ssrInterpolate($props.errors.password)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button type="submit" class="btn btn-lg btn-warning w-100 mb-3" data-v-b1351e87> Login </button><div class="text-center text-muted" data-v-b1351e87>atau</div><br data-v-b1351e87>`);
  _push(ssrRenderComponent(_component_Link, {
    as: "button",
    href: "/buat-akun",
    class: "btn btn-lg btn-outline-dark w-100 text-muted"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Buat akun`);
      } else {
        return [
          createTextVNode("Buat akun")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form></div></div><div class="col-6 p-5 bg-oorange d-none d-md-block text-center" data-v-b1351e87><img class="img-fluid pt-3"${ssrRenderAttr("src", "/storage/img/gbr.png")} alt="gbr" data-v-b1351e87></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b1351e87"]]);
export {
  Login as default
};
