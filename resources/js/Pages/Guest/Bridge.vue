<template>
    <div class="bg-oorange">
        <div class="container">
            <div class="d-flex flex-column pt-4 pt-md-0 justify-content-md-center vh-100">
                <!-- SAAT PENDAFTRAN DIBUKA, NAMUN BELUM BAYAR -->
                <div class="bg-white p-3 p-md-5  rounded shadow" v-if="title == 'online'">
                    <div class="text-center">
                        <img class="logo rounded p-1 mb-2 text-center" :src="'/storage/img/user.png'" alt="user" />
                        <p class="fs-3">
                            Assalamualaikum, <strong>{{ user.name }} </strong>
                            <br />
                        </p>
                        <hr />
                    </div>
                    <ul class="list-group fs-5 mb-3">
                        <li class="list-group-item">
                            Sebelum melanjutkan pendaftaran, lakukan pembayaran
                            terlebih dahulu untuk mengaktifkan Akun.
                        </li>
                        <li class="list-group-item">
                            Biaya pendaftaran sebesar:
                            <span class="badge bg-oorange fs-6">Rp 300.000</span>, pembayaran melalui
                            rekening sekolah BSI <span class="badge bg-oorange">4441234007</span><br />
                            A/N
                            <i>
                                Sekolah Dasar Islam Terpadu Harapan Umat
                                Jember</i>
                        </li>
                        <li class="list-group-item">
                            Konfirmasi bukti pembayaran kirim ke <a href="https://wa.me/6288289378109/" target="_blank"
                                class="btn btn-oorange"> No. WA Admin (Klik
                                disini)</a>
                        </li>
                    </ul>
                    <div class="btn-group w-100 mt-2">
                        <button class="btn btn-oorange" v-on:click="refresh"> Refresh Page</button>
                        <Link as="button" class="btn btn-secondary " href="/logout" method="POST">Logout
                        </Link>
                    </div>
                </div>
                <!-- PENDAFTARAN MASIH BELUM DIBUKA -->
                <div v-if="title == 'offline'" class="bg-white p-3 p-md-5 rounded shadow">
                    <div class="text-center">
                        <img class="logo rounded p-1 mb-2 text-center" :src="'/storage/img/user.png'" alt="user" />
                        <p class="fs-3">
                            Assalamualaikum, <strong>{{ user.name }} </strong>
                            <br />
                        </p>
                        <hr />
                    </div>
                    <div class=" text-center">

                        <ul class="list-group fs-5 mb-3 ">
                            <li class="list-group-item ">
                                Mohon kesediaannya menunggu, karena pendaftaran saat
                                ini masih belum dibuka
                                <br />
                                Namun tidak perlu khwatir, saat pendaftaran dibuka.
                                kami akan menginformasikannya untuk anda
                            </li>
                            <li class="list-group-item">
                                Informasi lebih lanjut wa No Admin berikut <a href="https://wa.me/6288289378109/"
                                    target="_blank" class="btn btn-oorange btn-sm">WA Admin (klik disini)</a>
                            </li>
                        </ul>

                        <Link as="button" class="btn btn-secondary text-white w-50 mt-2" href="/logout" method="POST">
                        Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    props: {
        title: String,
        user: Object,
    },
    components: {
        Link,
    },
    setup(){
        const refresh = ()=>{
            window.location.reload();
        }

        return{
            refresh
        }
    }
};
</script>

<style scoped>
.logo {
    width: 70px;
}
</style>
