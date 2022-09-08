<template>
    <NavHeader />
    <div class="bg-light min-vh-100">
        <div class="container-fluid back">
            <div class="row py-3 px-md-4 px-3">
                <LeftAdminSide />
                <slot />
                <RightMenuSide />
            </div>
        </div>
    </div>
</template>

<script>
import NavHeader from "../Components/dashboard/NavHeader.vue";
import LeftAdminSide from "../Components/dashboard/LeftAdminSide.vue";
import RightMenuSide from "../Components/dashboard/RightMenuSide.vue";

export default {
    name: "AdminPage",
    components: {
        NavHeader,
        LeftAdminSide,
        RightMenuSide,
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
    background-image: url(/storage/img/backdash.svg);
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: #ecf0f1;
}
.bg-oorange {
    background-color: #f79500;
}
</style>
