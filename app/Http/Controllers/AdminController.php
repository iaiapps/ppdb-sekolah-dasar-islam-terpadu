<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Index', ['admin' => true]);
    }
    public function users(Request $request)
    {
        $users = User::where('id', '!=', 1)
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'LIKE', "%{$search}%");
            })
            ->paginate()
            ->withQueryString();
        return Inertia::render('Admin/User/Index', ['users' => $users]);
    }
    public function aktifkanUser(User $user)
    {
        $user->assignRole('membayar');
        $pesan = 'akun A/N: ' . $user->name . ' Berhasil diaktifkan';
        return redirect()->back()->with('message', $pesan);
    }
}
