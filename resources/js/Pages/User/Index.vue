<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <div
            v-show="alert"
            class="bg-white text-center alert alert-dismissible mb-3 fs-5"
        >
            {{ $page.props.flash.message }}

            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
        <div
            class="table-responsive bg-white rounded p-3 mb-3 text-uppercase fs-5"
        >
            Status : <b>{{ status }}</b>
        </div>
        <div class="table-responsive bg-white rounded p-3">
            <div class="row">
                <div class="col">
                    <p class="badge bg-oorange">Data Calon Siswa</p>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>{{ student.full_name }}</td>
                            </tr>
                            <tr>
                                <td>Panggilan</td>
                                <td>{{ student.nick_name }}</td>
                            </tr>
                            <tr>
                                <td>Asal</td>
                                <td>{{ student.school_origin }}</td>
                            </tr>
                            <tr>
                                <td>Jenis Kelamin</td>
                                <td>{{ student.gender }}</td>
                            </tr>
                            <tr>
                                <td>Tempat lahir</td>
                                <td>{{ student.place_birth }}</td>
                            </tr>
                            <tr>
                                <td>Tgl lahir</td>
                                <td>{{ student.date_birth }}</td>
                            </tr>
                            <tr>
                                <td>Kebutuhan</td>
                                <td>{{ student.special_needs }}</td>
                            </tr>
                            <tr>
                                <td>Saudara</td>
                                <td>{{ student.saudara_kandung_di_sdit }}</td>
                            </tr>
                            <tr>
                                <td>Tinggal bersama</td>
                                <td>{{ student.living }}</td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>{{ student.address }}</td>
                            </tr>
                            <tr>
                                <td>Rt rw</td>
                                <td>{{ student.rtrw }}</td>
                            </tr>
                            <tr>
                                <td>Kode pos</td>
                                <td>{{ student.postalcode }}</td>
                            </tr>
                            <tr>
                                <td>Desa/Kel</td>
                                <td>{{ student.desa }}</td>
                            </tr>
                            <tr>
                                <td>Kecamatan</td>
                                <td>{{ student.kecamatan }}</td>
                            </tr>
                            <tr>
                                <td>Kota/Kab</td>
                                <td>{{ student.kota }}</td>
                            </tr>
                            <tr>
                                <td>Prov.</td>
                                <td>{{ student.provinsi }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col">
                    <p class="badge bg-oorange">Data Ayah</p>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Ayah</td>
                                <td>{{ student.dad }}</td>
                            </tr>
                            <tr>
                                <td>Pendidikan</td>
                                <td>{{ student.dad_edu }}</td>
                            </tr>
                            <tr>
                                <td>Penghasilan</td>
                                <td>{{ student.dad_income }}</td>
                            </tr>
                            <tr>
                                <td>HP</td>
                                <td>{{ student.dad_phone }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="badge bg-oorange">Data Ibu</p>

                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Ibu</td>
                                <td>{{ student.mom }}</td>
                            </tr>
                            <tr>
                                <td>Pendidikan</td>
                                <td>{{ student.mom_edu }}</td>
                            </tr>
                            <tr>
                                <td>Penghasilan</td>
                                <td>{{ student.mom_income }}</td>
                            </tr>
                            <tr>
                                <td>Hp</td>
                                <td>{{ student.mom_phone }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <a
                        class="btn btn-oorange w-100 mt-3"
                        :href="route('user.informasi')"
                    >
                        <i class="bi bi-info-circle me-0 me-md-2"></i>
                        <span class="d-none d-md-inline-block"
                            >Selanjutnya</span
                        ></a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppLayout from "../../Layouts/App.vue";

export default {
    name: "PendaftarPage",
    layout: AppLayout,
    props: {
        status: String,
        student: Object,
    },

    data() {
        return {
            alert: true,
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
                }, 5000);
            }
        },
    },
    mounted() {
        this.tampil();
    },
};
</script>
