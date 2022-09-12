import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const Bridge_vue_vue_type_style_index_0_scoped_73a0ce2c_lang = "";
const _sfc_main = {
  props: {
    title: String,
    user: Object
  },
  components: {
    Link
  },
  setup() {
    const refresh = () => {
      window.location.reload();
    };
    return {
      refresh
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-oorange" }, _attrs))} data-v-73a0ce2c><div class="container" data-v-73a0ce2c><div class="d-flex flex-column pt-4 pt-md-0 justify-content-md-center vh-100" data-v-73a0ce2c>`);
  if ($props.title == "online") {
    _push(`<div class="bg-white p-3 p-md-5 rounded shadow" data-v-73a0ce2c><div class="text-center" data-v-73a0ce2c><img class="logo rounded p-1 mb-2 text-center"${ssrRenderAttr("src", "/storage/img/user.png")} alt="user" data-v-73a0ce2c><p class="fs-3" data-v-73a0ce2c> Assalamualaikum, <strong data-v-73a0ce2c>${ssrInterpolate($props.user.name)}</strong><br data-v-73a0ce2c></p><hr data-v-73a0ce2c></div><ul class="list-group fs-5 mb-3" data-v-73a0ce2c><li class="list-group-item" data-v-73a0ce2c> Sebelum melanjutkan pendaftaran, lakukan pembayaran terlebih dahulu untuk mengaktifkan Akun. </li><li class="list-group-item" data-v-73a0ce2c> Biaya pendaftaran sebesar: <span class="badge bg-oorange fs-6" data-v-73a0ce2c>Rp 300.000</span>, pembayaran melalui rekening sekolah BSI <span class="badge bg-oorange" data-v-73a0ce2c>4441234007</span><br data-v-73a0ce2c> A/N <i data-v-73a0ce2c> Sekolah Dasar Islam Terpadu Harapan Umat Jember</i></li><li class="list-group-item" data-v-73a0ce2c> Konfirmasi bukti pembayaran kirim ke <a href="https://wa.me/6288289378109/" target="_blank" class="btn btn-oorange" data-v-73a0ce2c> No. WA Admin (Klik disini)</a></li></ul><div class="btn-group w-100 mt-2" data-v-73a0ce2c><button class="btn btn-oorange" data-v-73a0ce2c> Refresh Page</button>`);
    _push(ssrRenderComponent(_component_Link, {
      as: "button",
      class: "btn btn-secondary",
      href: "/logout",
      method: "POST"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Logout `);
        } else {
          return [
            createTextVNode("Logout ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.title == "offline") {
    _push(`<div class="bg-white p-3 p-md-5 rounded shadow" data-v-73a0ce2c><div class="text-center" data-v-73a0ce2c><img class="logo rounded p-1 mb-2 text-center"${ssrRenderAttr("src", "/storage/img/user.png")} alt="user" data-v-73a0ce2c><p class="fs-3" data-v-73a0ce2c> Assalamualaikum, <strong data-v-73a0ce2c>${ssrInterpolate($props.user.name)}</strong><br data-v-73a0ce2c></p><hr data-v-73a0ce2c></div><div class="text-center" data-v-73a0ce2c><ul class="list-group fs-5 mb-3" data-v-73a0ce2c><li class="list-group-item" data-v-73a0ce2c> Mohon kesediaannya menunggu, karena pendaftaran saat ini masih belum dibuka <br data-v-73a0ce2c> Namun tidak perlu khwatir, saat pendaftaran dibuka. kami akan menginformasikannya untuk anda </li><li class="list-group-item" data-v-73a0ce2c> Informasi lebih lanjut wa No Admin berikut <a href="https://wa.me/6288289378109/" target="_blank" class="btn btn-oorange btn-sm" data-v-73a0ce2c>WA Admin (klik disini)</a></li></ul>`);
    _push(ssrRenderComponent(_component_Link, {
      as: "button",
      class: "btn btn-secondary text-white w-50 mt-2",
      href: "/logout",
      method: "POST"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Logout `);
        } else {
          return [
            createTextVNode(" Logout ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/Bridge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Bridge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-73a0ce2c"]]);
export {
  Bridge as default
};
