<template>
    <AppLayout>
        <div class="col-md px-0 px-md-3 mt-3 mt-md-0">
            <div class="bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Set Cost Category</p>
            </div>
            <div class="bg-white rounded p-3">
                <form
                    @submit.prevent="
                        form.put(route('admin.cost.update', form.id))
                    "
                >
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
                            type="text"
                            class="form-control"
                            v-model="form.gedung"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">perpustakaan</span>
                        <input
                            for="perpustakaan"
                            type="text"
                            class="form-control"
                            v-model="form.perpustakaan"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">kegiatan</span>
                        <input
                            for="kegiatan"
                            type="text"
                            class="form-control"
                            v-model="form.kegiatan"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">bukumedia</span>
                        <input
                            for="bukumedia"
                            type="text"
                            class="form-control"
                            v-model="form.bukumedia"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">seragam</span>
                        <input
                            for="seragam"
                            type="text"
                            class="form-control"
                            v-model="form.seragam"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">jilbab</span>
                        <input
                            for="jilbab"
                            type="text"
                            class="form-control"
                            v-model="form.jilbab"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">ipp</span>
                        <input
                            for="ipp"
                            type="text"
                            class="form-control"
                            v-model="form.ipp"
                        />
                    </div>

                    <button type="submit" class="btn btn-oorange">
                        Update
                    </button>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import AppLayout from "../../../Layouts/App.vue";
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    components: {
        AppLayout,
        Link,
    },
    props: {
        cost: Object,
    },
    setup(props) {
        // const form = useForm({
        //     name: props.cost.name,
        //     gender: props.cost.gender,
        //     gedung: props.cost.gedung,
        //     perpustakaan: props.cost.perpustakaan,
        //     kegiatan: props.cost.kegiatan,
        //     bukumedia: props.cost.bukumedia,
        //     seragam: props.cost.seragam,
        //     jilbab: props.cost.jilbab,
        //     ipp: props.cost.ipp,
        // });

        // atau bisa langsung aja
        const form = useForm(props.cost);

        return {
            form,
        };
    },
};
</script>
