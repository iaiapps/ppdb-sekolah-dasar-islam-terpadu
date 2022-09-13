import { A as AppLayout } from "./App.31ee7799.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
  name: "PendaftarPage",
  layout: AppLayout,
  props: {
    status: String,
    student: Object
  },
  data() {
    return {
      alert: true
    };
  },
  methods: {
    tampil() {
      if (this.$page.props.flash.message == null) {
        this.alert = false;
      } else {
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 5e3);
      }
    }
  },
  mounted() {
    this.tampil();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))}><div style="${ssrRenderStyle($data.alert ? null : { display: "none" })}" class="bg-white text-center alert alert-dismissible mb-3 fs-5">${ssrInterpolate(_ctx.$page.props.flash.message)} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><div class="table-responsive bg-white rounded p-3 mb-3 text-uppercase fs-5"> Status : <b>${ssrInterpolate($props.status)}</b></div><div class="table-responsive bg-white rounded p-3"><div class="row"><div class="col"><p class="badge bg-oorange">Data Calon Siswa</p><table class="table"><thead></thead><tbody><tr><td>Nama</td><td>${ssrInterpolate($props.student.full_name)}</td></tr><tr><td>Panggilan</td><td>${ssrInterpolate($props.student.nick_name)}</td></tr><tr><td>Asal</td><td>${ssrInterpolate($props.student.school_origin)}</td></tr><tr><td>Jenis Kelamin</td><td>${ssrInterpolate($props.student.gender)}</td></tr><tr><td>Tempat lahir</td><td>${ssrInterpolate($props.student.place_birth)}</td></tr><tr><td>Tgl lahir</td><td>${ssrInterpolate($props.student.date_birth)}</td></tr><tr><td>Kebutuhan</td><td>${ssrInterpolate($props.student.special_needs)}</td></tr><tr><td>Saudara</td><td>${ssrInterpolate($props.student.saudara_kandung_di_sdit)}</td></tr><tr><td>Tinggal bersama</td><td>${ssrInterpolate($props.student.living)}</td></tr><tr><td>Alamat</td><td>${ssrInterpolate($props.student.address)}</td></tr><tr><td>Rt rw</td><td>${ssrInterpolate($props.student.rtrw)}</td></tr><tr><td>Kode pos</td><td>${ssrInterpolate($props.student.postalcode)}</td></tr><tr><td>Desa/Kel</td><td>${ssrInterpolate($props.student.desa)}</td></tr><tr><td>Kecamatan</td><td>${ssrInterpolate($props.student.kecamatan)}</td></tr><tr><td>Kota/Kab</td><td>${ssrInterpolate($props.student.kota)}</td></tr><tr><td>Prov.</td><td>${ssrInterpolate($props.student.provinsi)}</td></tr></tbody></table></div><div class="col"><p class="badge bg-oorange">Data Ayah</p><table class="table"><tbody><tr><td>Ayah</td><td>${ssrInterpolate($props.student.dad)}</td></tr><tr><td>Pendidikan</td><td>${ssrInterpolate($props.student.dad_edu)}</td></tr><tr><td>Penghasilan</td><td>${ssrInterpolate($props.student.dad_income)}</td></tr><tr><td>HP</td><td>${ssrInterpolate($props.student.dad_phone)}</td></tr></tbody></table><p class="badge bg-oorange">Data Ibu</p><table class="table"><tbody><tr><td>Ibu</td><td>${ssrInterpolate($props.student.mom)}</td></tr><tr><td>Pendidikan</td><td>${ssrInterpolate($props.student.mom_edu)}</td></tr><tr><td>Penghasilan</td><td>${ssrInterpolate($props.student.mom_income)}</td></tr><tr><td>Hp</td><td>${ssrInterpolate($props.student.mom_phone)}</td></tr></tbody></table><a class="btn btn-oorange w-100 mt-3"${ssrRenderAttr("href", _ctx.route("user.informasi"))}><i class="bi bi-info-circle me-0 me-md-2"></i><span class="d-none d-md-inline-block">Selanjutnya</span></a></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
