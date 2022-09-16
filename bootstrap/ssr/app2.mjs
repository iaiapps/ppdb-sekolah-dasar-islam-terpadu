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
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AturBiaya.vue": () => import("./assets/AturBiaya.4070189c.mjs"), "./Pages/Admin/Cost/Create.vue": () => import("./assets/Create.5c27896a.mjs"), "./Pages/Admin/Cost/Edit.vue": () => import("./assets/Edit.ded18924.mjs"), "./Pages/Admin/Cost/Index.vue": () => import("./assets/Index.050b9ccb.mjs"), "./Pages/Admin/Cost/Students.vue": () => import("./assets/Students.48d140c1.mjs"), "./Pages/Admin/Index.vue": () => import("./assets/Index.495da2c5.mjs"), "./Pages/Admin/Settings/EditApp.vue": () => import("./assets/EditApp.ce51fcd0.mjs"), "./Pages/Admin/Settings/EditTimeline.vue": () => import("./assets/EditTimeline.f6485bca.mjs"), "./Pages/Admin/Settings/Index.vue": () => import("./assets/Index.80fb9983.mjs"), "./Pages/Admin/Settings/SetApp.vue": () => import("./assets/SetApp.aaad12c4.mjs"), "./Pages/Admin/Settings/SetPpdb.vue": () => import("./assets/SetPpdb.d2147574.mjs"), "./Pages/Admin/Settings/SetTimeline.vue": () => import("./assets/SetTimeline.22a7e86b.mjs"), "./Pages/Admin/Students/Index.vue": () => import("./assets/Index.cfac50e7.mjs"), "./Pages/Admin/Students/SetSchedule.vue": () => import("./assets/SetSchedule.d50d807b.mjs"), "./Pages/Admin/Students/Show.vue": () => import("./assets/Show.9b6040e7.mjs"), "./Pages/Admin/TerimaTolak.vue": () => import("./assets/TerimaTolak.dfa3a059.mjs"), "./Pages/Admin/User/Index.vue": () => import("./assets/Index.24c0399c.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login.de7bf21b.mjs"), "./Pages/Error.vue": () => import("./assets/Error.023956c6.mjs"), "./Pages/Guest/Bridge.vue": () => import("./assets/Bridge.2bbcc06a.mjs"), "./Pages/Guest/CreateAccount.vue": () => import("./assets/CreateAccount.c8afe127.mjs"), "./Pages/Guest/FormPendaftaran.vue": () => import("./assets/FormPendaftaran.0b0dd5a8.mjs"), "./Pages/Guest/LandingPage.vue": () => import("./assets/LandingPage.a1cb37a9.mjs"), "./Pages/User/DaftarulangPage.vue": () => import("./assets/DaftarulangPage.ba60c0d4.mjs"), "./Pages/User/Index.vue": () => import("./assets/Index.1cd21add.mjs"), "./Pages/User/InformasiPage.vue": () => import("./assets/InformasiPage.90547c08.mjs"), "./Pages/User/JadwalPage.vue": () => import("./assets/JadwalPage.5c58ece5.mjs"), "./Pages/User/Show.vue": () => import("./assets/Show.808f7bb0.mjs") })
  ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) }).use(plugin).mixin({ methods: { route } }).mount(el);
  }
});
InertiaProgress.init({ color: "orange" });
