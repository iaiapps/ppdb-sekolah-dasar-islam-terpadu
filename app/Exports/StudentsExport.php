<?php

namespace App\Exports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;

class StudentsExport implements FromQuery
{
    use Exportable;

    public function __construct($start, $end)
    {
        $this->start = $start;
        $this->end = $end;
    }

    public function query()
    {
        $s = Student::query()->whereBetween('created_at', [$this->start, $this->end]);
        return $s;
    }
}
