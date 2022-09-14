<template>
    <div>
        <form @submit.prevent="form.put(route('setApp.update', form.id))">
            <label>{{ form.key }}</label>
            <input type="text" placeholder="Date" v-model="form.value" />
            <input type="submit" value="Update" />
        </form>
    </div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    props: {
        set_app: Object,
    },

    setup(props) {
        const form = useForm(props.set_app);
        return { form };
    },
};
</script>
