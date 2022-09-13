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
                        12 Sept 2022 s/d 14 Jan 2023
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
                    <p class="fs-4 py-2 text-black">11 Februari 2023</p>
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
                    <p class="fs-4 py-2 text-black">13 Maret 2023</p>
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
                    <p class="fs-4 py-2 text-black">13 Mar - 27 Mar 2023</p>
                    <hr class="w-50 text-center" />
                </div>
            </div>
            <div class="col-6 col-md-4 py-3">
                <div class="p-3 bg-card">
                    <img class="img-ket" :src="'storage/img/5.png'" />
                    <h5 class="py-2 fs-3 text-white mb-0">
                        Test BTAQ &
                        <br />Fitting seragam
                    </h5>
                    <p class="fs-4 py-2 text-black">11-12 Mei 2023</p>
                    <hr class="w-50 text-center" />
                </div>
            </div>
            <div class="col-6 col-md-4 py-3">
                <div class="p-3 bg-card">
                    <img class="img-ket" :src="'storage/img/6.png'" />
                    <h5 class="py-2 fs-3 text-white mb-0">
                        Pembagian seragam & kelas
                    </h5>
                    <p class="fs-4 py-2 text-black">7 Juli 2023</p>
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
