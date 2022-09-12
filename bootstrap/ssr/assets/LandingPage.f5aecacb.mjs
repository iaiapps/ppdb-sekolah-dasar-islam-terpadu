import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const NavHome_vue_vue_type_style_index_0_scoped_5f17a0e3_lang = "";
const _sfc_main$6 = {
  name: "LandHome",
  components: {
    Link
  },
  data() {
    return {
      scrollPosition: null,
      isActive: "beranda"
    };
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: [{ change_nav: $data.scrollPosition > 55 }, "navbar navbar-expand-lg navbar-light bg-light py-2 fs-5 sticky-top"]
  }, _attrs))} data-v-5f17a0e3><div class="container" data-v-5f17a0e3><a class="navbar-brand" href="#" data-v-5f17a0e3><img${ssrRenderAttr("src", "storage/img/logoppdb.png")} alt="logoppdb" class="imglogo" data-v-5f17a0e3></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-5f17a0e3><span class="navbar-toggler-icon" data-v-5f17a0e3></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent" data-v-5f17a0e3><ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-md-2" data-v-5f17a0e3><li class="nav-item mx-md-2 mx-0" data-v-5f17a0e3><a class="${ssrRenderClass([{ "bg-nav": $data.isActive === "beranda" }, "nav-link hover px-3"])}" href="#beranda" data-v-5f17a0e3>BERANDA</a></li><li class="nav-item mx-md-2 mx-0" data-v-5f17a0e3><a class="${ssrRenderClass([{ "bg-nav": $data.isActive === "jadwal" }, "nav-link hover px-3"])}" href="#jadwal" data-v-5f17a0e3>JADWAL</a></li><li class="nav-item mx-md-2 mx-0" data-v-5f17a0e3><a class="${ssrRenderClass([{ "bg-nav": $data.isActive === "panduan" }, "nav-link hover px-3"])}" href="#panduan" data-v-5f17a0e3>PANDUAN</a></li><li class="nav-item mx-md-2 mx-0" data-v-5f17a0e3><a class="${ssrRenderClass([{ "bg-nav": $data.isActive === "kontak" }, "nav-link hover px-3"])}" href="#kontak" data-v-5f17a0e3>KONTAK</a></li></ul>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn btn-dark btn-lg text-white ps-3",
    as: "button",
    href: _ctx.route("login")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`LOGIN`);
      } else {
        return [
          createTextVNode("LOGIN")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></nav>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Landing/NavHome.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const NavHome = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-5f17a0e3"]]);
const FirstHome_vue_vue_type_style_index_0_scoped_bed1874c_lang = "";
const _sfc_main$5 = {
  name: "FrstHome",
  components: {
    Link
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<!--[--><div id="beranda" class="back" data-v-bed1874c><div class="container pb-5" data-v-bed1874c><div class="row" data-v-bed1874c><div class="col-12 col-md-6 pt-md-4 center" data-v-bed1874c><div class="pt-3 pt-md-5" data-v-bed1874c><h2 class="display-5 bg-dark py-2 px-3 text-white d-inline-block" data-v-bed1874c> PENDAFTARAN SDIT </h2><h2 class="display-5 bg-dark py-2 px-3 text-white d-inline-block" data-v-bed1874c> HARAPAN UMAT </h2></div><div class="pt-3" data-v-bed1874c><p class="fs-3 m-0" data-v-bed1874c> Telah dibuka untuk tahun 2023/2024 </p><p class="fs-3" data-v-bed1874c>Segera daftar, kuota terbatas!</p></div><div class="pt-3 d-grid gap-2 d-md-block" data-v-bed1874c>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn btn-dark btn-lg me-0 me-md-3",
    as: "button",
    href: "/buat-akun"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` DAFTAR SEKARANG `);
      } else {
        return [
          createTextVNode(" DAFTAR SEKARANG ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="btn btn-outline-dark btn-lg" data-v-bed1874c> WA ADMIN </button></div></div><div class="col-12 col-md-6 pt-4 order-first order-md-last d-flex justify-content-center" data-v-bed1874c><img class="gbr"${ssrRenderAttr("src", "/storage/img/gbr.png")} alt="gbr" data-v-bed1874c></div></div></div></div><div class="text-center bg-dark p-4 p-md-5 text-white top" data-v-bed1874c><h3 class="display-5" data-v-bed1874c>Sudah punya akun PPDB?</h3><p class="display-6 py-3" data-v-bed1874c>Login web disini</p>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn btn-oorange w-50 btn-lg text-white",
    as: "button",
    href: _ctx.route("login")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`LOGIN`);
      } else {
        return [
          createTextVNode("LOGIN")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Landing/FirstHome.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FirstHome = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-bed1874c"]]);
const JadwalHome_vue_vue_type_style_index_0_scoped_6a5a9b40_lang = "";
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "jadwal",
    class: "container"
  }, _attrs))} data-v-6a5a9b40><h3 class="text-center display-4 pt-3 pt-md-5" data-v-6a5a9b40> Jadwal Pendaftaran (Timeline) </h3><div class="row mb-5 text-center" data-v-6a5a9b40><div class="col-6 col-md-4 py-3" data-v-6a5a9b40><div class="p-3 bg-card" data-v-6a5a9b40><img class="img-ket pt-2"${ssrRenderAttr("src", "storage/img/1.png")} data-v-6a5a9b40><h5 class="py-2 fs-3 text-white mb-0" data-v-6a5a9b40> Pendaftaran Calon Peserta Didik </h5><p class="fs-4 py-2 text-black" data-v-6a5a9b40> 12 Sept 2022 s/d 14 Jan 2023 </p><hr class="w-50" data-v-6a5a9b40></div></div><div class="col-6 col-md-4 py-3" data-v-6a5a9b40><div class="p-3 bg-card" data-v-6a5a9b40><img class="img-ket"${ssrRenderAttr("src", "storage/img/2.png")} data-v-6a5a9b40><h5 class="py-2 fs-3 text-white mb-0" data-v-6a5a9b40> Observasi dan <br data-v-6a5a9b40>Psikotest </h5><p class="fs-4 py-2 text-black" data-v-6a5a9b40>11 Februari 2023</p><hr class="w-50 text-center" data-v-6a5a9b40></div></div><div class="col-6 col-md-4 py-3" data-v-6a5a9b40><div class="p-3 bg-card" data-v-6a5a9b40><img class="img-ket"${ssrRenderAttr("src", "storage/img/3.png")} data-v-6a5a9b40><h5 class="py-2 fs-3 text-white mb-0" data-v-6a5a9b40> Pengumuman <br data-v-6a5a9b40>Hasil PPDB </h5><p class="fs-4 py-2 text-black" data-v-6a5a9b40>13 Maret 2023</p><hr class="w-50 text-center" data-v-6a5a9b40></div></div><div class="col-6 col-md-4 py-3" data-v-6a5a9b40><div class="p-3 bg-card" data-v-6a5a9b40><img class="img-ket"${ssrRenderAttr("src", "storage/img/4.png")} data-v-6a5a9b40><h5 class="py-2 fs-3 text-white mb-0" data-v-6a5a9b40> Pembayaran Biaya <br data-v-6a5a9b40>Daftar Ulang </h5><p class="fs-4 py-2 text-black" data-v-6a5a9b40>13 Mar - 10 April 2023</p><hr class="w-50 text-center" data-v-6a5a9b40></div></div><div class="col-6 col-md-4 py-3" data-v-6a5a9b40><div class="p-3 bg-card" data-v-6a5a9b40><img class="img-ket"${ssrRenderAttr("src", "storage/img/5.png")} data-v-6a5a9b40><h5 class="py-2 fs-3 text-white mb-0" data-v-6a5a9b40> Test BTAQ &amp; <br data-v-6a5a9b40>Fitting seragam </h5><p class="fs-4 py-2 text-black" data-v-6a5a9b40>11-12 Mei 2023</p><hr class="w-50 text-center" data-v-6a5a9b40></div></div><div class="col-6 col-md-4 py-3" data-v-6a5a9b40><div class="p-3 bg-card" data-v-6a5a9b40><img class="img-ket"${ssrRenderAttr("src", "storage/img/6.png")} data-v-6a5a9b40><h5 class="py-2 fs-3 text-white mb-0" data-v-6a5a9b40> Pembagian seragam, buku, &amp; kelas </h5><p class="fs-4 py-2 text-black" data-v-6a5a9b40>7 Juli 2023</p><hr class="w-50 text-center" data-v-6a5a9b40></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Landing/JadwalHome.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const JadwalHome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-6a5a9b40"]]);
const PanduanHome_vue_vue_type_style_index_0_scoped_2c1cae87_lang = "";
const _sfc_main$3 = {
  name: "PanduanHome"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "panduan",
    class: "bg-container"
  }, _attrs))} data-v-2c1cae87><div class="container py-md-5 py-4" data-v-2c1cae87><div class="row" data-v-2c1cae87><div class="col-12 col-md-5" data-v-2c1cae87><h3 class="display-6" data-v-2c1cae87>Panduan Pendaftaran</h3><p class="fs-5" data-v-2c1cae87> Panduan Pendaftaran Peserta Didik Baru <br data-v-2c1cae87>SDIT Harapan Umat Jember </p><ul class="fs-5 pb-2" data-v-2c1cae87><li data-v-2c1cae87>Membuat akun PPDB</li><li data-v-2c1cae87>Membayar biaya pendaftaran</li><li data-v-2c1cae87>Konfirmasi pembayaran</li><li data-v-2c1cae87>Login web dan isi formulir</li><li data-v-2c1cae87>Pengumuman</li></ul><button class="btn btn-light btn-lg" data-v-2c1cae87>WA Admin</button></div><div class="col-12 col-md-7 pt-4 pt-md-0" data-v-2c1cae87><div class="row" data-v-2c1cae87><div class="col-12 col-md-6 p-2" data-v-2c1cae87><div class="bg-card-pand p-3" data-v-2c1cae87><i class="bi bi-coin display-5" data-v-2c1cae87></i><p data-v-2c1cae87> Membuat Akun PPDB, kemudian membayar biaya pendaftaran sebesar : <span class="bg-oorange text-white p-1 rounded fw-bold" data-v-2c1cae87>Rp 300.000</span> ke rekening sekolah BSI 4441234007 a.n. Sekolah Dasar Islam Terpadu Harapan Umat Jember. </p></div></div><div class="col-12 col-md-6 p-2" data-v-2c1cae87><div class="bg-card-pand p-3" data-v-2c1cae87><i class="bi bi-phone-flip display-5" data-v-2c1cae87></i><p data-v-2c1cae87> Mengirim bukti transfer ke nomor 088-289-378-109 dengan format: <br data-v-2c1cae87><span class="bg-oorange p-1 rounded fw-bold text-white" data-v-2c1cae87>nama pengirim#nama calon siswa,</span><br data-v-2c1cae87>agar akun berstatus &quot;Aktif&quot;. </p></div></div><div class="col-12 col-md-6 p-2" data-v-2c1cae87><div class="bg-card-pand p-3" data-v-2c1cae87><i class="bi bi-input-cursor-text display-5" data-v-2c1cae87></i><p data-v-2c1cae87> Mengisi formulir pendaftaran dengan akun yang sudah &quot;Aktif&quot; di web PPDB SDIT Harum. Akun yang &quot;Belum Aktif&quot; tidak dapat mengisi formulir pendaftaran </p></div></div><div class="col-12 col-md-6 p-2" data-v-2c1cae87><div class="bg-card-pand p-3" data-v-2c1cae87><i class="bi bi-envelope-paper display-5" data-v-2c1cae87></i><p data-v-2c1cae87> Menunggu pengumuman lanjutan dari sekolah. Yang akan ditampilkan di website PPDB. </p></div></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Landing/PanduanHome.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PanduanHome = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-2c1cae87"]]);
