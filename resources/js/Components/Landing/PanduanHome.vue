<template>
   <div id="panduan" class="bg-container">
      <div class="container py-md-5 py-4">
         <div class="row">
            <div class="col-12 col-md-5">
               <h3 class="display-6">Panduan Pendaftaran</h3>
               <p class="fs-5">
                  Panduan Pendaftaran Peserta Didik Baru
                  <br />SDIT Harapan Umat Jember
               </p>
               <ul class="fs-5 pb-2">
                  <li>Biaya pendaftaran</li>
                  <li>Konfirmasi pendafaran</li>
                  <li>Login web dan isi formulir</li>
                  <li>Pengumuman</li>
               </ul>
               <button class="btn btn-light btn-lg">WA Admin</button>
            </div>
            <div class="col-12 col-md-7 pt-4 pt-md-0">
               <div class="row">
                  <div class="col-12 col-md-6 p-2">
                     <div class="bg-card-pand p-3">
                        <i class="bi bi-coin display-5"></i>
                        <p>
                           Membayar biaya pendaftaran sebesar :
                           <span
                              class="bg-oorange text-white p-1 rounded fw-bold"
                           >Rp 300.000</span> ke rekening sekolah BSI 4441234007 a.n. Sekolah Dasar Islam Terpadu Harapan Umat Jember
                        </p>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 p-2">
                     <div class="bg-card-pand p-3">
                        <i class="bi bi-phone-flip display-5"></i>
                        <p>
                           Mengirim bukti transfer ke nomor 088-289-378-109 dengan format:
                           <br />
                           <span
                              class="bg-oorange p-1 rounded fw-bold text-white"
                           >nama pengirim#nama calon siswa,</span>
                           <br />untuk mendapat "Token" login ke web PPDB
                        </p>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 p-2">
                     <div class="bg-card-pand p-3">
                        <i class="bi bi-input-cursor-text display-5"></i>
                        <p>Mengisi formulir pendaftaran dengan Login ke web PPDB SDIT Harum, menggunakan token yang diberikan</p>
                     </div>
                  </div>
                  <div class="col-12 col-md-6 p-2">
                     <div class="bg-card-pand p-3">
                        <i class="bi bi-envelope-paper display-5"></i>
                        <p>Menunggu pengumuman lanjutan dari sekolah. Yang akan ditampilkan di website PPDB.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'PanduanHome'
}
</script>


<style scoped>
.bg-container {
   background-color: #f79500;
}

.bg-oorange {
   background-color: #f79500;
}
.bg-card-pand {
   height: 100%;
   background-color: white;
   border-radius: 10px;
   font-size: 1.2rem;
}

@media only screen and (max-width: 768px) {
   .bg-card-pand {
      font-size: 1.1rem;
   }
}
</style>