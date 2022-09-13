<template>
    <AppLayout>
        <div class="col-md px-0 px-md-3 mt-3 mt-md-0">
            <div class="table-responsive bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Set Cost Category</p>
            </div>
            <div class="table-responsive bg-white rounded p-3">
                <BackButton />
                <form @submit.prevent="storeCost">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Kategori</span>
                        <input
                            type="text"
                            class="form-control"
                            v-model="form.name"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Jenis kelamin</span>
                        <input
                            type="text"
                            class="form-control"
                            v-model="form.gender"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">gedung</span>
                        <input
                            for="gedung"
                            type="number"
                            class="form-control"
                            v-model="form.gedung"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">perpustakaan</span>
                        <input
                            for="perpustakaan"
                            type="number"
                            class="form-control"
                            v-model="form.perpustakaan"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">kegiatan</span>
                        <input
                            for="kegiatan"
                            type="number"
                            class="form-control"
                            v-model="form.kegiatan"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">bukumedia</span>
                        <input
                            for="bukumedia"
                            type="number"
                            class="form-control"
                            v-model="form.bukumedia"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">seragam</span>
                        <input
                            for="seragam"
                            type="number"
                            class="form-control"
                            v-model="form.seragam"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">jilbab</span>
                        <input
                            for="jilbab"
                            type="number"
                            class="form-control"
                            v-model="form.jilbab"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">ipp</span>
                        <input
                            for="ipp"
                            type="number"
                            class="form-control"
                            v-model="form.ipp"
                        />
                    </div>

                    <button type="submit" class="btn btn-oorange btn-sm">
                        Simpan
                    </button>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import BackButton from "../../../Components/dashboard/BackButton";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import AppLayout from "../../../Layouts/App.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { reactive } from "vue";
export default {
    components: {
        BackButton,
        AppLayout,
        Link,
    },
    props: {
        cost: Object,
    },
    setup() {
        const form = {
            name: "",
            gender: "",
            gedung: "",
            perpustakaan: "",
            kegiatan: "",
            bukumedia: "",
            seragam: "",
            jilbab: "",
            ipp: "",
        };

        const storeCost = () => {
            Inertia.post(route("admin.cost.store"), form);
        };
        return {
            form,
            storeCost,
        };
    },
};
</script>
