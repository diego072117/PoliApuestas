<?php

namespace App\Http\Requests\Apuesta;

use Illuminate\Foundation\Http\FormRequest;

class CreateApuesta extends FormRequest
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
            'id_usuarioCreador' => ['required', 'integer'],
            'nombreApuesta' => ['required', 'string','max:255'],
            'tipoDeporte' => ['required', 'string','max:255'],
            'equipoUno' => ['required', 'string','max:255'],
            'equipoDos' => ['required', 'string','max:255'],
            'monto' => ['required', 'numeric'],
            'equipoGanador' => ['nullable', 'string','max:255'],
        ];
    }

    public function messages(): array
    {
        return [
            'id_usuarioCreador.required' => 'El campo id_usuarioCreador es obligatorio.',

            'nombreApuesta.required' => 'El campo nombreApuesta es obligatorio.',
            'nombreApuesta.string' => 'El campo nombreApuesta debe ser una cadena de texto.',

            'equipoUno.required' => 'El campo equipoUno es obligatorio.',
            'equipoUno.string' => 'El campo equipoUno debe ser una cadena de texto.',

            'equipoUno.required' => 'El campo equipoUno es obligatorio.',
            'equipoUno.string' => 'El campo equipoUno debe ser una cadena de texto.',

            'equipoDos.required' => 'El campo equipoDos es obligatorio.',
            'equipoDos.string' => 'El campo equipoDos debe ser una cadena de texto.',

            'monto.required' => 'El campo monto es obligatorio.',
            'monto.numeric' => 'El campo monto debe ser un número.',
            
            'equipoGanador.string' => 'El campo equipoGanador debe ser una cadena de texto.',

        ];
    }
}
