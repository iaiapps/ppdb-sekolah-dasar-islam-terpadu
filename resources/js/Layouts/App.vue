<template>
    <Navbar />
    <div class="bg-light min-vh-100">
        <div class="container-fluid back">
            <div class="row py-3 px-md-4 px-3">
                <Sidebar />
                <slot />
                <Rightbar />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../Components/dashboard/Navbar.vue";
import Sidebar from "../Components/dashboard/Sidebar.vue";
import Rightbar from "../Components/dashboard/Rightbar.vue";

export default {
    name: "AdminPage",
    components: {
        Navbar,
        Sidebar,
        Rightbar,
    },
};
</script>

<style scoped>
.logo {
    width: 80px;
}
.hover {
    color: #212529;
}
.hover:hover {
    background-color: #f79500;
    color: white;
    border-radius: 10px;
}
.back {
    background-image: url(../../../public/storage/img/backdash.svg);
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: #ecf0f1;
}
.bg-oorange {
    background-color: #f79500;
}
</style>
