<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Student;
use App\Models\SettingPpdb;
use App\Models\CostCategory;
use Illuminate\Http\Request;
use App\Exports\StudentsExport;
use App\Models\SettingTimeline;
use App\Models\SettingApplication;
use Carbon\Carbon;
use Symfony\Contracts\Service\Attribute\Required;

class AdminController extends Controller
{
    function __construct()
    {
        $d = SettingPpdb::where('is_active', true)->first();
        $this->d = $d;
    }
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
            ->whereBetween('created_at', [$this->d->start_date, $this->d->end_date])
            ->orderByDesc('id')
            ->paginate(300)
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
            ->whereBetween('created_at', [$this->d->start_date, $this->d->end_date])
            ->orderByDesc('id')
            ->paginate(300)
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
        return Inertia::render('Admin/Students/Index', ['title' => 'Students', 'students' => $students, 'tahun' => $this->d]);
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

    public function costStudents()
    {
        $costs = CostCategory::all();
        $students = Student::whereNull('cost_categories_id')->get();
        $students_applied = Student::where('cost_categories_id', '!=', null)
            ->whereBetween('created_at', [$this->d->start_date, $this->d->end_date])
            ->paginate(300)
            ->through(function ($item) {
                $cost = CostCategory::find($item->cost_categories_id)->first()->name;
                return [
                    'id' => $item->id,
                    'name' => $item->full_name,
                    'wa' => $item->user->email,
                    'cost' => $cost
                ];
            });
        return Inertia::render('Admin/Cost/Students', compact('costs', 'students', 'students_applied'));
    }
    public function costApply(Request $request)
    {
        $s = Student::find($request->student_id);
        $s->update([
            'cost_categories_id' => $request->cost_categories_id
        ]);
        return redirect()->back()->with('message', 'Successfully applied');
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
    public function costCreate()
    {
        return Inertia::render('Admin/Cost/Create');
    }
    public function costStore(Request $request)
    {
        CostCategory::create($request->all());
        return redirect()->route('admin.cost.index')->with('message', 'Success, Add cost category');
    }
    public function costEdit(CostCategory $cost)
    {
        return Inertia::render('Admin/Cost/Edit', compact('cost'));
    }
    public function costUpdate(CostCategory $cost, Request $request)
    {
        $cost->update($request->except('id'));
        return redirect()->route('admin.cost.index')->with('message', "Edited cost category $request->name");
    }
    public function userDetail(User $user)
    {
        return Inertia::render('Admin/Students/Show', ['isReadOnly' => true, 'student' => $user->student]);
    }
    public function studentShow(Student $student)
    {
        return Inertia::render('Admin/Students/Show', ['isReadOnly' => true, 'student' => $student]);
    }
    public function studentEdit(Student $student)
    {
        return Inertia::render('Admin/Students/Show', ['isReadOnly' => false, 'student' => $student]);
    }
    public function studentUpdate(Student $student, Request $req)
    {
        $student->update($req->all());
        return redirect()->route('admin.students')->with('message', 'Success, Edited Student');
    }
    public function settings()
    {
        $set_ppdb = SettingPpdb::all();
        $set_timeline = SettingTimeline::all();
        $set_app = SettingApplication::all();
        return Inertia::render('Admin/Settings/Index', compact('set_ppdb', 'set_timeline', 'set_app'));
    }
    public function export()
    {
        $w = SettingPpdb::where('is_active', true)->first();
        return (new StudentsExport($w->start_date, $w->end_date))->download('students.xlsx');
    }
}
