<template>
    <div>
        <form @submit.prevent="buatAkun">
            <input type="text" v-model="form.name" placeholder="Nama lengkap" />
            <input type="text" v-model="form.hp" placeholder="No wa" />
            <!-- contoh error callback -->
            <div v-if="errors.hp" class="alert alert-danger">
                {{ errors.hp }}
            </div>
            <input type="text" v-model="form.password" placeholder="password" />
            <input
                type="text"
                v-model="form.confirm_password"
                @keyup="cek"
                placeholder="ulangi password"
            />
            <input type="submit" value="Buat Akun" />
        </form>
    </div>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
import { reactive } from "vue";
export default {
    props: {
        errors: Object,
    },
    setup() {
        const form = reactive({
            name: "",
            hp: "",
            password: "",
            confirm_password: "",
        });

        const buatAkun = () => {
            Inertia.post(
                route("guest.buat-akun", {
                    name: form.name,
                    hp: form.hp,
                    password: form.password,
                })
            );
        };

        const cek = () => {
            console.log(form.password === form.confirm_password);
            // jika false, maka tampilkan alert password tidak sama di bawahnya inputan password_confirm
        };
        return {
            form,
            buatAkun,
            cek,
        };
    },
};
</script>
