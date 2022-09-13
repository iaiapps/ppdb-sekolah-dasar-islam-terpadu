<template>
    <AppLayout>
        <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
            <div class="table-responsive bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Students</p>
            </div>
            <div class="table-responsive bg-white rounded p-3">
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
                            <th>School Origin</th>
                            <th>Created at</th>
                            <!-- <th>Status</th> -->
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(st, index) in students.data"
                            :key="st.id"
                            :class="{ 'table-danger': st.status === 'reject' }"
                        >
                            <td>
                                <Link
                                    :href="
                                        route('admin.students.detail', st.id)
                                    "
                                >
                                    {{ st.full_name }}</Link
                                >
                            </td>
                            <td>{{ st.school_origin }}</td>
                            <td>{{ st.created_at }}</td>
                            <!-- <td>{{ st.status }}</td> -->
                            <td>
                                <Link
                                    v-if="st.status === 'acc'"
                                    as="button"
                                    class="btn btn-sm mx-1 btn-danger"
                                    @click="reject(st.id, st.full_name)"
                                    >Reject</Link
                                >
                                <Link
                                    v-if="st.status === 'reject'"
                                    as="button"
                                    class="btn btn-sm mx-1 btn-success"
                                    @click="acc(st.id, st.full_name)"
                                    >Acc</Link
                                >
                                <Link
                                    v-if="st.status === 'menunggu'"
                                    as="button"
                                    class="btn btn-sm mx-1 btn-success"
                                    @click="acc(st.id, st.full_name)"
                                    >Acc</Link
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination :links="students.links" :total="students.total" />
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import AppLayout from "../../../Layouts/App.vue";
import Pagination from "../../../Components/Table/Pagination.vue";
import { ref, watch, defineProps } from "vue";
import { Inertia } from "@inertiajs/inertia";

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

const reject = (id, student) => {
    if (confirm("Are you sure you reject: " + student)) {
        Inertia.get(route("admin.acc-or-reject", [id, false]));
    }
};
const acc = (id, student) => {
    if (confirm("Are you sure you Accept: " + student)) {
        Inertia.get(route("admin.acc-or-reject", [id, true]));
    }
};
</script>