const KontakHome_vue_vue_type_style_index_0_scoped_761023d7_lang = "";
const _sfc_main$2 = {
  name: "KontakHome"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "kontak",
    class: "container py-5"
  }, _attrs))} data-v-761023d7><div class="row text-center" data-v-761023d7><div class="text-center col-12 col-md-5" data-v-761023d7><img${ssrRenderAttr("src", "storage/img/scdh.png")} alt="scdh" class="gbr-cp" data-v-761023d7><h3 data-v-761023d7>Jam Pelayanan</h3><h4 class="bg-oorange px-3 py-1" data-v-761023d7>Senin s/d Jum&#39;at</h4><p class="fs-4" data-v-761023d7>08.00-15.30</p><h4 class="bg-oorange px-3 py-1" data-v-761023d7>Sabtu</h4><p class="fs-4" data-v-761023d7>08.00-11.30</p></div><div class="col-2 d-none d-md-block" data-v-761023d7><div class="vr" data-v-761023d7></div></div><div class="text-center col-12 col-md-5" data-v-761023d7><img${ssrRenderAttr("src", "storage/img/wa.png")} alt="wa" class="gbr-cp" data-v-761023d7><h3 data-v-761023d7>Hubungi Kami</h3><h4 class="fs-4 bg-oorange px-3 py-1" data-v-761023d7>Ust Ristiono, S.Psi.</h4><p class="fs-4" data-v-761023d7>088-289-378-109</p></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Landing/KontakHome.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const KontakHome = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-761023d7"]]);
