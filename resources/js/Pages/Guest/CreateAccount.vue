<template>
    <div class="container-fluid">
        <div class="row vh-100">
            <div class="col-12 col-md-5 p-3 pattern">
                <div class="text-white p-3">
                    <div class="text-center mb-3">
                        <img
                            class="logo rounded bg-white p-2 mt-0 mt-md-3 mb-3"
                            :src="'/storage/img/registration.png'"
                            alt="logosdit"
                        />
                        <h3>Informasi Pendaftaran</h3>
                        <hr />
                    </div>
                    <ol class="fs-5">
                        <li>
                            Buat akun PPDB untuk mendaftar di website PPDB SDIT
                            Harum
                        </li>
                        <li>Akun yang sudah dibuat berstatus "Tidak Aktif".</li>
                        <li>
                            Akun akan "Aktif" jika sudah membayar biaya
                            pendaftaran dan dikonfirmasi oleh admin PPDB.
                        </li>
                        <li>Mengisi formulir pendaftaran yang disediakan</li>
                    </ol>
                    <hr class="hr" />
                </div>
            </div>
            <div class="col-12 col-md-7 p-5">
                <div class="text-center">
                    <div class="px-0 px-md-5 mb-4">
                        <img
                            class="logo rounded-circle bg-oorange p-1 mb-3"
                            :src="'/storage/img/logosdit.png'"
                            alt="logosdit"
                        />
                        <h3>Buat Akun PPDB</h3>
                        <hr />
                    </div>
                    <form @submit.prevent="buatAkun" class="px-0 px-md-5">
                        <div class="mb-3">
                            <input
                                type="text"
                                v-model="form.name"
                                class="form-control form-control-lg mb-3"
                                placeholder="Nama lengkap calon siswa "
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <input
                                type="text"
                                v-model="form.hp"
                                class="form-control form-control-lg mb-3"
                                :class="{ 'is-invalid': errors.hp }"
                                placeholder="No WhatssApp (Aktif)"
                            />
                            <div class="invalid-feedback">
                                {{ errors.hp }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <input
                                type="password"
                                v-model="form.password"
                                class="form-control form-control-lg mb-3"
                                placeholder="Password"
                            />
                            <input
                                type="password"
                                v-model="form.confirm_password"
                                @keyup="cek"
                                class="form-control form-control-lg"
                                :class="{
                                    'is-invalid': form.cekPass === false,
                                }"
                                placeholder="Ulangi Password"
                            />
                            <div class="invalid-feedback">
                                password tidak sama
                            </div>
                        </div>
                        <input
                            type="submit"
                            class="btn btn-oorange btn-lg mt-3 w-100 mb-3"
                            value="Buat Akun"
                        />
                        <div class="text-center text-muted">atau</div>
                        <br />
                        <Link
                            as="button"
                            href="/auth"
                            class="btn btn-lg btn-outline-dark w-100 text-muted"
                            >Login</Link
                        >
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
import { reactive } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
export default {
    components: {
        Link,
    },
    props: {
        errors: Object,
    },
    setup() {
        const form = reactive({
            name: "",
            hp: "",
            password: "",
            confirm_password: "",
            cekPass: "",
        });
        const buatAkun = () => {
            Inertia.post(
                route("guest.buat-akun", {
                    name: form.name,
                    hp: form.hp,
                    password: form.password,
                })
            );
        };

        const cek = () => {
            if (form.password === form.confirm_password) {
                form.cekPass = true;
            } else {
                form.cekPass = false;
            }
            // jika false, maka tampilkan alert password tidak sama di bawahnya inputan password_confirm
        };
        return {
            form,
            buatAkun,
            cek,
        };
    },
};
</script>

<style scoped>
.logo {
    width: 80px;
}

.pattern {
    background-color: #f79500;
    background-image: url(/storage/img/pattern.svg);
}

hr {
    opacity: 1;
    border: 1px solid white;
}

.hr {
    margin-top: 30px;
    border: 1px solid white;
    opacity: 1;
}

@media (max-width: 700px) {
    .fs-5 {
        font-size: 1rem !important;
    }
}
</style>
