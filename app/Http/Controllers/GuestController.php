<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Student;
use App\Models\SettingPpdb;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreFormulirRequest;

class GuestController extends Controller
{
    public function bridge()
    {
        $title  = 'online';
        $user = Auth::user();
        if (!$user) {
            return redirect('/');
        } else {
            $user = Auth::user();
            if ($user->hasRole('membuat_akun')) {
                return Inertia::render('Guest/Bridge', compact('title', 'user'));
            } elseif ($user->hasRole('membayar')) {
                // sebelum form di tampilkan, tentu harus di cek di timeline apakah ada gelombang yg aktif
                if ($this->_isOn()) {
                    $gelombang = $this->_gelombang();
                    $user = $user->name;
                    return Inertia::render('Guest/FormPendaftaran', compact('user', 'gelombang'));
                } else {
                    $title  = 'offline';
                    return Inertia::render('Guest/Bridge', compact('title', 'user'));
                }
            } elseif ($user->hasRole('menunggu')) {
                return redirect()->route('home');
            } elseif ($user->hasRole('diterima')) {
                return Inertia::render('Guest/FormPendaftaran', compact('user'));
            } else {
                return redirect('/');
            }
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
            $user->assignRole('membuat_akun');
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
        Student::create($data);
        $user->syncRoles('menunggu');
        return redirect()->route('bridge');
    }
    private function _isOn()
    {
        $is_active = SettingPpdb::where('is_active', true)
            ->first();
        if ($is_active) {
            return Carbon::now()->between(Carbon::parse($is_active->start_date)->subDay(), Carbon::parse($is_active->end_date));
        }
    }
    private function _gelombang()
    {
        $g = SettingPpdb::where('is_active', true)->first();
        if ($g) {
            return [$g->gelombang, $g->tahun_ajaran];
        }
    }
}
