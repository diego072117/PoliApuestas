<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class CreateUser extends FormRequest
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
            'tipoDocumento' => ['required', 'string'],
            'numeroDocumento' => ['required', 'numeric', 'unique:usuarios'],
            'name' => ['required', 'string'],
            'email' =>  ['required', 'email', 'unique:usuarios'],
            'rol' => ['required', 'string'],
            'telefono' => ['required', 'string'],
            'password' => ['required', 'string'],
        ];
    }

    public function messages()
    {

        return [
            'tipoDocumento.required' => 'El tipo de documento es requerido.',
            'tipoDocumento.string' => 'El tipo de documento debe ser una cadena de texto.',

            'numeroDocumento.required' => 'El documento es requerido.',
            'numeroDocumento.numeric' => 'El documento debe ser un valor numérico.',
            'numeroDocumento.unique' => 'El documento ya está registrado en la base de datos.',

            'name.required' => 'El nombre es requerido.',
            'name.string' => 'El nombre debe ser una cadena de texto.',

            'email.required' => 'El correo es requerido.',
            'email.email' => 'El correo debe tener un formato válido.',
            'email.unique' => 'El correo ya está registrado en la base de datos.',

            'rol.required' => 'El rol es requerido.',
            'rol.numeric' => 'El rol debe ser una cadena de texto.',

            'telefono.required' => 'El teléfono es requerido.',
            'telefono.string' => 'El teléfono debe ser una cadena de texto.',

            'password.required' => 'La contraseña es requerida.',
            'password.string' => 'La contraseña debe ser una cadena de texto.',

        ];
    }
}
