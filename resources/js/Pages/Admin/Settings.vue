<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <div class="bg-white rounded p-3 mb-3">
            <p class="fs-4 m-0">Settings Website</p>
        </div>
        <div class="bg-white rounded p-3 vh-100 position-relative">
            <div class="mb-5">
                <p class="fs-5">Setting Timeline</p>
                <hr>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Keterangan</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>adasd</td>
                            <td>adasd</td>
                            <td>adasd</td>
                            <td>
                                <button class="btn btn-secondary btn-sm">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mb-5">
                <p class="fs-5">Setting Gelombang</p>
                <hr>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Keterangan</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>adasd</td>
                            <td>adasd</td>
                            <td>adasd</td>
                            <td>
                                <button class="btn btn-secondary btn-sm">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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