<template>
    <div class="col-12 p-3 bg-white rounded col-md-2">
        <div class="text-center">
            <img class="logo" :src="'/storage/img/logosdit.png'" alt="logo" />
        </div>
        <p class="text-center mt-3 py-2 fs-6 text-dark fw-bold">
            {{ $page.props.auth.user.name }}
        </p>
        <!-- ini menu untuk admin -->
        <ul
            class="nav flex-row flex-md-column justify-content-between"
            v-if="$page.props.auth.user.roles == 'admin'"
        >
            <li class="nav-item my-1">
                <Link
                    class="nav-link hover rounded"
                    :href="route('admin.dashboard')"
                    :class="{
                        'bg-menu': $page.component === 'Admin/Index',
                    }"
                >
                    <i class="bi bi-bar-chart me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Home</span></Link
                >
            </li>

            <li class="nav-item my-1">
                <Link
                    class="nav-link hover rounded"
                    href="/admin/users"
                    :class="{
                        'bg-menu': $page.url === '/admin/users',
                    }"
                >
                    <i class="bi bi-info-circle me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Users</span>
                </Link>
            </li>
            <li class="nav-item my-1">
                <Link
                    class="nav-link hover rounded"
                    href="/admin/students"
                    :class="{
                        'bg-menu': $page.url === '/admin/students',
                    }"
                >
                    <i class="bi bi-info-circle me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Students</span>
                </Link>
            </li>

            <!-- <li class="nav-item my-1">
                <Link to="/admin/status" class="nav-link hover rounded" href="/madin/" :class="{
                    'bg-menu': $page.url === 'Madin/KelasIndex',
                }">
                <i class="bi bi-coin me-0 me-md-2"></i>
                <span class="d-none d-md-inline-block">Status</span>
                </Link>
            </li> -->
            <li class="nav-item my-1">
                <Link
                    class="nav-link hover rounded"
                    href="/admin/kategori-biaya"
                    :class="{
                        'bg-menu': $page.url === '/admin/kategori-biaya',
                    }"
                >
                    <i class="bi bi-coin me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Cost Category</span>
                </Link>
            </li>
            <li class="nav-item my-1">
                <Link
                    class="nav-link hover rounded"
                    :href="route('admin.cost.index')"
                    :class="{
                        'bg-menu': $page.component === 'Admin/Cost/Index',
                    }"
                >
                    <i class="bi bi-cash-coin me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Set Cost</span>
                </Link>
            </li>
            <li class="nav-item my-1">
                <Link
                    class="nav-link hover rounded"
                    href="/admin/settings"
                    :class="{
                        'bg-menu': $page.url === '/admin/settings',
                    }"
                >
                    <i class="bi bi bi-sliders me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Setting</span>
                </Link>
            </li>
        </ul>
        <!-- ini menu untuk user -->
        <ul
            class="nav flex-row flex-md-column justify-content-around"
            v-if="
                $page.props.auth.user.roles == 'menunggu' ||
                $page.props.auth.user.roles == 'diterima'
            "
        >
            <li class="nav-item my-1">
                <Link
                    class="nav-link hover rounded"
                    :href="route('user.dashboard')"
                    :class="{
                        'bg-menu': $page.component === 'User/Index',
                    }"
                >
                    <i class="bi bi-house-door me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Home</span></Link
                >
            </li>
            <li class="nav-item my-1">
                <Link
                    class="nav-link hover rounded"
                    :href="route('user.informasi')"
                    :class="{
                        'bg-menu': $page.component === 'User/InformasiPage',
                    }"
                >
                    <i class="bi bi-info-circle me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block"
                        >Informasi</span
                    ></Link
                >
            </li>
            <li
                v-if="$page.props.auth.user.roles == 'menunggu'"
                class="nav-item my-1"
            >
                <Link
                    class="nav-link hover rounded"
                    :href="route('user.jadwal')"
                    :class="{
                        'bg-menu': $page.component === 'User/JadwalPage',
                    }"
                >
                    <i class="bi bi-calendar3 me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block"
                        >Jadwal Test</span
                    ></Link
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    name: "LeftSide",
    props: {
        admin: Boolean,
    },
    components: {
        Link,
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

.logo {
    width: 75px;
}

.hover {
    color: #212529;
}

.hover:hover {
    background-color: #f79500;
    color: white;
    border-radius: 10px;
}

.bg-menu {
    background-color: #f79500;
    color: white;
}

.bg-menu:link,
.bg-menu:visited {
    color: white;
}

@media (max-width: 700px) {
    i {
        font-size: 1.5rem;
    }
}
</style>
