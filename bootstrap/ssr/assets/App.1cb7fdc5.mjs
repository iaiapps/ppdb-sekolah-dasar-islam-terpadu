import { Link } from "@inertiajs/inertia-vue3";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const Navbar_vue_vue_type_style_index_0_scoped_c151e8cb_lang = "";
const _sfc_main$3 = {
  name: "NavAdmin",
  components: {
    Link
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row py-3 gx-0 px-3 px-md-4" }, _attrs))} data-v-c151e8cb><div class="col-6" data-v-c151e8cb><img${ssrRenderAttr("src", "/storage/img/logoppdb.png")} alt="logoppdb" class="imglogo" data-v-c151e8cb></div><div class="col-6 text-end" data-v-c151e8cb><a class="btn btn-oorange text-white me-2" target="_blank" href="https://wa.me/6288289378109/" data-v-c151e8cb><i class="bi bi-chat-left-text" data-v-c151e8cb></i></a>`);
  _push(ssrRenderComponent(_component_Link, {
    as: "button",
    class: "btn btn-oorange text-white",
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
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/dashboard/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-c151e8cb"]]);
const Sidebar_vue_vue_type_style_index_0_scoped_c1dfada1_lang = "";
const _sfc_main$2 = {
  name: "LeftSide",
  props: {
    admin: Boolean
  },
  components: {
    Link
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 p-3 bg-white rounded col-md-2" }, _attrs))} data-v-c1dfada1><div class="text-center" data-v-c1dfada1><img class="logo"${ssrRenderAttr("src", "/storage/img/logosdit.png")} alt="logo" data-v-c1dfada1></div><p class="text-center mt-3 py-2 fs-6 text-dark fw-bold" data-v-c1dfada1>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</p>`);
  if (_ctx.$page.props.auth.user.roles == "admin") {
    _push(`<ul class="nav flex-row flex-md-column justify-content-between" data-v-c1dfada1><li class="nav-item my-1" data-v-c1dfada1>`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["nav-link hover rounded", {
        "bg-menu": _ctx.$page.component === "Admin/Index"
      }],
      href: _ctx.route("admin.dashboard")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="bi bi-bar-chart me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Home</span>`);
        } else {
          return [
            createVNode("i", { class: "bi bi-bar-chart me-0 me-md-2" }),
            createVNode("span", { class: "d-none d-md-inline-block" }, "Home")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="nav-item my-1" data-v-c1dfada1>`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["nav-link hover rounded", {
        "bg-menu": _ctx.$page.url === "/admin/users"
      }],
      href: "/admin/users"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="bi bi-info-circle me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Users</span>`);
        } else {
          return [
            createVNode("i", { class: "bi bi-info-circle me-0 me-md-2" }),
            createVNode("span", { class: "d-none d-md-inline-block" }, "Users")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="nav-item my-1" data-v-c1dfada1>`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["nav-link hover rounded", {
        "bg-menu": _ctx.$page.url === "/admin/students"
      }],
      href: "/admin/students"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="bi bi-info-circle me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Students</span>`);
        } else {
          return [
            createVNode("i", { class: "bi bi-info-circle me-0 me-md-2" }),
            createVNode("span", { class: "d-none d-md-inline-block" }, "Students")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="nav-item my-1" data-v-c1dfada1>`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["nav-link hover rounded", {
        "bg-menu": _ctx.$page.url === "/admin/kategori-biaya"
      }],
      href: "/admin/kategori-biaya"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="bi bi-coin me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Cost Category</span>`);
        } else {
          return [
            createVNode("i", { class: "bi bi-coin me-0 me-md-2" }),
            createVNode("span", { class: "d-none d-md-inline-block" }, "Cost Category")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="nav-item my-1" data-v-c1dfada1>`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["nav-link hover rounded", {
        "bg-menu": _ctx.$page.component === "Admin/Cost/Index"
      }],
      href: _ctx.route("admin.cost.index")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="bi bi-cash-coin me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Set Cost</span>`);
        } else {
          return [
            createVNode("i", { class: "bi bi-cash-coin me-0 me-md-2" }),
            createVNode("span", { class: "d-none d-md-inline-block" }, "Set Cost")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="nav-item my-1" data-v-c1dfada1>`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["nav-link hover rounded", {
        "bg-menu": _ctx.$page.url === "/admin/settings"
      }],
      href: "/admin/settings"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="bi bi bi-sliders me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Setting</span>`);
        } else {
          return [
            createVNode("i", { class: "bi bi bi-sliders me-0 me-md-2" }),
            createVNode("span", { class: "d-none d-md-inline-block" }, "Setting")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li></ul>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.auth.user.roles == "menunggu" || _ctx.$page.props.auth.user.roles == "diterima") {
    _push(`<ul class="nav flex-row flex-md-column justify-content-around" data-v-c1dfada1><li class="nav-item my-1" data-v-c1dfada1>`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["nav-link hover rounded", {
        "bg-menu": _ctx.$page.component === "User/Index"
      }],
      href: _ctx.route("user.dashboard")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="bi bi-house-door me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Home</span>`);
        } else {
          return [
            createVNode("i", { class: "bi bi-house-door me-0 me-md-2" }),
            createVNode("span", { class: "d-none d-md-inline-block" }, "Home")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="nav-item my-1" data-v-c1dfada1>`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["nav-link hover rounded", {
        "bg-menu": _ctx.$page.component === "User/InformasiPage"
      }],
      href: _ctx.route("user.informasi")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="bi bi-info-circle me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Informasi</span>`);
        } else {
          return [
            createVNode("i", { class: "bi bi-info-circle me-0 me-md-2" }),
            createVNode("span", { class: "d-none d-md-inline-block" }, "Informasi")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
    if (_ctx.$page.props.auth.user.roles == "menunggu") {
      _push(`<li class="nav-item my-1" data-v-c1dfada1>`);
      _push(ssrRenderComponent(_component_Link, {
        class: ["nav-link hover rounded", {
          "bg-menu": _ctx.$page.component === "User/JadwalPage"
        }],
        href: _ctx.route("user.jadwal")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-calendar3 me-0 me-md-2" data-v-c1dfada1${_scopeId}></i><span class="d-none d-md-inline-block" data-v-c1dfada1${_scopeId}>Jadwal Test</span>`);
          } else {
            return [
              createVNode("i", { class: "bi bi-calendar3 me-0 me-md-2" }),
              createVNode("span", { class: "d-none d-md-inline-block" }, "Jadwal Test")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/dashboard/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c1dfada1"]]);
const Rightbar_vue_vue_type_style_index_0_scoped_019ad508_lang = "";
const _sfc_main$1 = {
  name: "Rightbar",
  data() {
    return {
      time: "",
      isActivated: true
    };
  },
  methods: {
    getTime() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const today = new Date();
      this.time = today.toLocaleDateString("id-ID", options);
    },
    getModal() {
      this.isActivated = !this.isActivated;
    }
  },
  mounted() {
    this.getTime();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><a href="#top" class="btn btn-oorange mt-3 d-md-none floating fs-2" data-v-019ad508><i class="bi bi-calendar2-check" data-v-019ad508></i></a><div id="top" class="${ssrRenderClass([{ "d-none": $data.isActivated }, "col-12 col-md-2 bg-white rounded p-3 text-center my-3 mt-md-0 order-first order-md-last d-md-block"])}" data-v-019ad508><div class="bg-oorange p-1 text-white rounded" data-v-019ad508><p class="badge" data-v-019ad508>Tanggal sekarang</p><br data-v-019ad508><span data-v-019ad508>${ssrInterpolate($data.time)}</span></div><hr data-v-019ad508><strong data-v-019ad508>Timeline</strong><hr data-v-019ad508><div class="small" data-v-019ad508><!--[-->`);
  ssrRenderList(_ctx.$page.props.timelines, (item) => {
    _push(`<div data-v-019ad508><p data-v-019ad508>${ssrInterpolate(item.info)}</p><p data-v-019ad508>${ssrInterpolate(item.date)}</p><hr data-v-019ad508></div>`);
  });
  _push(`<!--]--></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/dashboard/Rightbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Rightbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-019ad508"]]);
const App_vue_vue_type_style_index_0_scoped_370e5ec7_lang = "";
const _sfc_main = {
  name: "AdminPage",
  components: {
    Navbar,
    Sidebar,
    Rightbar
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = resolveComponent("Navbar");
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_Rightbar = resolveComponent("Rightbar");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<div class="bg-light min-vh-100" data-v-370e5ec7><div class="container-fluid back" data-v-370e5ec7><div class="row py-3 px-md-4 px-3" data-v-370e5ec7>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.$page.component !== "Admin/Cost/Index") {
    _push(ssrRenderComponent(_component_Rightbar, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-370e5ec7"]]);
export {
  AppLayout as A
};
