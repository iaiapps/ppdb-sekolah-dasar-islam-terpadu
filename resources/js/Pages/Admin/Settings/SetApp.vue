<template>
    <div>
        <div
            class="table-responsive bg-white rounded p-3 position-relative mb-3"
        >
            <div class="mb-5">
                <div class="d-md-flex justify-content-between">
                    <p class="fs-5">Setting App</p>
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
                            <th scope="col">Key</th>
                            <th scope="col">Value</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="set in sets" :key="set.id">
                            <td>{{ set.key }}</td>
                            <td>{{ set.value }}</td>
                            <td>
                                <a
                                    :href="route('setApp.edit', set.id)"
                                    class="btn btn-sm btn-oorange"
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
