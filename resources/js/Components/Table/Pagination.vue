<template>
    <div
        class="d-md-flex justify-content-between align-middle text-around my-3"
    >
        <div class="my-1">
            Total:
            <span class="badge bg-dark">{{ total }}</span>
        </div>
        <div>
            <template v-for="(link, key) in links" :key="key">
                <div
                    v-if="link.url === null"
                    v-html="link.label"
                    class="btn mx-1 btn-sm btn-outline-secondary disabled"
                ></div>
                <Link
                    v-else
                    :href="link.url"
                    v-html="link.label"
                    class="btn mx-1 btn-sm btn-outline-secondary"
                    :class="{ 'btn-oorange': link.active }"
                ></Link>
            </template>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { defineProps } from "vue";
defineProps({
    links: Array,
    total: Object,
});
</script>
