<?php

use Illuminate\Support\Facades\Route;
use Spatie\Permission\Contracts\Role;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [GuestController::class, 'index'])->name('index');
Route::get('/auth', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');

Route::get('/home', [HomeController::class, 'index'])->name('home');
// Route::group(['middleware' => 'role:admin'], function () {
//     Route::get('dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
// });

Route::group(['middleware' => ['role:admin']], function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/users', [AdminController::class, 'Users'])->name('admin.users');
    Route::get('/admin/{user}/user-aktifkan', [AdminController::class, 'aktifkanUser'])->name('admin.user-aktifkan');
    // Route::get('/admin/user-search', [AdminController::class, 'userSearch'])->name('user.search');
});

Route::group(['middleware' => ['role:menunggu']], function () {
    Route::get('/user/dashboard', [UserController::class, 'index'])->name('user.dashboard');
    Route::get('/user/informasi', [UserController::class, 'informasi'])->name('user.informasi');
    Route::get('/user/jadwal', [UserController::class, 'jadwal'])->name('user.jadwal');
});

// GUEST
Route::get('/buat-akun', [GuestController::class, 'createAccount']);
Route::post('/buat-akun', [GuestController::class, 'storeAccount'])->name('guest.buat-akun');
Route::post('/formulir', [GuestController::class, 'storeFormulir'])->name('guest.store-formulir');

Route::get('/x', [GuestController::class, 'bridge'])->name('bridge');
