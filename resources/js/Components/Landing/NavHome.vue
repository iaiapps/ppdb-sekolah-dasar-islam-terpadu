<template>
    <nav
        v-on:scroll="handleScroll"
        v-bind:class="{ change_nav: scrollPosition > 55 }"
        class="navbar navbar-expand-lg navbar-light bg-light py-2 fs-5 sticky-top"
    >
        <div class="container">
            <a class="navbar-brand" href="#">
                <img
                    :src="'storage/img/logoppdb.png'"
                    alt="logoppdb"
                    class="imglogo"
                />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-md-2">
                    <li class="nav-item mx-md-2 mx-0">
                        <a
                            class="nav-link hover px-3"
                            v-bind:class="{ 'bg-nav': isActive === 'beranda' }"
                            @click="isActive = 'beranda'"
                            href="#beranda"
                            >BERANDA</a
                        >
                    </li>
                    <li class="nav-item mx-md-2 mx-0">
                        <a
                            class="nav-link hover px-3"
                            v-bind:class="{ 'bg-nav': isActive === 'jadwal' }"
                            @click="isActive = 'jadwal'"
                            href="#jadwal"
                            >JADWAL</a
                        >
                    </li>
                    <li class="nav-item mx-md-2 mx-0">
                        <a
                            class="nav-link hover px-3"
                            v-bind:class="{ 'bg-nav': isActive === 'panduan' }"
                            @click="isActive = 'panduan'"
                            href="#panduan"
                            >PANDUAN</a
                        >
                    </li>
                    <li class="nav-item mx-md-2 mx-0">
                        <a
                            class="nav-link hover px-3"
                            v-bind:class="{ 'bg-nav': isActive === 'kontak' }"
                            @click="isActive = 'kontak'"
                            href="#kontak"
                            >KONTAK</a
                        >
                    </li>
                </ul>

                <Link
                    class="btn btn-dark btn-lg text-white ps-3"
                    as="button"
                    :href="route('login')"
                    >LOGIN</Link
                >
            </div>
        </div>
    </nav>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    name: "LandHome",
    components: {
        Link,
    },
    data() {
        return {
            scrollPosition: null,
            isActive: "beranda",
        };
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style scoped>
.imglogo {
    width: 170px;
}
.bg-nav {
    background-color: #ffa511;
    color: white !important;
}
.change_nav {
    background-color: #fffffff5 !important;
    border-bottom: 3px solid #ffa511;
}
.hover {
    border-radius: 10px;
    color: #02141d;
}
.hover:hover,
.hover:active {
    background-color: #ffa511;
    color: white;
}

@media only screen and (max-width: 600px) {
    .bg-nav {
        background-color: #ffc107;
    }
}
</style>
