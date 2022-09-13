<template>
    <div class="col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0">
        <div class="table-responsive bg-white rounded p-3 mb-3">
            <p class="fs-4 m-0">Cost Re-Registration</p>
        </div>
        <div
            class="table-responsive bg-white rounded p-3 vh-100 position-relative"
        >
            <!-- disini modal -->
            <CostCategory :costs="costs" />
            <form @submit.prevent="submit">
                <div class="d-flex justify-content-center">
                    <select v-model="form.student_id" class="form-select mx-1">
                        <option disabled selected>Student</option>
                        <option
                            v-for="(st, index) in students"
                            :key="st.id"
                            for="student"
                            :value="st.id"
                        >
                            {{ st.full_name }}
                        </option>
                    </select>
                    <select
                        v-model="form.cost_categories_id"
                        class="form-select mx-1"
                    >
                        <option selected disabled>Choose Category</option>
                        <option v-for="cost in costs" :value="cost.id">
                            {{ cost.name }}
                        </option>
                    </select>
                    <input
                        type="submit"
                        class="btn btn-oorange mx-1"
                        value="Apply"
                    />
                </div>
            </form>
            <hr />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">No. Wa</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Kategori Biaya</th>
                        <!-- <th scope="col">Action</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(item, index) in students_applied.data"
                        :key="item.id"
                    >
                        <td>{{ item.wa }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.cost }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import AppLayout from "../../../Layouts/App.vue";
import CostCategory from "../../../Components/dashboard/CostCategory.vue";
import { Inertia } from "@inertiajs/inertia";
export default {
    layout: AppLayout,
    components: {
        CostCategory,
    },
    props: {
        costs: Object,
        students: Object,
        students_applied: Object,
    },
    setup() {
        const form = {
            student_id: "",
            cost_categories_id: "",
        };
        const submit = () => {
            Inertia.post(route("admin.cost.apply"), form);
        };
        return {
            form,
            submit,
        };
    },
};
</script>

<style scoped>
.back {
    height: 100px;
    margin-bottom: 70px;
}

.logo {
    width: 120px;
    border-radius: 50%;
    border: 6px solid white;
    position: absolute;
    background-color: white;
    top: 50px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
}
</style>
