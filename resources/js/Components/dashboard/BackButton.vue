<template>
    <Link
        as="button"
        @click="goBack"
        class="btn btn-sm btn-oorange text-light mb-3"
        ><i class="bi bi-arrow-left"></i> Back</Link
    >
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    components: {
        Link,
    },
    methods: {
        goBack() {
            window.history.back();
        },
    },
};
</script>
