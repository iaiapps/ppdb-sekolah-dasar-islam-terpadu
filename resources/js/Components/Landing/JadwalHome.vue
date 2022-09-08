<template>
    <div id="jadwal" class="container">
        <h3 class="text-center display-4 pt-3 pt-md-5">
            Jadwal Pendaftaran (Timeline)
        </h3>
        <div class="row mb-5 text-center">
            <div class="col-6 col-md-4 py-3">
                <div class="p-3 bg-card">
                    <img class="img-ket pt-2" :src="'storage/img/1.png'" />
                    <h5 class="py-2 fs-3 text-white mb-0">
                        Pendaftaran Calon Peserta Didik
                    </h5>
                    <p class="fs-4 py-2 text-black">
                        1 Nov 2022 s/d 31 Jan 2023
                    </p>
                    <hr class="w-50" />
                </div>
            </div>
            <div class="col-6 col-md-4 py-3">
                <div class="p-3 bg-card">
                    <img class="img-ket" :src="'storage/img/2.png'" />
                    <h5 class="py-2 fs-3 text-white mb-0">
                        Observasi dan
                        <br />Psikotest
                    </h5>
                    <p class="fs-4 py-2 text-black">07-10 Feb 2023</p>
                    <hr class="w-50 text-center" />
                </div>
            </div>
            <div class="col-6 col-md-4 py-3">
                <div class="p-3 bg-card">
                    <img class="img-ket" :src="'storage/img/3.png'" />
                    <h5 class="py-2 fs-3 text-white mb-0">
                        Pengumuman
                        <br />Hasil PPDB
                    </h5>
                    <p class="fs-4 py-2 text-black">04 Mar 2023</p>
                    <hr class="w-50 text-center" />
                </div>
            </div>
            <div class="col-6 col-md-4 py-3">
                <div class="p-3 bg-card">
                    <img class="img-ket" :src="'storage/img/4.png'" />
                    <h5 class="py-2 fs-3 text-white mb-0">
                        Pembayaran Biaya
                        <br />Daftar Ulang
                    </h5>
                    <p class="fs-4 py-2 text-black">04-13 Maret 2023</p>
                    <hr class="w-50 text-center" />
                </div>
            </div>
            <div class="col-6 col-md-4 py-3">
                <div class="p-3 bg-card">
                    <img class="img-ket" :src="'storage/img/5.png'" />
                    <h5 class="py-2 fs-3 text-white mb-0">
                        Test Baca Tulis
                        <br />Al-Qur'an
                    </h5>
                    <p class="fs-4 py-2 text-black">2-3 Juni 2023</p>
                    <hr class="w-50 text-center" />
                </div>
            </div>
            <div class="col-6 col-md-4 py-3">
                <div class="p-3 bg-card">
                    <img class="img-ket" :src="'storage/img/6.png'" />
                    <h5 class="py-2 fs-3 text-white mb-0">
                        Pembagian seragam, buku, & kelas
                    </h5>
                    <p class="fs-4 py-2 text-black">4-7 Juli 2023</p>
                    <hr class="w-50 text-center" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-card {
    height: 100%;
    border-radius: 10px;
    background-color: #f79500;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img-ket {
    width: 80px;
}

hr {
    border: 2px solid white;
    opacity: 1 !important;
}
</style>
