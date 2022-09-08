<template>
    <div class="col-12 p-3 bg-white rounded col-md-2">
        <div class="text-center">
            <img class="logo" :src="'/storage/img/logosdit.png'" alt="logo" />
        </div>
        <p class="text-center pt-3 fs-6">Admin PPDB</p>
        <!-- ini menu untuk admin -->
        <ul
            class="nav flex-row flex-md-column justify-content-between"
            v-if="$page.props.auth.user.roles == 'admin'"
        >
            <li class="nav-item my-2">
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

            <li class="nav-item my-2">
                <Link
                    class="nav-link hover rounded"
                    href="/user/registrants"
                    :class="{
                        'bg-menu': $page.component === 'User/Registrants',
                    }"
                >
                    <i class="bi bi-info-circle me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Pendaftar</span>
                </Link>
            </li>
            <li class="nav-item my-2">
                <Link
                    to="/admin/jadwal"
                    class="nav-link hover rounded"
                    href="/madin/"
                    :class="{
                        'bg-menu': $page.url === 'Madin/KelasIndex',
                    }"
                >
                    <i class="bi bi-calendar3 me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Jadwal Test</span>
                </Link>
            </li>
            <li class="nav-item my-2">
                <Link
                    to="/admin/terimatolak"
                    class="nav-link hover rounded"
                    href="/madin/"
                    :class="{
                        'bg-menu': $page.url === 'Madin/KelasIndex',
                    }"
                >
                    <i class="bi bi-coin me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Terima/Tolak</span>
                </Link>
            </li>
            <li class="nav-item my-2">
                <Link
                    to="/admin/status"
                    class="nav-link hover rounded"
                    href="/madin/"
                    :class="{
                        'bg-menu': $page.url === 'Madin/KelasIndex',
                    }"
                >
                    <i class="bi bi-coin me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Status</span>
                </Link>
            </li>
            <li class="nav-item my-2">
                <Link
                    to="/admin/aturkategori"
                    class="nav-link hover rounded"
                    href="/madin/"
                    :class="{
                        'bg-menu': $page.url === 'Madin/KelasIndex',
                    }"
                >
                    <i class="bi bi-coin me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Atur Kategori</span>
                </Link>
            </li>
            <li class="nav-item my-2">
                <Link
                    to="/admin/daftarulang"
                    class="nav-link hover rounded"
                    href="/madin/"
                    :class="{
                        'bg-menu': $page.url === 'Madin/KelasIndex',
                    }"
                >
                    <i class="bi bi-coin me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Daftar Ulang</span>
                </Link>
            </li>
            <li class="nav-item my-2">
                <Link
                    to="/admin/setting"
                    class="nav-link hover rounded"
                    href="/madin/"
                    :class="{
                        'bg-menu': $page.url === 'Madin/KelasIndex',
                    }"
                >
                    <i class="bi bi-coin me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Setting</span>
                </Link>
            </li>
        </ul>
        <!-- ini menu untuk user -->
        <ul
            class="nav flex-row flex-md-column justify-content-between"
            v-if="$page.props.auth.user.roles == 'menunggu'"
        >
            <li class="nav-item my-2">
                <Link
                    class="nav-link hover rounded"
                    :href="route('user.dashboard')"
                    :class="{
                        'bg-menu': $page.component === 'User/Index',
                    }"
                >
                    <i class="bi bi-bar-chart me-0 me-md-2"></i>
                    <span class="d-none d-md-inline-block">Home</span></Link
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
