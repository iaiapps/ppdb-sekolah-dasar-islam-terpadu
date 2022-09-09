<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <div class="bg-white rounded p-3 mb-3 text-capitalize">
            Status : {{ status }}
        </div>
        <!-- <div class="bg-white rounded p-3 mb-3">
            <p class="fs-4 m-0">Data Pendaftar</p>
        </div> -->
        <div class="bg-white rounded p-3">
            <div class="row">
                <div class="col">
                    <p>Data Diri</p>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>{{ student.full_name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col">
                    <p>Data Ayah</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Form</th>
                                <th scope="col">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Nama Ayah</td>
                                <td>xyxyxyxyxyxyxy</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Pekerjaan</td>
                                <td>xyxyxyxyxyxyxy</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Alamat</td>
                                <td>xyxyxyxyxyxyxy</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Data Ibu</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Form</th>
                                <th scope="col">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Nama Ibu</td>
                                <td>xyxyxyxyxyxyxy</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Pekerjaan</td>
                                <td>xyxyxyxyxyxyxy</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Alamat</td>
                                <td>xyxyxyxyxyxyxy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
<style>
.btn-oorange {
    background-color: #f79500;
}
</style>
