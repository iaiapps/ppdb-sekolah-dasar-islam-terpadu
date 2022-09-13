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
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AturBiaya.vue": () => import("./assets/AturBiaya.4070189c.mjs"), "./Pages/Admin/Cost/Create.vue": () => import("./assets/Create.5c27896a.mjs"), "./Pages/Admin/Cost/Edit.vue": () => import("./assets/Edit.ce7accdc.mjs"), "./Pages/Admin/Cost/Index.vue": () => import("./assets/Index.050b9ccb.mjs"), "./Pages/Admin/Cost/Students.vue": () => import("./assets/Students.bc578772.mjs"), "./Pages/Admin/Index.vue": () => import("./assets/Index.495da2c5.mjs"), "./Pages/Admin/Settings.vue": () => import("./assets/Settings.39079e52.mjs"), "./Pages/Admin/Settings/EditTimeline.vue": () => import("./assets/EditTimeline.f6485bca.mjs"), "./Pages/Admin/Settings/Index.vue": () => import("./assets/Index.a357a411.mjs"), "./Pages/Admin/Settings/SetApp.vue": () => import("./assets/SetApp.e65d5a47.mjs"), "./Pages/Admin/Settings/SetPpdb.vue": () => import("./assets/SetPpdb.5c0357b6.mjs"), "./Pages/Admin/Settings/SetTimeline.vue": () => import("./assets/SetTimeline.06404a6f.mjs"), "./Pages/Admin/Students/Index.vue": () => import("./assets/Index.88d5325f.mjs"), "./Pages/Admin/Students/SetSchedule.vue": () => import("./assets/SetSchedule.d50d807b.mjs"), "./Pages/Admin/Students/Show.vue": () => import("./assets/Show.9b6040e7.mjs"), "./Pages/Admin/TerimaTolak.vue": () => import("./assets/TerimaTolak.dfa3a059.mjs"), "./Pages/Admin/User/Index.vue": () => import("./assets/Index.24c0399c.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login.de7bf21b.mjs"), "./Pages/Error.vue": () => import("./assets/Error.023956c6.mjs"), "./Pages/Guest/Bridge.vue": () => import("./assets/Bridge.2bbcc06a.mjs"), "./Pages/Guest/CreateAccount.vue": () => import("./assets/CreateAccount.c8afe127.mjs"), "./Pages/Guest/FormPendaftaran.vue": () => import("./assets/FormPendaftaran.0b0dd5a8.mjs"), "./Pages/Guest/LandingPage.vue": () => import("./assets/LandingPage.a1cb37a9.mjs"), "./Pages/User/DaftarulangPage.vue": () => import("./assets/DaftarulangPage.ba60c0d4.mjs"), "./Pages/User/Index.vue": () => import("./assets/Index.1cd21add.mjs"), "./Pages/User/InformasiPage.vue": () => import("./assets/InformasiPage.90547c08.mjs"), "./Pages/User/JadwalPage.vue": () => import("./assets/JadwalPage.5c58ece5.mjs"), "./Pages/User/Show.vue": () => import("./assets/Show.808f7bb0.mjs") })
  ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) }).use(plugin).mixin({ methods: { route } }).mount(el);
  }
});
InertiaProgress.init({ color: "orange" });
