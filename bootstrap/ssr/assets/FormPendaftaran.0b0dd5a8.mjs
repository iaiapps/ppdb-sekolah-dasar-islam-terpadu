import { Inertia } from "@inertiajs/inertia";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const FormPendaftaran_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "FormPage",
  props: {
    gelombang: Object,
    user: Object
  },
  setup() {
    const form = {
      full_name: "",
      nick_name: "",
      school_origin: "",
      gender: "",
      place_birth: "",
      date_birth: "",
      special_needs: "",
      saudara_kandung_di_sdit: "",
      living: "",
      address: "",
      rtrw: "",
      postalcode: "",
      desa: "",
      kecamatan: "",
      kota: "",
      provinsi: "",
      dad: "",
      dad_edu: "",
      dad_occupation: "",
      dad_income: "",
      dad_phone: "",
      mom: "",
      mom_edu: "",
      mom_occupation: "",
      mom_income: "",
      mom_phone: ""
    };
    const kirimFormulir = () => {
      Inertia.post(route("guest.store-formulir"), form);
    };
    return {
      form,
      kirimFormulir
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))}><div class="row"><div class="col-12 col-md-4 bg-oorange p-3 p-md-5"><div class="text-left"><img${ssrRenderAttr("src", "/storage/img/gbr.png")} class="img" alt="logoppdb"></div><p class="fs-2 my-4 text-white"> Formulir Pendaftaran Siswa Baru SDIT Harapan Umat Jember </p><hr class="hr"><span class="text-light">${ssrInterpolate($props.gelombang[1])} - Gelombang ${ssrInterpolate($props.gelombang[0])}</span></div><div class="col-12 col-md-8 p-3 p-md-5"><form><fieldset><div class="form-card"><p class="fs-4">Identitas Calon Siswa</p><div class="row"><div class="col-12 col-md-6"><div class="mb-3"><label class="form-label" for="full_name">Nama Lengkap </label><input class="form-control" id="full_name" name="full_name"${ssrRenderAttr("value", $setup.form.full_name)} type="text" required></div></div><div class="col-12 col-md-6"><div class="mb-3"><label class="form-label" for="nick_name">Nama Panggilan</label><input class="form-control" id="nick_name" name="nick_name"${ssrRenderAttr("value", $setup.form.nick_name)} type="text" required></div></div></div><div class="mb-3"><label class="form-label" for="school_origin">Asal TK</label><input class="form-control" id="school_origin" name="school_origin"${ssrRenderAttr("value", $setup.form.school_origin)} type="text" required></div><div class="mb-3"><label class="form-label" for="gender">Jenis Kelamin</label><select class="form-select" id="gender" name="gender"><option selected disabled>Pilih</option><option value="laki-laki">Laki-Laki</option><option value="perempuan">Perempuan</option></select></div><div class="row"><div class="col-12 col-md-6"><div class="mb-3"><label class="form-label" for="place_birth">Tempat Lahir</label><input class="form-control" id="place_birth" name="place_birth"${ssrRenderAttr("value", $setup.form.place_birth)} type="text" required></div></div><div class="col-12 col-md-6"><div class="mb-3"><label class="form-label" for="date_birth">Tanggal Lahir</label><input class="form-control" name="date_birth"${ssrRenderAttr("value", $setup.form.date_birth)} type="date" id="date_birth" placeholder="Bulan/Hari/Tahun"></div></div></div><div class="mb-3"><label class="form-label" for="special_needs">Berkebutuhan Khusus</label><select class="form-select" id="special_needs" name="special_needs"><option>Tidak</option><option>Netra</option><option>Rungu</option><option>Grahita ringan</option><option>Grahita sedang</option><option>Daksa ringan</option><option>Daksa sedang</option><option>Laras</option><option>Wicara</option><option>Tuna Ganda</option><option>Hiperaktif</option><option>Cerdas Istimewa</option><option>Bakat Istimewa</option><option>Kesulitan Belajar</option><option>Indigo</option><option>Down Syndrome</option><option>Autis</option></select></div><div class="mb-3"><label class="form-label" for="saudara_kandung_di_sdit"> Jumlah saudara kandung yang sekolah di SDIT Harapan Umat Jember </label><select class="form-select" id="saudara_kandung_di_sdit" name="saudara_kandung_di_sdit"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>lebih dari 4</option></select></div><hr><div class="mb-3"><label class="form-label" for="living">Tempat Tinggal</label><select class="form-select" id="living" name="living"><option>Bersama orangtua</option><option>Kakek-Nenek</option><option>Wali</option><option>Kos</option><option>Asrama</option><option>Panti Asuhan</option><option>Lainnya</option></select></div><div class="row"><div class="col-md-12 mb-3"><label for="address" class="form-label">Alamat</label><input type="text" class="form-control" id="address" name="address"${ssrRenderAttr("value", $setup.form.address)} required></div><div class="col-md-6 mb-3"><label for="rt" class="form-label">RT/RW</label><input type="text" class="form-control" id="rt" name="rtrw"${ssrRenderAttr("value", $setup.form.rtrw)} required></div><div class="col-md-6 mb-3"><label for="postalcode" class="form-label">Kode Pos</label><input type="number" class="form-control" id="postalcode" name="postalcode"${ssrRenderAttr("value", $setup.form.postalcode)}></div><div class="col-md-6 mb-3"><label for="desa" class="form-label">Desa</label><input type="text" required class="form-control" id="desa" name="desa"${ssrRenderAttr("value", $setup.form.desa)}></div><div class="col-md-6 mb-3"><label for="kecamatan" class="form-label">Kecamatan</label><input type="text" required class="form-control" id="kecamatan" name="kecamatan"${ssrRenderAttr("value", $setup.form.kecamatan)}></div><div class="col-md-6 mb-3"><label for="kota" class="form-label">Kabupaten/Kota</label><input type="text" required class="form-control" id="kota" name="kota"${ssrRenderAttr("value", $setup.form.kota)}></div><div class="col-md-6 mb-3"><label for="provinsi" class="form-label">Provinsi</label><input type="text" required class="form-control" id="provinsi" name="provinsi"${ssrRenderAttr("value", $setup.form.provinsi)}></div></div></div></fieldset><hr><div class="row"><div class="col-12 col-md-6"><p class="fs-4">Identitas Ayah</p><div class="mb-3"><label class="form-label" for="dad">Nama Ayah</label><input class="form-control" id="dad" name="dad"${ssrRenderAttr("value", $setup.form.dad)} type="text" required></div><div class="mb-3"><label class="form-label" for="dad_edu">Pendidikan Ayah</label><select class="form-select" id="dad_edu" name="dad_edu"><option>SD/Sederajat</option><option>SMP/Sederajat</option><option>SMA/Sederajat</option><option>D1</option><option>D2</option><option>D3</option><option>D4/S1</option><option>S2</option><option>S3</option><option>Tidak Sekolah</option></select></div><div class="mb-3"><label class="form-label" for="dad_occupation">Pekerjaan Ayah</label><select class="form-select" id="dad_occupation" name="dad_occupation"><option>Dosen</option><option>Pegawai Bank</option><option>Dokter</option><option> Perawat/Tenaga kesehatan lain </option><option>Pegawai Departemen Keuangan</option><option>TNI</option><option>Polri</option><option>PNS</option><option>Tidak Bekerja</option><option>Nelayan</option><option>Petani</option><option>Peternak</option><option>Karyawan Swasta</option><option>Pedagang Kecil</option><option>Pedagang Besar</option><option>Wiraswasta</option><option>Wirausaha</option><option>Buruh</option><option>Pensiunan</option><option>Tenaga Kerja Indonesia</option><option>Tidak dapat diterapkan</option><option>Sudah Meninggal</option><option>Lainnya</option></select></div><div class="mb-3"><label class="form-label" for="dad_income"> Penghasilan (gaji pokok dan pendapatan lain) </label><select class="form-select" id="dad_income" name="dad_income"><option>kurang dari Rp. 1.000.000</option><option> Rp. 1.000.000 - Rp. 2.000.000 </option><option> Rp. 2.000.000 - Rp. 3.000.000 </option><option> Rp. 3.000.000 - Rp. 4.000.000 </option><option> Rp. 4.000.000 - Rp. 5.000.000 </option><option> Rp. 5.000.000 - Rp. 7,5.000.000 </option><option> Rp. 7,5.000.000 - Rp. 10.000.000 </option><option> Rp. 10.000.000 - Rp. 20.000.000 </option><option>Lebih dari Rp. 20.000.000</option><option>Tidak berpenghasilan</option></select></div><div class="mb-3"><label class="form-label" for="dad_phone">Nomor Telpon Ayah</label><input class="form-control" id="dad_phone" name="dad_phone"${ssrRenderAttr("value", $setup.form.dad_phone)} type="number"></div></div><div class="col-12 col-md-6"><p class="fs-4">Identitas Ibu</p><div class="mb-3"><label class="form-label" for="mom">Nama Ibu</label><input class="form-control" id="mom" name="mom"${ssrRenderAttr("value", $setup.form.mom)} type="text" required></div><div class="mb-3"><label class="form-label" for="mom_edu">Pendidikan Ibu</label><select class="form-select" id="mom_edu" name="mom_edu"><option>SD/Sederajat</option><option>SMP/Sederajat</option><option>SMA/Sederajat</option><option>D1</option><option>D2</option><option>D3</option><option>D4/S1</option><option>S2</option><option>S3</option><option>Tidak Sekolah</option></select></div><div class="mb-3"><label class="form-label" for="mom_occupation">Pekerjaan Ibu</label><select class="form-select" id="mom_occupation" name="mom_occupation"><option>Dosen</option><option>Pegawai Bank</option><option>Dokter</option><option> Perawat/Tenaga kesehatan lain </option><option>Pegawai Departemen Keuangan</option><option>TNI</option><option>Polri</option><option>PNS</option><option>Tidak Bekerja</option><option>Nelayan</option><option>Petani</option><option>Peternak</option><option>Karyawan Swasta</option><option>Pedagang Kecil</option><option>Pedagang Besar</option><option>Wiraswasta</option><option>Wirausaha</option><option>Buruh</option><option>Pensiunan</option><option>Tenaga Kerja Indonesia</option><option>Tidak dapat diterapkan</option><option>Sudah Meninggal</option><option>Lainnya</option></select></div><div class="mb-3"><label class="form-label" for="mom_income"> Penghasilan (gaji pokok dan pendapatan lain) </label><select class="form-select" id="mom_income" name="mom_income"><option>kurang dari Rp. 1.000.000</option><option> Rp. 1.000.000 - Rp. 2.000.000 </option><option> Rp. 2.000.000 - Rp. 3.000.000 </option><option> Rp. 3.000.000 - Rp. 4.000.000 </option><option> Rp. 4.000.000 - Rp. 5.000.000 </option><option> Rp. 5.000.000 - Rp. 7,5.000.000 </option><option> Rp. 7,5.000.000 - Rp. 10.000.000 </option><option> Rp. 10.000.000 - Rp. 20.000.000 </option><option>Lebih dari Rp. 20.000.000</option><option>Tidak berpenghasilan</option></select></div><div class="mb-3"><label class="form-label" for="mom_phone">Nomor Telpon Ibu</label><input class="form-control" id="mom_phone" name="mom_phone"${ssrRenderAttr("value", $setup.form.mom_phone)} type="number"></div></div></div><button type="submit" class="btn btn-warning btn-lg w-100 mt-3"> Simpan Data </button></form></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/FormPendaftaran.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormPendaftaran = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormPendaftaran as default
};
