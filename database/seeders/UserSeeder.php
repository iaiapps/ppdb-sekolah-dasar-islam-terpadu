<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Admin',
            'email' => 'a@a.a',
            'password' => Hash::make('password')
        ]);

        $role = Role::create(['name' => 'admin']);
        Role::create(['name' => 'membuat_akun']);
        Role::create(['name' => 'membayar']);
        Role::create(['name' => 'menunggu']);
        Role::create(['name' => 'diterima']);
        Role::create(['name' => 'ditolak']);
        $user->assignRole($role);
    }
}
