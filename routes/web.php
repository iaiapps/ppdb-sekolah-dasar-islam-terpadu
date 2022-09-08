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
});
Route::group(['middleware' => ['role:menunggu']], function () {
    Route::get('/user/dashboard', [UserController::class, 'index'])->name('user.dashboard');
    Route::get('/user/registrants', [UserController::class, 'registrants'])->name('user.registrants');
});

// GUEST
Route::get('/buat-akun', [GuestController::class, 'createAccount']);
Route::post('/buat-akun', [GuestController::class, 'storeAccount'])->name('guest.buat-akun');
Route::post('/formulir', [GuestController::class, 'storeFormulir'])->name('guest.store-formulir');

Route::get('/x', [GuestController::class, 'bridge'])->name('bridge');
