<?php

namespace App\Http\Requests\ParticipantesRifa;

use Illuminate\Foundation\Http\FormRequest;

class ParticipantesRifa extends FormRequest
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
            'id_rifa' => 'required|exists:rifas,id',
            'numeroBoleta' => 'required|integer',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'id_usuario.required' => 'El campo id_usuario es obligatorio.',
            'id_usuario.exists' => 'El usuario seleccionado no existe.',

            'id_rifa.required' => 'El campo id_rifa es obligatorio.',
            'id_rifa.exists' => 'La rifa seleccionada no existe.',

            'numeroBoleta.required' => 'El campo numero_boleta es obligatorio.',
            'numeroBoleta.integer' => 'El número de boleta debe ser un valor entero.',
        ];
    }
}
