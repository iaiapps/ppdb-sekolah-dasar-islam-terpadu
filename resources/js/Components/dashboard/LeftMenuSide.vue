<template>
   <div class="col-12 p-3 bg-white rounded col-md-2">
      <div class="text-center">
         <img class="logo" src="../../assets/img/logosdit.png" alt="logo" />
      </div>
      <p class="text-center pt-3 fs-5">nama user</p>
      <ul class="nav flex-row flex-md-column justify-content-between">
         <li class="nav-item my-2">
            <router-link
               to="/user/pendaftar"
               class="nav-link hover rounded"
               v-bind:class="{ 'bg-menu': isActive === 'pendaftar' }"
               v-on:click="isActive = 'pendaftar'"
            >
               <i class="bi bi-bar-chart me-0 me-md-2"></i>
               <span class="d-none d-md-inline-block">Data Pendaftar</span>
            </router-link>
         </li>
         <li class="nav-item my-2">
            <router-link
               to="/user/informasi"
               class="nav-link hover rounded"
               v-bind:class="{ 'bg-menu': isActive === 'informasi' }"
               v-on:click="isActive = 'informasi'"
            >
               <i class="bi bi-info-circle me-0 me-md-2"></i>
               <span class="d-none d-md-inline-block">Informasi</span>
            </router-link>
         </li>
         <li class="nav-item my-2">
            <router-link
               to="/user/jadwal"
               class="nav-link hover rounded"
               v-bind:class="{ 'bg-menu': isActive === 'jadwal' }"
               v-on:click="isActive = 'jadwal'"
            >
               <i class="bi bi-calendar3 me-0 me-md-2"></i>
               <span class="d-none d-md-inline-block">Jadwal Test</span>
            </router-link>
         </li>
         <li class="nav-item my-2">
            <router-link
               to="/user/daftarulang"
               class="nav-link hover rounded"
               v-bind:class="{ 'bg-menu': isActive === 'daftarulang' }"
               v-on:click="isActive = 'daftarulang'"
            >
               <i class="bi bi-coin me-0 me-md-2"></i>
               <span class="d-none d-md-inline-block">Daftar Ulang</span>
            </router-link>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   name: 'LeftSide',
   data() {
      return {
         isActive: 'pendaftar'
      }
   }
}
</script>

<style scoped>
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