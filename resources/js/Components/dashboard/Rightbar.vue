<template>
    <a
        href="#top"
        class="btn btn-oorange mt-3 d-md-none floating fs-2"
        v-on:click="getModal"
    >
        <i class="bi bi-calendar2-check"></i>
    </a>
    <div
        id="top"
        class="col-12 col-md-2 table-responsive bg-white rounded p-3 text-center my-3 mt-md-0 order-first order-md-last d-md-block"
        v-bind:class="{ 'd-none': isActivated }"
    >
        <div class="bg-oorange p-1 text-white rounded">
            <p class="badge">Tanggal sekarang</p>
            <br />
            <span>{{ time }}</span>
        </div>
        <hr />
        <strong>Timeline</strong>
        <hr />
        <div class="small">
            <div v-for="item in $page.props.timelines">
                <p>{{ item.info }}</p>
                <p>{{ item.date }}</p>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Rightbar",
    data() {
        return {
            time: "",
            isActivated: true,
        };
    },
    methods: {
        getTime() {
            var options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            const today = new Date();
            this.time = today.toLocaleDateString("id-ID", options);
        },
        getModal() {
            this.isActivated = !this.isActivated;
        },
    },
    mounted() {
        this.getTime();
    },
};
</script>

<style scoped>
p {
    margin-bottom: 5px;
}

.floating {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 30px;
    right: 30px;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
}

.bg-oorange {
    background-color: #f79500;
}
</style>
