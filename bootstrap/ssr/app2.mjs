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
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AturBiaya.vue": () => import("./assets/AturBiaya.b1746170.mjs"), "./Pages/Admin/Cost/Edit.vue": () => import("./assets/Edit.9fcf085c.mjs"), "./Pages/Admin/Cost/Index.vue": () => import("./assets/Index.5dba4ab2.mjs"), "./Pages/Admin/Index.vue": () => import("./assets/Index.79619899.mjs"), "./Pages/Admin/Kategori.vue": () => import("./assets/Kategori.3522e9e5.mjs"), "./Pages/Admin/Settings.vue": () => import("./assets/Settings.2131d68b.mjs"), "./Pages/Admin/Students/Index.vue": () => import("./assets/Index.97c27481.mjs"), "./Pages/Admin/Students/SetSchedule.vue": () => import("./assets/SetSchedule.a39d8890.mjs"), "./Pages/Admin/Students/Show.vue": () => import("./assets/Show.b5640d9c.mjs"), "./Pages/Admin/TerimaTolak.vue": () => import("./assets/TerimaTolak.db4e42ec.mjs"), "./Pages/Admin/User/Index.vue": () => import("./assets/Index.6b9ccccd.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login.de7bf21b.mjs"), "./Pages/Error.vue": () => import("./assets/Error.023956c6.mjs"), "./Pages/Guest/Bridge.vue": () => import("./assets/Bridge.2bbcc06a.mjs"), "./Pages/Guest/CreateAccount.vue": () => import("./assets/CreateAccount.c8afe127.mjs"), "./Pages/Guest/FormPendaftaran.vue": () => import("./assets/FormPendaftaran.0b0dd5a8.mjs"), "./Pages/Guest/LandingPage.vue": () => import("./assets/LandingPage.f5aecacb.mjs"), "./Pages/User/DaftarulangPage.vue": () => import("./assets/DaftarulangPage.8da170c1.mjs"), "./Pages/User/Index.vue": () => import("./assets/Index.0fc84d0e.mjs"), "./Pages/User/InformasiPage.vue": () => import("./assets/InformasiPage.157db545.mjs"), "./Pages/User/JadwalPage.vue": () => import("./assets/JadwalPage.0c9e2222.mjs"), "./Pages/User/Show.vue": () => import("./assets/Show.03705dd3.mjs") })
  ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) }).use(plugin).mixin({ methods: { route } }).mount(el);
  }
});
InertiaProgress.init({ color: "orange" });
