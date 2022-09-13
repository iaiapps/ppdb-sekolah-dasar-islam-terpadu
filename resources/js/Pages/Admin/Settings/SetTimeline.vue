<template>
    <div>
        <div class="bg-white rounded p-3 position-relative mb-3">
            <div class="mb-5">
                <p class="fs-5">Setting Timeline</p>
                <hr />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Info</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="set in sets">
                            <td>{{ set.info }}</td>
                            <td>{{ set.date }}</td>
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
