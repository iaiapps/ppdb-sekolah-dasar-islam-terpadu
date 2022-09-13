<template>
    <AppLayout>
        <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
            <div class="bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Students</p>
            </div>
            <div class="bg-white rounded p-3">
                <BackButton />
                <div class="input-group mb-1">
                    <span class="input-group-text">Nama</span>
                    <input
                        class="form-control"
                        v-model="form.full_name"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Panggilan</span>
                    <input
                        class="form-control"
                        v-model="form.nick_name"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Asal TK</span>
                    <input
                        class="form-control"
                        v-model="form.school_origin"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Jenis kelamin</span>
                    <input
                        class="form-control"
                        v-model="form.gender"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Tempat lahir</span>
                    <input
                        class="form-control"
                        v-model="form.place_birth"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Tanggal lahir</span>
                    <input
                        class="form-control"
                        v-model="form.date_birth"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Kebutuhan khusus</span>
                    <input
                        class="form-control"
                        v-model="form.special_needs"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Saudara di SDIT Harum</span>
                    <input
                        class="form-control"
                        v-model="form.saudara_kandung_di_sdit"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Tinggal bersama</span>
                    <input
                        class="form-control"
                        v-model="form.living"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Alamat</span>
                    <input
                        class="form-control"
                        v-model="form.address"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">rt rw</span>
                    <input class="form-control" v-model="form.rtrw" readonly />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Kode pos</span>
                    <input
                        class="form-control"
                        v-model="form.postalcode"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Desa</span>
                    <input class="form-control" v-model="form.desa" readonly />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Kecamatan</span>
                    <input
                        class="form-control"
                        v-model="form.kecamatan"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Kota</span>
                    <input class="form-control" v-model="form.kota" readonly />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Provinsi</span>
                    <input
                        class="form-control"
                        v-model="form.provinsi"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Ayah</span>
                    <input class="form-control" v-model="form.dad" readonly />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Pendidikan Ayah</span>
                    <input
                        class="form-control"
                        v-model="form.dad_edu"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Pekerjaan Ayah</span>
                    <input
                        class="form-control"
                        v-model="form.dad_occupation"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Penghasilan Ayah</span>
                    <input
                        class="form-control"
                        v-model="form.dad_income"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Hp Ayah</span>
                    <input
                        class="form-control"
                        v-model="form.dad_phone"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Ibu</span>
                    <input class="form-control" v-model="form.mom" readonly />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Pendidikan Ibu</span>
                    <input
                        class="form-control"
                        v-model="form.mom_edu"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Pekerjaan Ibu</span>
                    <input
                        class="form-control"
                        v-model="form.mom_occupation"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Penghasilan Ibu</span>
                    <input
                        class="form-control"
                        v-model="form.mom_income"
                        readonly
                    />
                </div>
                <div class="input-group mb-1">
                    <span class="input-group-text">Hp Ibu</span>
                    <input
                        class="form-control"
                        v-model="form.mom_phone"
                        readonly
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import BackButton from "../../../Components/dashboard/BackButton";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import AppLayout from "../../../Layouts/App.vue";

export default {
    components: {
        BackButton,
        Link,
        AppLayout,
    },
    props: {
        student: Object,
    },
    setup(props) {
        const form = useForm(props.student);
        return {
            form,
        };
    },
};
</script>
