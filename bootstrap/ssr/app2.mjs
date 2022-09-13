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
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AturBiaya.vue": () => import("./assets/AturBiaya.fb63b551.mjs"), "./Pages/Admin/Cost/Create.vue": () => import("./assets/Create.d8f0abe8.mjs"), "./Pages/Admin/Cost/Edit.vue": () => import("./assets/Edit.e62eb7e5.mjs"), "./Pages/Admin/Cost/Index.vue": () => import("./assets/Index.6946b129.mjs"), "./Pages/Admin/Index.vue": () => import("./assets/Index.0083715d.mjs"), "./Pages/Admin/Kategori.vue": () => import("./assets/Kategori.a47185e0.mjs"), "./Pages/Admin/Settings.vue": () => import("./assets/Settings.39079e52.mjs"), "./Pages/Admin/Settings/EditTimeline.vue": () => import("./assets/EditTimeline.f6485bca.mjs"), "./Pages/Admin/Settings/Index.vue": () => import("./assets/Index.2d34d8dd.mjs"), "./Pages/Admin/Settings/SetApp.vue": () => import("./assets/SetApp.e65d5a47.mjs"), "./Pages/Admin/Settings/SetPpdb.vue": () => import("./assets/SetPpdb.5c0357b6.mjs"), "./Pages/Admin/Settings/SetTimeline.vue": () => import("./assets/SetTimeline.06404a6f.mjs"), "./Pages/Admin/Students/Index.vue": () => import("./assets/Index.dc61179b.mjs"), "./Pages/Admin/Students/SetSchedule.vue": () => import("./assets/SetSchedule.243a6e32.mjs"), "./Pages/Admin/Students/Show.vue": () => import("./assets/Show.17298551.mjs"), "./Pages/Admin/TerimaTolak.vue": () => import("./assets/TerimaTolak.24f25231.mjs"), "./Pages/Admin/User/Index.vue": () => import("./assets/Index.de3836d0.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login.de7bf21b.mjs"), "./Pages/Error.vue": () => import("./assets/Error.023956c6.mjs"), "./Pages/Guest/Bridge.vue": () => import("./assets/Bridge.2bbcc06a.mjs"), "./Pages/Guest/CreateAccount.vue": () => import("./assets/CreateAccount.c8afe127.mjs"), "./Pages/Guest/FormPendaftaran.vue": () => import("./assets/FormPendaftaran.0b0dd5a8.mjs"), "./Pages/Guest/LandingPage.vue": () => import("./assets/LandingPage.9bf45d36.mjs"), "./Pages/User/DaftarulangPage.vue": () => import("./assets/DaftarulangPage.e961a06a.mjs"), "./Pages/User/Index.vue": () => import("./assets/Index.a21206e0.mjs"), "./Pages/User/InformasiPage.vue": () => import("./assets/InformasiPage.d08908af.mjs"), "./Pages/User/JadwalPage.vue": () => import("./assets/JadwalPage.d33e7453.mjs"), "./Pages/User/Show.vue": () => import("./assets/Show.8ccb672a.mjs") })
  ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) }).use(plugin).mixin({ methods: { route } }).mount(el);
  }
});
InertiaProgress.init({ color: "orange" });
