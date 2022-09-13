<template>
    <div>
        <div class="bg-white rounded p-3 position-relative mb-3">
            <div class="mb-5">
                <p class="fs-5">Setting PPDB</p>
                <hr />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Tahun ajaran</th>
                            <th scope="col">Gelombang</th>
                            <th scope="col">isActive</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="set in sets">
                            <td>{{ set.tahun_ajaran }}</td>
                            <td>{{ set.gelombang }}</td>
                            <td>{{ set.is_active ? "Yes" : "No" }}</td>
                            <td>
                                <Link
                                    as="button"
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
export default {
    props: {
        sets: Object,
    },
};
</script>
