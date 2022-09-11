<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <div class="bg-white rounded p-3 mb-3">
            <p class="fs-4 m-0">Atur Biaya Daftar Ulang</p>
        </div>
        <div class="bg-white rounded p-3 vh-100">
            <button class="btn btn-oorange ">tambah kategori</button>
            <hr>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Kategori</th>
                        <!-- <th scope="col">JK</th>
                        <th scope="col">Gedung</th>
                        <th scope="col">Perpustakaan</th>
                        <th scope="col">Kegiatan</th>
                        <th scope="col">Buku&Media</th>
                        <th scope="col">Seragam</th>
                        <th scope="col">Jilbab</th>
                        <th scope="col">IPP</th>-->
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>adasd</td>
                        <td>adasd</td>
                        <td>
                            <button class="btn btn-oorange btn-sm">Edit</button>
                            <button class="btn btn-oorange btn-sm">Detail</button>
                            <button class="btn btn-oorange btn-sm">Hapus</button>
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