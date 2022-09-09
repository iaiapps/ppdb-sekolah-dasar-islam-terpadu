<template>
   <div class="bg-oorange">
      <div class="container">
         <div class="d-flex flex-column justify-content-center  vh-100">
            <div class="bg-white p-5 rounded shadow">
               <div class="text-center">
                  <img class="logo rounded p-1 mb-2 text-center" :src="'/storage/img/user.png'" alt="user" />
                  <p class="fs-3" v-if="title === 'akun'">
                     Selamat datang <strong>{{ user.name }} </strong> <br />
                  </p>
                  <hr>
               </div>
               <ul class="list-group fs-5 mb-3">
                  <li class="list-group-item">
                     Sebelum melanjutkan pendaftaran, lakukan pembayaran terlebih dahulu untuk mengaktifkan Akun.
                  </li>
                  <li class="list-group-item">Biaya pendaftaran sebesar: Rp 300.000 ke rekening sekolah BSI 4441234007
                     a.n. Sekolah Dasar Islam Terpadu Harapan Umat Jember
                  </li>
                  <li class="list-group-item">Kirim bukti pembayaran ke Admin SDIT untuk konfirmasi Akun PPDB</li>
               </ul>

               <Link href="#" class="btn btn-oorange btn-lg w-100">WA Admin</Link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    props: {
        title: String,
        user: Object,
    },
    components:{
      Link,
    }
};
</script>

<style scoped>
.logo {
   width: 70px;
}
</style>