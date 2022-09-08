<template>
    <div class="container text-center">
        <p class="display-5 fs-3 mt-5">{{ title }}</p>
        <p>{{ description }}</p>

        <button @click="goBack" class="btn btn-oorange w-25 m-2">Back</button>
        <button @click="goBack" class="btn btn-outline-dark w-25 m-2">
            Home
        </button>
        <br />
        <img :src="'/storage/img/404.gif'" class="gif" alt="404" />
    </div>
</template>

<script>
export default {
    props: {
        status: Number,
    },
    computed: {
        title() {
            return {
                503: "503: Service Unavailable",
                500: "500: Server Error",
                404: "404: Page Not Found",
                403: "403: Forbidden",
            }[this.status];
        },
        description() {
            return {
                503: "Sorry, we are doing some maintenance. Please check back soon.",
                500: "Whoops, something went wrong on our servers.",
                404: "Sorry, the page you are looking for could not be found.",
                403: "Sorry, you are forbidden from accessing this page.",
            }[this.status];
        },
    },
    methods: {
        goBack() {
            window.history.back();
        },
    },
};
</script>
<style>
.btn-oorange {
    background-color: #f79500;
}
</style>