const _sfc_main$1 = {
  name: "FooterHome"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark" }, _attrs))}><div class="container"><div class="row text-white pt-md-5 pt-4"><div class="col-12 col-md-6"><h3>SDIT HARAPAN UMAT JEMBER</h3><p class="fs-6 pt-3"> Jl. Danau Toba Gg. Islamic Center <br>Lingkungan Panji, Tegalgede <br>Kec. Sumbersari, Kabupaten Jember <br>Jawa Timur 68124 </p><div class="pt-3"><a href="#" class="btn btn-outline-light me-3"><i class="bi bi-globe fs-5"></i></a><a href="#" class="btn btn-outline-light me-3"><i class="bi bi-facebook fs-5"></i></a><a href="#" class="btn btn-outline-light me-3"><i class="bi bi-instagram fs-5"></i></a><a href="#" class="btn btn-outline-light me-3"><i class="bi bi-youtube fs-5"></i></a></div></div><div class="col-12 col-md-6 pt-md-0 pt-4"><h3>LOKASI</h3><div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15797.908907834912!2d113.7174303!3d-8.1545784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97c9df8f080eb4b5!2sSDIT%20Harum%20(Harapan%20Umat)%20Jember!5e0!3m2!1sid!2sid!4v1659948289547!5m2!1sid!2sid" width="100%" height="250px" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div><hr class="text-white"><div class><p class="text-center text-white m-0 pb-3 small">Copyright @ Tim IT SDIT Harum Jember - 2022</p></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Landing/FooterHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterHome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const LandingPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "App",
  components: {
    NavHome,
    FirstHome,
    JadwalHome,
    PanduanHome,
    KontakHome,
    FooterHome
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavHome = resolveComponent("NavHome");
  const _component_FirstHome = resolveComponent("FirstHome");
  const _component_JadwalHome = resolveComponent("JadwalHome");
  const _component_PanduanHome = resolveComponent("PanduanHome");
  const _component_KontakHome = resolveComponent("KontakHome");
  const _component_FooterHome = resolveComponent("FooterHome");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NavHome, null, null, _parent));
  _push(ssrRenderComponent(_component_FirstHome, null, null, _parent));
  _push(ssrRenderComponent(_component_JadwalHome, null, null, _parent));
  _push(ssrRenderComponent(_component_PanduanHome, null, null, _parent));
  _push(ssrRenderComponent(_component_KontakHome, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterHome, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/LandingPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LandingPage as default
};
