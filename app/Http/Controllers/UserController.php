<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Index');
    }
    public function show()
    {
        $students = Student::all();
        return Inertia::render('User/Show', ['admin' => false]);
    }
}
