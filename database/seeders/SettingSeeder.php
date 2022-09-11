<?php

namespace Database\Seeders;

use App\Models\SettingPpdb;
use App\Models\SettingTimeline;
use Illuminate\Database\Seeder;
use App\Models\SettingApplication;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SettingSeeder extends Seeder
{
    public function run()
    {
        SettingPpdb::create([
            'tahun_ajaran' => '2022-2023',
            'gelombang' => 1,
            'is_active' => true,
            'start_date' => '2022-09-01',
            'end_date' => '2022-09-01',
        ]);
        SettingPpdb::create([
            'tahun_ajaran' => '2022-2023',
            'gelombang' => 2,
            'is_active' => false,
            'start_date' => '2023-01-01',
            'end_date' => '2023-09-01',
        ]);

        DB::table('setting_timeline')->insert([
            [
                'info' => 'Pendaftaran Calon 
                Peserta Didik',
                'date' => '12 Sept 2022 s/d 14 Jan 2023'
            ],
            [
                'info' => 'Observasi dan
                Psikotest',
                'date' => '11 Februari 2023'
            ],
            [
                'info' => 'Pengumuman
                Hasil PPDB',
                'date' => '13 Maret 2023'
            ],
            [
                'info' => 'Pembayaran Biaya
                Daftar Ulang',
                'date' => '13 Mar - 10 Apr 2023'
            ],
            [
                'info' => 'Test BTAQ dan Fitting Seragam',
                'date' => '11-12 Mei 2023'
            ],
            [
                'info' => 'Pembagian seragam, buku, & kelas',
                'date' => '7 Juli 2023'
            ],
        ]);

        SettingApplication::create([
            'key' => 'wa_admin',
            'value' => '6288289378109',
        ]);
        SettingApplication::create([
            'key' => 'wa_developer',
            'value' => '62853',
        ]);
    }
}
