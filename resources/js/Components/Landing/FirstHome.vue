<template>
    <div id="beranda" class="back">
        <div class="container pb-5">
            <div class="row">
                <div class="col-12 col-md-6 pt-md-4 center">
                    <div class="pt-3 pt-md-5">
                        <h2
                            class="display-5 bg-dark py-2 px-3 text-white d-inline-block"
                        >
                            PENDAFTARAN SDIT
                        </h2>
                        <h2
                            class="display-5 bg-dark py-2 px-3 text-white d-inline-block"
                        >
                            HARAPAN UMAT
                        </h2>
                    </div>
                    <div class="pt-3">
                        <p class="fs-3 m-0">
                            Telah dibuka untuk tahun 2023/2024
                        </p>
                        <p class="fs-3">Segera daftar, kuota terbatas!</p>
                    </div>
                    <div class="pt-3 d-grid gap-2 d-md-block">
                        <Link
                            class="btn btn-dark btn-lg me-0 me-md-3"
                            as="button"
                            href="/buat-akun"
                        >
                            DAFTAR SEKARANG
                        </Link>
                        <a
                            href="https://wa.me/6288289378109"
                            target="_blank"
                            class="btn btn-outline-dark btn-lg"
                        >
                            WA ADMIN
                        </a>
                    </div>
                </div>
                <div
                    class="col-12 col-md-6 pt-4 order-first order-md-last d-flex justify-content-center"
                >
                    <img class="gbr" :src="'/storage/img/gbr.png'" alt="gbr" />
                </div>
            </div>
        </div>
    </div>
    <div class="text-center bg-dark p-4 p-md-5 text-white top">
        <h3 class="display-5">Sudah punya akun PPDB?</h3>
        <p class="display-6 py-3">Login web disini</p>
        <Link
            class="btn btn-oorange w-50 btn-lg text-white"
            as="button"
            :href="route('login')"
            >LOGIN</Link
        >
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    name: "FrstHome",
    components: {
        Link,
    },
};
</script>

<style scoped>
.back {
    background-color: #f9f9f9;
    background-image: url("/storage/img/backland.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100%;
}

.gbr {
    height: 450px;
}

@media only screen and (max-width: 768px) {
    .center {
        text-align: center;
    }

    .gbr {
        height: 280px;
        width: 280px;
    }

    .back {
        background-color: #f79500;
        background-image: none;
    }
}
</style>
