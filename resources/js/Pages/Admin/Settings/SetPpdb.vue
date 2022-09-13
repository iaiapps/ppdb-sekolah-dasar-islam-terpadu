<template>
    <div>
        <div
            class="table-responsive bg-white rounded p-3 position-relative mb-3"
        >
            <div class="mb-5">
                <div class="d-md-flex justify-content-between">
                    <p class="fs-5">Setting PPDB</p>
                    <!-- <button
                        :href="route('timeline.create')"
                        class="btn btn-sm btn-oorange"
                    >
                        +
                    </button> -->
                </div>
                <hr />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Tahun ajaran</th>
                            <th scope="col">Gelombang</th>
                            <th scope="col">Start</th>
                            <th scope="col">End</th>
                            <th scope="col">isActive</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="set in sets">
                            <td>{{ set.tahun_ajaran }}</td>
                            <td>{{ set.gelombang }}</td>
                            <td>{{ set.start_date }}</td>
                            <td>{{ set.end_date }}</td>
                            <td>{{ set.is_active ? "Yes" : "No" }}</td>
                            <td>
                                <a
                                    as="button"
                                    class="btn btn-sm btn-oorange"
                                    v-if="set.is_active !== 1"
                                    >Aktifkan</a
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
export default {
    props: {
        sets: Object,
    },
};
</script>
