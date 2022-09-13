import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import "bootstrap";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const bootstrapIcons = "";
createInertiaApp({
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.vue`,
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AturBiaya.vue": () => import("./assets/AturBiaya.6a710be9.mjs"), "./Pages/Admin/Cost/Edit.vue": () => import("./assets/Edit.e38baa8d.mjs"), "./Pages/Admin/Cost/Index.vue": () => import("./assets/Index.60f3d0f5.mjs"), "./Pages/Admin/Index.vue": () => import("./assets/Index.6f451769.mjs"), "./Pages/Admin/Kategori.vue": () => import("./assets/Kategori.abfc8f8d.mjs"), "./Pages/Admin/Settings.vue": () => import("./assets/Settings.39079e52.mjs"), "./Pages/Admin/Settings/Index.vue": () => import("./assets/Index.4562d3c9.mjs"), "./Pages/Admin/Settings/SetApp.vue": () => import("./assets/SetApp.f5b55c7f.mjs"), "./Pages/Admin/Settings/SetPpdb.vue": () => import("./assets/SetPpdb.80e71b59.mjs"), "./Pages/Admin/Settings/SetTimeline.vue": () => import("./assets/SetTimeline.91d3b78c.mjs"), "./Pages/Admin/Students/Index.vue": () => import("./assets/Index.ba166600.mjs"), "./Pages/Admin/Students/SetSchedule.vue": () => import("./assets/SetSchedule.c73a7059.mjs"), "./Pages/Admin/Students/Show.vue": () => import("./assets/Show.5c22824d.mjs"), "./Pages/Admin/TerimaTolak.vue": () => import("./assets/TerimaTolak.111a32f5.mjs"), "./Pages/Admin/User/Index.vue": () => import("./assets/Index.effe4daf.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login.de7bf21b.mjs"), "./Pages/Error.vue": () => import("./assets/Error.023956c6.mjs"), "./Pages/Guest/Bridge.vue": () => import("./assets/Bridge.2bbcc06a.mjs"), "./Pages/Guest/CreateAccount.vue": () => import("./assets/CreateAccount.c8afe127.mjs"), "./Pages/Guest/FormPendaftaran.vue": () => import("./assets/FormPendaftaran.0b0dd5a8.mjs"), "./Pages/Guest/LandingPage.vue": () => import("./assets/LandingPage.f5aecacb.mjs"), "./Pages/User/DaftarulangPage.vue": () => import("./assets/DaftarulangPage.120af77c.mjs"), "./Pages/User/Index.vue": () => import("./assets/Index.5ca0bd3b.mjs"), "./Pages/User/InformasiPage.vue": () => import("./assets/InformasiPage.b513068a.mjs"), "./Pages/User/JadwalPage.vue": () => import("./assets/JadwalPage.66829089.mjs"), "./Pages/User/Show.vue": () => import("./assets/Show.aada7792.mjs") })
  ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) }).use(plugin).mixin({ methods: { route } }).mount(el);
  }
});
InertiaProgress.init({ color: "orange" });
