<template>
    <div id="kontak" class="container py-5">
        <div class="row text-center">
            <div class="text-center col-12 col-md-5">
                <img :src="'storage/img/scdh.png'" alt="scdh" class="gbr-cp" />
                <h3>Jam Pelayanan</h3>
                <h4 class="bg-oorange px-3 py-1">Senin s/d Jum'at</h4>
                <p class="fs-4">08.00-15.30</p>
                <h4 class="bg-oorange px-3 py-1">Sabtu</h4>
                <p class="fs-4">08.00-11.30</p>
            </div>
            <div class="col-2 d-none d-md-block">
                <div class="vr"></div>
            </div>
            <div class="text-center col-12 col-md-5">
                <img :src="'storage/img/wa.png'" alt="wa" class="gbr-cp" />
                <h3>Hubungi Kami</h3>
                <h4 class="fs-4 bg-oorange px-3 py-1">Ust ....</h4>
                <p class="fs-4">+6291....</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KontakHome",
};
</script>

<style scoped>
.vr {
    width: 3px !important;
    opacity: 1;
    background-color: #f79500;
    height: 100%;
}
.gbr-cp {
    width: 80px;
    margin-bottom: 20px;
}

.bg-oorange {
    background-color: #f79500;
    color: white;
}
</style>
