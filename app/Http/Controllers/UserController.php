<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $u = Auth::user();

        return Inertia::render('User/Index', ['status' => $u->roles[0]->name, 'student' => $u->student]);
    }
    public function informasi()
    {
        return Inertia::render('User/InformasiPage');
    }
    public function jadwal()
    {
        return Inertia::render('User/JadwalPage');
    }
    public function show()
    {
        $students = Student::all();
        return Inertia::render('User/Show', ['admin' => false]);
    }
}
