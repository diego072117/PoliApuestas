<?php

namespace App\Http\Requests\Rifa;

use Illuminate\Foundation\Http\FormRequest;

class CreateRifa extends FormRequest
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
            'nombreRifa' => ['required', 'string'],
            'descripcion' => ['nullable', 'string'],
            'id_usuarioCreador' => ['required', 'integer'],
            'boletasTotales' => ['required', 'integer'],
            'valorBoleta' => ['required', 'integer'],
            'primerPremio' => ['required'],
            'segundoPremio' => ['required'],
            'estado' => ['string'],
            'primerGanador' => ['integer', 'nullable'],
            'segundoGanador' => ['integer', 'nullable'],
        ];
    }

    public function messages()
    {
        return [
            'nombreRifa.required' => 'El nombre de la rifa es requerido.',
            'nombreRifa.string' => 'El nombre de la rifa debe ser una cadena de texto.',

            'descripcion.string' => 'La descripción de la rifa debe ser una cadena de texto.',

            'id_usuarioCreador.required' => 'El ID del usuario creador es requerido.',
            'id_usuarioCreador.integer' => 'El ID del usuario creador debe ser un número entero válido.',

            'boletasTotales.required' => 'La cantidad total de boletas es requerida.',
            'boletasTotales.integer' => 'La cantidad total de boletas debe ser un número entero válido.',

            'valorBoleta.required' => 'El valor de la boleta es requerido.',
            'valorBoleta.integer' => 'El valor de la boleta debe ser un número entero válido.',

            'primerPremio.required' => 'El primer premio es requerido.',

            'segundoPremio.required' => 'El segundo premio es requerido.',

            'estado.string' => 'El estado de la rifa debe ser una cadena de texto.',

            'primerGanador.integer' => 'El ID del primer ganador debe ser un número entero válido.',

            'segundoGanador.integer' => 'El ID del segundo ganador debe ser un número entero válido.',
        ];
    }
}
