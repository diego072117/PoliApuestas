<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateNewUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'numeroDocumento' => ['required','numeric','unique:usuarios'],
            'nombre' => ['required','string'],
            'correo' =>  ['required','email','unique:usuarios'],
            'telefono' => ['required','string'],
            'password' => ['required','string'],
        ];
    }

    // public function messages(){

    //     return [
    //         'numeroDocumento.required' => 'El documento es requerido.',
    //         'numeroDocumento.numeric' => 'documento no valido.',
    //         'numeroDocumento.unique' => 'documento invalido(ya esxiste)',

    //     ];

    // }
}
