<template>
    <div>
        <div
            class="table-responsive bg-white rounded p-3 position-relative mb-3"
        >
            <div class="mb-5">
                <p class="fs-5">Setting Application</p>
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
                        <tr v-for="set in sets">
                            <td>{{ set.key }}</td>
                            <td>{{ set.value }}</td>
                            <td>
                                <Link as="button" class="btn btn-sm btn-oorange"
                                    >Edit</Link
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
