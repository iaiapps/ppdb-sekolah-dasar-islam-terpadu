<template>
    <div class="container-fluid">
        <div class="row vh-100">
            <div class="col-12 col-md-6 p-5 bg-grey rounded">
                <div class="p-0 p-md-3 text-center text-md-start">
                    <img
                        class="logo rounded-circle bg-oorange p-1 mb-3"
                        :src="'/storage/img/logosdit.png'"
                        alt="logosdit"
                    />
                    <p class="fs-5 mb-0">Selamat datang</p>
                    <p class="fs-3 mb-0">Silahkan Login ...</p>
                    <!-- <h1>ADMIN PPDB</h1> -->
                    <form class="mt-3" @submit.prevent="storeLogin">
                        <input
                            v-model="form.email"
                            class="form-control form-control-lg mb-3 text-center"
                            type="text"
                            name="No WA"
                            placeholder="No WhatsApp"
                        />
                        <div v-if="errors.email" class="alert alert-danger">
                            {{ errors.email }}
                        </div>

                        <input
                            v-model="form.password"
                            class="form-control form-control-lg mb-3 text-center"
                            type="password"
                            name="Password"
                            placeholder="Password"
                        />
                        <div v-if="errors.password" class="alert alert-danger">
                            {{ errors.password }}
                        </div>

                        <button
                            type="submit"
                            class="btn btn-lg btn-warning w-100 mb-3"
                        >
                            Login
                        </button>
                        <div class="text-center text-muted">atau</div>
                        <br />
                        <Link
                            as="button"
                            href="/buat-akun"
                            class="btn btn-lg btn-outline-dark w-100 text-muted"
                            >Buat akun</Link
                        >
                    </form>
                    <br />
                </div>
            </div>
            <div class="col-6 p-5 bg-oorange d-none d-md-block text-center">
                <img
                    class="img-fluid pt-3"
                    :src="'/storage/img/gbr.png'"
                    alt="gbr"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";
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
            email: "",
            password: "",
        });

        const storeLogin = () => {
            Inertia.post("/login", {
                email: form.email,
                password: form.password,
            });
        };

        return {
            form,
            storeLogin,
        };
    },
};
</script>

<style scoped>
.logo {
    width: 85px;
}
</style>
