<?php

namespace App\Http\Requests\ParticipanteApuesta;

use Illuminate\Foundation\Http\FormRequest;

class CreateParticipanteApuesta extends FormRequest
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
            'id_usuario' => 'required|exists:usuarios,id',
            'id_apuesta' => 'required|exists:apuestas,id',
            'valorApostado' => 'required|numeric|min:0',
            'equipoApostado' => 'required|string|max:255',
        ];
    }

    public function messages(): array
{
    return [
        'id_usuario.required' => 'El campo id_usuario es obligatorio.',
        'id_usuario.exists' => 'El id_usuario proporcionado no existe en la tabla usuarios.',

        'id_apuesta.required' => 'El campo id_apuesta es obligatorio.',
        'id_apuesta.exists' => 'El id_apuesta proporcionado no existe en la tabla apuestas.',

        'valorApostado.required' => 'El campo valorApostado es obligatorio.',
        'valorApostado.numeric' => 'El campo valorApostado debe ser un número.',
        'valorApostado.min' => 'El campo valorApostado debe ser mayor o igual a cero.',
        
        'equipoApostado.required' => 'El campo equipoApostado es obligatorio.',
        'equipoApostado.string' => 'El campo equipoApostado debe ser una cadena de texto.',
    ];
}
}
