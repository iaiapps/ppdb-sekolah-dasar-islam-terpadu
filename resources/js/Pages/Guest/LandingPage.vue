<template>
    <NavHome />
    <FirstHome />
    <JadwalHome />
    <PanduanHome />
    <KontakHome />
    <FooterHome />
</template>

<script>
import NavHome from "../../Components/Landing/NavHome.vue";
import FirstHome from "../../Components/Landing/FirstHome.vue";
import JadwalHome from "../../Components/Landing/JadwalHome.vue";
import PanduanHome from "../../Components/Landing/PanduanHome.vue";
import KontakHome from "../../Components/Landing/KontakHome.vue";
import FooterHome from "../../Components/Landing/FooterHome.vue";

export default {
    name: "App",
    components: {
        NavHome,
        FirstHome,
        JadwalHome,
        PanduanHome,
        KontakHome,
        FooterHome,
    },
};
</script>

<style>
.bg-dark {
    background-color: #02141d !important;
}
.bg-warning {
    background-color: #f79500 !important;
}
</style>
