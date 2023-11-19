<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUser extends FormRequest
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
            'name' => ['required', 'string'],
            'secondName' => ['nullable','string'],
            'lastName' => ['required', 'string'],
            'secondLastName' => ['nullable','string'],
            'email' =>  ['required', 'email'],
            'telefono' => ['required', 'string'],
        ];
    }

    public function messages()
    {

        return [
            'name.required' => 'El nombre es requerido.',
            'name.string' => 'El nombre debe ser una cadena de texto.',

            'secondName.string' => 'El segundo nombre debe ser una cadena de texto.',

            'lastName.required' => 'El apellido es requerido.',
            'lastName.string' => 'El apellido debe ser una cadena de texto.',

            'secondLastName.string' => 'El segundo apellido debe ser una cadena de texto.',

            'email.required' => 'El correo es requerido.',
            'email.email' => 'El correo debe tener un formato válido.',

            'telefono.required' => 'El teléfono es requerido.',
            'telefono.string' => 'El teléfono debe ser una cadena de texto.',


        ];
    }
}
