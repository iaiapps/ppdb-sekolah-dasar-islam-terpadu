<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormulirRequest;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function bridge()
    {
        $title  = 'akun';
        $user = Auth::user();
        // jika belum membayar, atau role bukan 'pendaftar', maka arahkan ke perintah bayar
        if (!$user->hasRole('pendaftar')) {
            return Inertia::render('Guest/Bridge', compact('title', 'user'));
        } elseif ($user->hasRole('pendaftar')) {
            return Inertia::render('Guest/FormPendaftaran', compact('user'));
        } elseif ($user->hasRole('diterima')) {
        } else {
            return redirect('/');
        }
    }
    public function createAccount()
    {
        return Inertia::render('Guest/CreateAccount');
    }
    public function storeAccount(Request $request)
    {
        $request->validate(
            [
                'name' => 'required',
                'hp'     => 'required|unique:users,email',
                'password'  => 'required'
            ],
            [
                'name.required' => 'Pastikan nama terisi',
                'hp.unique' => 'nomor hp sudah ada',
                'password.required' => 'Password wajib di isi',
            ]
        );

        $user = User::create([
            'name' => $request->name,
            'email' => $request->hp,
            'password' => Hash::make($request->password),
        ]);
        if (!$user) {
            return back();
        } else {
            Auth::login($user);
            return redirect()->route('bridge');
        }
    }
    public function index()
    {
        return Inertia::render('Guest/LandingPage');
    }
    public function storeFormulir(StoreFormulirRequest $request)
    {
        $user = Auth::user();
        $data = $request->all();
        $data['user_id'] = $user->id;
        $user->assignRole('pendaftar');
        Student::create($data);
        return redirect('bridge');
    }
}
