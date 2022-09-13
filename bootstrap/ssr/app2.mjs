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
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AturBiaya.vue": () => import("./assets/AturBiaya.a6715894.mjs"), "./Pages/Admin/Cost/Edit.vue": () => import("./assets/Edit.1edeb93e.mjs"), "./Pages/Admin/Cost/Index.vue": () => import("./assets/Index.460b4da0.mjs"), "./Pages/Admin/Index.vue": () => import("./assets/Index.baa41d25.mjs"), "./Pages/Admin/Kategori.vue": () => import("./assets/Kategori.6999a24d.mjs"), "./Pages/Admin/Settings.vue": () => import("./assets/Settings.39079e52.mjs"), "./Pages/Admin/Settings/Index.vue": () => import("./assets/Index.d341e3da.mjs"), "./Pages/Admin/Settings/SetApp.vue": () => import("./assets/SetApp.8a076e84.mjs"), "./Pages/Admin/Settings/SetPpdb.vue": () => import("./assets/SetPpdb.91db0cac.mjs"), "./Pages/Admin/Settings/SetTimeline.vue": () => import("./assets/SetTimeline.0d39cab4.mjs"), "./Pages/Admin/Students/Index.vue": () => import("./assets/Index.607620bb.mjs"), "./Pages/Admin/Students/SetSchedule.vue": () => import("./assets/SetSchedule.14e89e57.mjs"), "./Pages/Admin/Students/Show.vue": () => import("./assets/Show.7c83d665.mjs"), "./Pages/Admin/TerimaTolak.vue": () => import("./assets/TerimaTolak.18738218.mjs"), "./Pages/Admin/User/Index.vue": () => import("./assets/Index.1b1d4e36.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login.de7bf21b.mjs"), "./Pages/Error.vue": () => import("./assets/Error.023956c6.mjs"), "./Pages/Guest/Bridge.vue": () => import("./assets/Bridge.2bbcc06a.mjs"), "./Pages/Guest/CreateAccount.vue": () => import("./assets/CreateAccount.c8afe127.mjs"), "./Pages/Guest/FormPendaftaran.vue": () => import("./assets/FormPendaftaran.0b0dd5a8.mjs"), "./Pages/Guest/LandingPage.vue": () => import("./assets/LandingPage.f5aecacb.mjs"), "./Pages/User/DaftarulangPage.vue": () => import("./assets/DaftarulangPage.b00e47a9.mjs"), "./Pages/User/Index.vue": () => import("./assets/Index.12392118.mjs"), "./Pages/User/InformasiPage.vue": () => import("./assets/InformasiPage.0cfab938.mjs"), "./Pages/User/JadwalPage.vue": () => import("./assets/JadwalPage.790c5dae.mjs"), "./Pages/User/Show.vue": () => import("./assets/Show.20fbad23.mjs") })
  ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) }).use(plugin).mixin({ methods: { route } }).mount(el);
  }
});
InertiaProgress.init({ color: "orange" });
