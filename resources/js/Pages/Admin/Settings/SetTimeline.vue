<template>
    <div>
        <div
            class="table-responsive bg-white rounded p-3 position-relative mb-3"
        >
            <div class="mb-5">
                <div class="d-md-flex justify-content-between">
                    <p class="fs-5">Setting Timeline</p>
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
                            <th scope="col">Info</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(set, index) in sets" :key="set.id">
                            <td>{{ set.info }}</td>
                            <td>{{ set.date }}</td>
                            <td>
                                <a
                                    as="button"
                                    class="btn btn-sm btn-oorange"
                                    :href="route('timeline.edit', set.id)"
                                    >Edit</a
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
