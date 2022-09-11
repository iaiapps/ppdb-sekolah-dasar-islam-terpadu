<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <div class="bg-white rounded p-3 mb-3">
            <p class="fs-4 m-0">Home</p>
        </div>
        <div class="bg-white rounded p-3 vh-100 position-relative text-center">
            <div class="bg-oorange back">
                <img
                    class="logo"
                    :src="'/storage/img/administrator.png'"
                    alt="user"
                />
            </div>
            <p class="fs-4 m-0 text-center">
                Selamat datang Admin di Dashboard website PPDB SDIT Harapan Umat
                Jember
            </p>
            <a class="btn btn-oorange w-50 mt-4" href="/admin/users">
                Informasi pendaftar</a
            >
        </div>
    </div>
</template>

<script>
import AppLayout from "../../Layouts/App.vue";
export default {
    layout: AppLayout,
};
</script>

<style scoped>
.back {
    height: 100px;
    margin-bottom: 70px;
}

.logo {
    width: 120px;
    border-radius: 50%;
    border: 6px solid white;
    position: absolute;
    background-color: white;
    top: 50px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
}
</style>
