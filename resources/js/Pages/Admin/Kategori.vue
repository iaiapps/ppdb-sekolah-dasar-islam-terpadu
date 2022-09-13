<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <div class="table-responsive bg-white rounded p-3 mb-3">
            <p class="fs-4 m-0">Kategori Biaya Daftar Ulang</p>
        </div>
        <div
            class="table-responsive bg-white rounded p-3 vh-100 position-relative text-center"
        >
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">No. WhatssApp</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Kategori Biaya</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="(item, index) in users.data" :key="item.id"> -->
                    <tr>
                        <!-- <td scope="row">{{ index + 1 }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.name }}</td> -->
                        <td>adasd</td>
                        <td>adasd</td>
                        <td>adasd</td>
                        <td>Terima|Tolak</td>
                        <td>
                            <!-- <Link as="button" class="btn btn-sm btn-secondary" :href="
                                route('admin.user-aktifkan', item.id)
                            ">
                            Aktifkan
                            </Link> -->

                            <button class="btn btn-oorange btn-sm">
                                Simpan
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
