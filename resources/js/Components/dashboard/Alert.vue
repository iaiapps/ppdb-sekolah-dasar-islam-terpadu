<template>
    <div
        v-if="$page.props.flash.message"
        class="bg-white text-center alert alert-dismissible mb-3"
    >
        {{ $page.props.flash.message }}
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
    </div>
</template>
<script setup></script>
