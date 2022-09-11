<template>
    <AppLayout>
        <div class="col-md px-0 px-md-3 mt-3 mt-md-0">
            <div class="bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Set Cost Category</p>
            </div>
            <div class="bg-white rounded p-3">
                <form @submit.prevent="editCost">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Kategori</span>
                        <input
                            type="text"
                            class="form-control"
                            :value="cost.name"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Jenis kelamin</span>
                        <input
                            type="text"
                            class="form-control"
                            :value="cost.gender"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">gedung</span>
                        <input
                            for="gedung"
                            type="text"
                            class="form-control"
                            :value="cost.gedung"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">perpustakaan</span>
                        <input
                            for="perpustakaan"
                            type="text"
                            class="form-control"
                            :value="cost.perpustakaan"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">kegiatan</span>
                        <input
                            for="kegiatan"
                            type="text"
                            class="form-control"
                            :value="cost.kegiatan"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">bukumedia</span>
                        <input
                            for="bukumedia"
                            type="text"
                            class="form-control"
                            :value="cost.bukumedia"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">seragam</span>
                        <input
                            for="seragam"
                            type="text"
                            class="form-control"
                            :value="cost.seragam"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">jilbab</span>
                        <input
                            for="jilbab"
                            type="text"
                            class="form-control"
                            :value="cost.jilbab"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">ipp</span>
                        <input
                            for="ipp"
                            type="text"
                            class="form-control"
                            :value="cost.ipp"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Update"
                        class="btn btn-oorange"
                    />
                </form>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import AppLayout from "../../../Layouts/App.vue";
export default {
    components: {
        AppLayout,
        Link,
    },
    props: {
        cost: Object,
    },
};
</script>
