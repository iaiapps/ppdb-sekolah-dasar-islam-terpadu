<template>
    <AppLayout>
        <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
            <div class="bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Students</p>
            </div>
            <div class="bg-white rounded p-3">
                <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Search"
                    v-model="cari"
                />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(st, index) in students.data" :key="st.id">
                            <td>
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    :value="st.id"
                                    v-model="selected"
                                />
                            </td>
                            <td>{{ st.full_name }}</td>
                            <td>xc</td>
                        </tr>
                    </tbody>
                </table>
                <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="select_all"
                    @click="select"
                />
                Pilih semua
                <Pagination :links="students.links" :total="students.total" />
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from "../../../Layouts/App.vue";
import Pagination from "../../../Components/Table/Pagination.vue";
import { ref, watch, defineProps, reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";
const select_all = ref(false);
const selected = ref([]);
const cari = ref("");
const props = defineProps({
    students: Object,
});
watch(cari, (value) => {
    Inertia.get(
        route("admin.students"),
        { cari: value },
        { preserveState: true, replace: true }
    );
});

const select = () => {
    console.log("ok");
};
</script>
