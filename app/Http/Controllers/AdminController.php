<?php

namespace App\Http\Controllers;

use App\Models\CostCategory;
use App\Models\SettingApplication;
use App\Models\SettingPpdb;
use App\Models\SettingTimeline;
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
            ->withQueryString()
            ->through(function ($item) {
                if ($item->roles[0]->name === 'membuat_akun') {
                    $aktifkan = true;
                } else {
                    $aktifkan = false;
                }
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'email' => $item->email,
                    'aktifkan' => $aktifkan,
                    'role' => $item->roles[0]->name,
                ];
            });
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
            ->withQueryString()
            ->through(function ($item) {
                $status = $item->user->roles[0]->name;
                if ($status === 'diterima') {
                    $status = 'acc';
                } else if ($status === 'ditolak') {
                    $status = 'reject';
                } else {
                    $status = 'menunggu';
                }
                return [
                    'id' => $item->id,
                    'full_name' => $item->full_name,
                    'school_origin' => $item->school_origin,
                    'created_at' => $item->created_at,
                    'status' => $status,
                ];
            });

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

    public function accOrReject(Student $student, $acc)
    {
        if ($acc === "true") {
            $student->user->syncRoles('diterima');
        } else {
            $student->user->syncRoles('ditolak');
        }
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
    public function costUpdate(CostCategory $cost, Request $request)
    {
        $cost->update($request->except('id'));
        return redirect()->route('admin.cost.index')->with('message', 'Edited cost category');
    }
    public function userDetail(User $user)
    {
        return Inertia::render('Admin/Students/Show', ['student' => $user->student]);
    }
    public function studentShow(Student $student)
    {
        return Inertia::render('Admin/Students/Show', ['student' => $student]);
    }
    public function settings()
    {
        $set_ppdb = SettingPpdb::all();
        $set_timeline = SettingTimeline::all();
        $set_app = SettingApplication::all();
        return Inertia::render('Admin/Settings/Index', compact('set_ppdb', 'set_timeline', 'set_app'));
    }
}
