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
            'numeroDocumento' => ['required', 'numeric', 'unique:usuarios'],
            'nombre' => ['required', 'string'],
            'correo' =>  ['required', 'email', 'unique:usuarios'],
            'rol' => ['required', 'string'],
            'edad' => ['required', 'numeric'],
            'telefono' => ['required', 'string'],
            'password' => ['required', 'string'],
        ];
    }

    public function messages()
    {

        return [
            'numeroDocumento.required' => 'El documento es requerido.',
            'numeroDocumento.numeric' => 'El documento debe ser un valor numérico.',
            'numeroDocumento.unique' => 'El documento ya está registrado en la base de datos.',

            'nombre.required' => 'El nombre es requerido.',
            'nombre.string' => 'El nombre debe ser una cadena de texto.',

            'correo.required' => 'El correo es requerido.',
            'correo.email' => 'El correo debe tener un formato válido.',
            'correo.unique' => 'El correo ya está registrado en la base de datos.',

            'rol.required' => 'El rol es requerido.',
            'rol.numeric' => 'El rol debe ser una cadena de texto.',

            'edad.required' => 'La edad es requerida.',
            'edad.string' => 'La edad debe ser un valor numérico.',

            'telefono.required' => 'El teléfono es requerido.',
            'telefono.string' => 'El teléfono debe ser una cadena de texto.',

            'password.required' => 'La contraseña es requerida.',
            'password.string' => 'La contraseña debe ser una cadena de texto.',

        ];
    }
}
