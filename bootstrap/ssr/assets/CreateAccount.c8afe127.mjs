import { Inertia } from "@inertiajs/inertia";
import { reactive, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const CreateAccount_vue_vue_type_style_index_0_scoped_0df18d52_lang = "";
const _sfc_main = {
  components: {
    Link
  },
  props: {
    errors: Object
  },
  setup() {
    const form = reactive({
      name: "",
      hp: "",
      password: "",
      confirm_password: "",
      cekPass: ""
    });
    const buatAkun = () => {
      Inertia.post(
        route("guest.buat-akun", {
          name: form.name,
          hp: form.hp,
          password: form.password
        })
      );
    };
    const cek = () => {
      if (form.password === form.confirm_password) {
        form.cekPass = true;
      } else {
        form.cekPass = false;
      }
    };
    return {
      form,
      buatAkun,
      cek
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))} data-v-0df18d52><div class="row vh-100" data-v-0df18d52><div class="col-12 col-md-5 p-3 pattern" data-v-0df18d52><div class="text-white p-3" data-v-0df18d52><div class="text-center mb-3" data-v-0df18d52><img class="logo rounded bg-white p-2 mt-0 mt-md-3 mb-3"${ssrRenderAttr("src", "/storage/img/registration.png")} alt="logosdit" data-v-0df18d52><h3 data-v-0df18d52>Informasi Pendaftaran</h3><hr data-v-0df18d52></div><ol class="fs-5" data-v-0df18d52><li data-v-0df18d52> Buat akun PPDB untuk mendaftar di website PPDB SDIT Harum </li><li data-v-0df18d52>Akun yang sudah dibuat berstatus &quot;Tidak Aktif&quot;.</li><li data-v-0df18d52> Akun akan &quot;Aktif&quot; jika sudah membayar biaya pendaftaran dan dikonfirmasi oleh admin PPDB. </li><li data-v-0df18d52>Mengisi formulir pendaftaran yang disediakan</li></ol><hr class="hr" data-v-0df18d52></div></div><div class="col-12 col-md-7 p-5" data-v-0df18d52><div class="text-center" data-v-0df18d52><div class="px-0 px-md-5 mb-4" data-v-0df18d52><img class="logo rounded-circle bg-oorange p-1 mb-3"${ssrRenderAttr("src", "/storage/img/logosdit.png")} alt="logosdit" data-v-0df18d52><h3 data-v-0df18d52>Buat Akun PPDB</h3><hr data-v-0df18d52></div><form class="px-0 px-md-5" data-v-0df18d52><div class="mb-3" data-v-0df18d52><input type="text"${ssrRenderAttr("value", $setup.form.name)} class="form-control form-control-lg mb-3" placeholder="Nama lengkap calon siswa " required data-v-0df18d52></div><div class="mb-3" data-v-0df18d52><input type="text"${ssrRenderAttr("value", $setup.form.hp)} class="${ssrRenderClass([{ "is-invalid": $props.errors.hp }, "form-control form-control-lg mb-3"])}" placeholder="No Wa Aktif (cth: 085xxxx)" data-v-0df18d52><div class="invalid-feedback" data-v-0df18d52>${ssrInterpolate($props.errors.hp)}</div></div><div class="form-group mb-3" data-v-0df18d52><input type="password"${ssrRenderAttr("value", $setup.form.password)} class="form-control form-control-lg mb-3" placeholder="Password" data-v-0df18d52><input type="password"${ssrRenderAttr("value", $setup.form.confirm_password)} class="${ssrRenderClass([{
    "is-invalid": $setup.form.cekPass === false
  }, "form-control form-control-lg"])}" placeholder="Ulangi Password" data-v-0df18d52><div class="invalid-feedback" data-v-0df18d52> password tidak sama </div></div><input type="submit" class="btn btn-oorange btn-lg mt-3 w-100 mb-3" value="Buat Akun" data-v-0df18d52><div class="text-center text-muted" data-v-0df18d52>atau</div><br data-v-0df18d52>`);
  _push(ssrRenderComponent(_component_Link, {
    as: "button",
    href: "/auth",
    class: "btn btn-lg btn-outline-dark w-100 text-muted"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/CreateAccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreateAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0df18d52"]]);
export {
  CreateAccount as default
};
