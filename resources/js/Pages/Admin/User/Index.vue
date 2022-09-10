<template>
    <AppLayout>
        <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
            <div class="bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Users</p>
            </div>
            <div class="bg-white rounded p-3">
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
                            <!-- <th scope="col">#</th> -->
                            <th scope="col">Wa</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in users.data" :key="item.id">
                            <!-- <th scope="row">{{ index + 1 }}</th> -->
                            <td>{{ item.email }}</td>
                            <td>{{ item.name }}</td>
                            <td>
                                <Link
                                    as="button"
                                    class="btn btn-sm btn-outline-secondary"
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
