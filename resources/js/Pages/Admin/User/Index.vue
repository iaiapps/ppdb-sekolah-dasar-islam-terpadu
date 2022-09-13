<template>
    <AppLayout>
        <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
            <Alert />
            <div class="table-responsive bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Users</p>
            </div>
            <div class="table-responsive bg-white rounded p-3">
                <div>
                    <input
                        type="text"
                        placeholder="Cari nama atau nomor wa"
                        class="form-control mb-3"
                        v-model="search"
                    />
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">No. WhatssApp</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Ket</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in users.data" :key="item.id">
                            <td scope="row">{{ index + 1 }}</td>
                            <td>{{ item.email }}</td>
                            <td>
                                <Link
                                    :href="route('admin.user.detail', item.id)"
                                    >{{ item.name }}</Link
                                >
                            </td>
                            <td>{{ item.role }}</td>
                            <td>
                                <Link
                                    v-show="item.aktifkan"
                                    as="button"
                                    class="btn btn-sm btn-secondary"
                                    :href="
                                        route('admin.user-aktifkan', item.id)
                                    "
                                >
                                    Aktifkan
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination :links="users.links" :total="users.total" />
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
import Alert from "../../../Components/dashboard/Alert.vue";

const props = defineProps({
    users: Object,
});

const search = ref("");
const perPage = ref("5");

watch(search, (value) => {
    Inertia.get(
        "/admin/users",
        { search: value },
        { preserveState: true, replace: true }
    );
});
</script>
