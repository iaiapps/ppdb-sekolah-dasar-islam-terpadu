<template>
    <div>
        <form @submit.prevent="form.put(route('timeline.update', form.id))">
            <input type="text" placeholder="Info" v-model="form.info" />
            <input type="text" placeholder="Date" v-model="form.date" />
            <input type="text" placeholder="Icon" v-model="form.icon" />
            <input type="submit" value="Update" />
        </form>
    </div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    props: {
        sets: Object,
    },

    setup(props) {
        const form = useForm(props.sets);
        return { form };
    },
};
</script>
