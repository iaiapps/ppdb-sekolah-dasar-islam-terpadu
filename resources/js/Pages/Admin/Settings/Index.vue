<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <Alert />
        <div class="table-responsive bg-white rounded p-3 mb-3">
            <p class="fs-4 m-0">Settings Website</p>
        </div>
        <!-- disini component -->
        <SetTimeline :sets="set_timeline" />
        <SetPpdb :sets="set_ppdb" />
        <SetApp :sets="set_app" />
    </div>
</template>
<script>
import SetPpdb from "./SetPpdb.vue";
import SetTimeline from "./SetTimeline.vue";
import SetApp from "./SetApp.vue";
import AppLayout from "../../../Layouts/App.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Alert from "../../../Components/dashboard/Alert.vue";

export default {
    layout: AppLayout,
    components: {
        Alert,
        SetPpdb,
        SetTimeline,
        SetApp,
        Link,
        AppLayout,
    },
    props: {
        set_ppdb: Object,
        set_app: Object,
        set_timeline: Object,
    },
};
</script>
