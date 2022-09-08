<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'email'     => 'required',
            'password'  => 'required'
        ]);

        //get email and password from request
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {

            //regenerate session
            $request->session()->regenerate();
            return redirect('/home');
        }

        //if login fails
        return back()->withErrors([
            'email' => 'Ora bener email e',
            'password' => 'Ora bener password e',
        ]);
    }
    public function destroy()
    {
        auth()->logout();
        return redirect('/');
    }
}
