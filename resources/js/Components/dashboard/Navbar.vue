<template>
    <div class="row py-3 gx-0 px-3 px-md-4">
        <div class="col-6">
            <img
                :src="'/storage/img/logoppdb.png'"
                alt="logoppdb"
                class="imglogo"
            />
        </div>
        <div class="col-6 text-end">
            <a
                class="btn btn-oorange text-white me-2"
                target="_blank"
                href="https://wa.me/6288289378109/"
            >
                <i class="bi bi-chat-left-text"></i>
            </a>
            <Link
                as="button"
                class="btn btn-oorange text-white"
                href="/logout"
                method="POST"
                >Logout
            </Link>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    name: "NavAdmin",
    components: {
        Link,
    },
};
</script>

<style scoped>
.seratus {
    width: 100%;
}
.imglogo {
    width: 150px;
}
.btn-oorange {
    background-color: #f79500;
}
</style>
