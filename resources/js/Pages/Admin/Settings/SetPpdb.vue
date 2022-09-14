use Inertia\Inertia;
<template>
    <div>
        <div
            class="table-responsive bg-white rounded p-3 position-relative mb-3"
        >
            <div class="mb-5">
                <div class="d-flex justify-content-between">
                    <p class="fs-5">Setting PPDB</p>
                    <button
                        as="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        class="btn btn-sm btn-oorange text-light mb-3"
                    >
                        +
                    </button>

                    <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <form @submit.prevent="handleSubmit">
                                        <input
                                            type="text"
                                            placeholder="Tahun ajaran"
                                            class="form-control mb-2"
                                            v-model="form.tahun_ajaran"
                                            required
                                        />
                                        <input
                                            type="number"
                                            placeholder="gelombang"
                                            class="form-control mb-2"
                                            v-model="form.gelombang"
                                            required
                                        />
                                        <input
                                            type="date"
                                            placeholder="start_date"
                                            class="form-control mb-2"
                                            v-model="form.start_date"
                                            required
                                        />
                                        <input
                                            type="date"
                                            placeholder="end_date"
                                            class="form-control mb-2"
                                            v-model="form.end_date"
                                            required
                                        />

                                        <input
                                            type="submit"
                                            class="btn btn-sm btn-oorange me-2"
                                            value="save"
                                        />
                                        <button
                                            type="button"
                                            class="btn btn-sm btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Tahun ajaran</th>
                            <th scope="col">Gelombang</th>
                            <th scope="col">Start</th>
                            <th scope="col">End</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="set in sets"
                            :class="{ 'table-success': set.is_active }"
                        >
                            <td>{{ set.tahun_ajaran }}</td>
                            <td>{{ set.gelombang }}</td>
                            <td>{{ set.start_date }}</td>
                            <td>{{ set.end_date }}</td>
                            <td>
                                <span v-if="set.is_active === 1"
                                    >Sedang aktif</span
                                >
                                <Link
                                    as="button"
                                    :href="route('ppdb.aktifkan', set.id)"
                                    class="btn btn-sm btn-oorange"
                                    v-if="set.is_active !== 1"
                                    >Aktifkan</Link
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";
import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";
export default {
    components: {
        Link,
    },
    props: {
        sets: Object,
    },
    setup() {
        const form = reactive({
            tahun_ajaran: "",
            gelombang: "",
            start_date: "",
            end_date: "",
        });
        const handleSubmit = () => {
            Inertia.post(route("ppdb.store"), form);
        };
        return { form, handleSubmit };
    },
};
</script>
