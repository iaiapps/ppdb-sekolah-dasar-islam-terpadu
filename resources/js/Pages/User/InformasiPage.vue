<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <div class="bg-white rounded p-3 mb-3">
            <p class="fs-4 m-0">Informasi Biaya Daftar Ulang</p>
        </div>
        <div class="bg-white rounded p-3">
            <img class="img-fluid" :src="'/storage/img/rincian.svg'" alt="rincian" />
            <h5>CATATAN :</h5>
            <p>Silahkan donwload surat pernyataan berikut ini. Dibawa dan dikumpulkan ketika ananda mengikuti Psikotest
            </p>
            <a class="btn btn-oorange mb-4" :href="'/storage/img/surat.pdf'" download> download disini </a>
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
};
</script>
