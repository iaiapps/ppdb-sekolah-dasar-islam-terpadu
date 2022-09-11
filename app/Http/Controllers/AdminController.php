<?php

namespace App\Http\Controllers;

use App\Models\CostCategory;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;
use Symfony\Contracts\Service\Attribute\Required;

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
        $user->syncRoles('membayar');
        $pesan = 'akun A/N: ' . $user->name . ' Berhasil diaktifkan';
        return redirect()->back()->with('message', $pesan);
    }
    public function students(Request $request)
    {
        $students =  Student::query()
            ->when($request->cari, function ($query, $cari) {
                $query->where('full_name', 'LIKE', "%{$cari}%");
            })
            ->paginate()
            ->withQueryString();
        // ->transform(function ($student) {
        //     return [
        //         'id' => $student->id,
        //         'full_name' => $student->full_name,
        //         'school_origin' => $student->school_origin,
        //         'created_at' => $student->created_at,
        //         'roles' => $student->user->roles[0]->name,
        //     ];
        // });
        return Inertia::render('Admin/Students/Index', ['title' => 'Students', 'students' => $students]);
    }

    public function setSchedule(Request $request)
    {
        $students =  Student::query()
            ->when($request->cari, function ($query, $cari) {
                $query->where('full_name', 'LIKE', "%{$cari}%");
            })
            ->paginate()
            ->withQueryString();
        return Inertia::render('Admin/Students/SetSchedule', compact('students'));
    }

    public function Kategori()
    {
        return Inertia::render('Admin/Kategori');
    }

    public function AturBiaya()
    {
        return Inertia::render('Admin/AturBiaya');
    }

    public function Settings()
    {
        return Inertia::render('Admin/Settings');
    }
    public function acc(Student $student)
    {
        $student->user->syncRoles('diterima');
        return back();
    }
    public function cost()
    {
        $costs = CostCategory::all();
        return Inertia::render('Admin/Cost/Index', compact('costs'));
    }
    public function costEdit(CostCategory $cost)
    {
        return Inertia::render('Admin/Cost/Edit', compact('cost'));
    }
}
