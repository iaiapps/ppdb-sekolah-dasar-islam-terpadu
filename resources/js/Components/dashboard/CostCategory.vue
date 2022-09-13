<template>
    <div>
        <button
            type="button"
            class="btn btn-oorange text-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            Check Category
        </button>
        <hr />
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-capitalize">name</th>
                                    <th class="text-capitalize">gender</th>
                                    <th class="text-capitalize">gedung</th>
                                    <th class="text-capitalize">
                                        perpustakaan
                                    </th>
                                    <th class="text-capitalize">kegiatan</th>
                                    <th class="text-capitalize">bukumedia</th>
                                    <th class="text-capitalize">seragam</th>
                                    <th class="text-capitalize">jilbab</th>
                                    <th class="text-capitalize">ipp</th>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
    costs: Object,
});
</script>
