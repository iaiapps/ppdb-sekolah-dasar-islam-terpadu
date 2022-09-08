<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFormulirRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'full_name' => 'required',
            'nick_name' => 'required',
            'school_origin' => 'required',
            'gender' => 'required',
            'place_birth' => 'required',
            'date_birth' => 'required',
            // 'special_needs' => 'required',
            // 'saudara_kandung_di_sdit' => 'required',
            // 'living' => 'required',
            // 'address' => 'required',
            // 'rtrw' => 'required',
            // 'postalcode' => 'required',
            // 'desa' => 'required',
            // 'kecamatan' => 'required',
            // 'kota' => 'required',
            // 'provinsi' => 'required',
            'dad' => 'required',
            // 'dad_edu' => 'required',
            // 'dad_occupation' => 'required',
            // 'dad_income' => 'required',
            'dad_phone' => 'required',
            // 'mom' => 'required',
            // 'mom_edu' => 'required',
            // 'mom_occupation' => 'required',
            // 'mom_income' => 'required',
            'mom_phone' => 'required',
        ];
    }
}
