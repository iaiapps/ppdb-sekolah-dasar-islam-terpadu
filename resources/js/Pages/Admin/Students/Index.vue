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
                />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>School Origin</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(st, index) in students.data" :key="st.id">
                            <td>{{ st.full_name }}</td>
                            <td>{{ st.school_origin }}</td>
                            <td>{{ st.created_at }}</td>
                            <td>xc</td>
                        </tr>
                    </tbody>
                </table>
                <Pagination :links="students.links" :total="students.total" />
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from "../../../Layouts/App.vue";
import Pagination from "../../../Components/Table/Pagination.vue";
import { defineProps } from "vue";
const props = defineProps({
    students: Object,
});
</script>
