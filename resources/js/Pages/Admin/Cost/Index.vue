<template>
    <AppLayout>
        <div class="col-md px-0 px-md-3 mt-3 mt-md-0">
            <div class="bg-white rounded p-3 mb-3">
                <p class="fs-4 m-0">Set Cost Category</p>
            </div>
            <div class="bg-white rounded p-3 vh-100">
                <table class="table table-responsive">
                    <thead>
                        <tr>
                            <th>kategory</th>
                            <th>Jk</th>
                            <th>Gedung</th>
                            <th>Perpus</th>
                            <th>Kegiatan</th>
                            <th>Buku & Media</th>
                            <th>Seragam</th>
                            <th>Jilbab</th>
                            <th>IPP</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(c, index) in costs" :key="c.id">
                            <td>{{ c.name }}</td>
                            <td>{{ c.gender }}</td>
                            <td>{{ c.gedung }}</td>
                            <td>{{ c.perpustakaan }}</td>
                            <td>{{ c.kegiatan }}</td>
                            <td>{{ c.bukumedia }}</td>
                            <td>{{ c.seragam }}</td>
                            <td>{{ c.jilbab }}</td>
                            <td>{{ c.ipp }}</td>
                            <td>
                                {{
                                    new Intl.NumberFormat().format(
                                        c.gedung +
                                            c.perpustakaan +
                                            c.kegiatan +
                                            c.bukumedia +
                                            c.seragam +
                                            c.jilbab +
                                            c.ipp
                                    )
                                }}
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        costs: Object,
    },
};
</script>
