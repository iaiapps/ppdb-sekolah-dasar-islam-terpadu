<template>
    <div>
        <p v-if="title === 'akun'">
            <strong>{{ user.name }} </strong> <br />
            tampilkan pesan bahwa akun berhasil dibuat, <br />
            dan minta agar melakukan pembayaran untuk dapat mengisi formulir
            pendaftaran. beserta bukti pembayaran ke panitia. nanti akun akan di
            aktifkan agar bisa mengisi form.
            <br />
            manualnya begitu
            <br />
            nanti panitia tinggal tekan tombol aktifkan
        </p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        user: Object,
    },
};
</script>
