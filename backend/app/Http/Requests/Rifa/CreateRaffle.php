<?php

namespace App\Http\Requests\Apuesta;

use Illuminate\Foundation\Http\FormRequest;

class CreateReffle extends FormRequest
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
            'numeroParticipantes' => ['required', 'string'],
            'estado' => ['required', 'string'],
            'ganador1' => ['required', 'numeric'],
            'ganador2' => ['required', 'numeric'],
            'premio1' => ['required', 'string'],
            'premio2' => ['required', 'string'],
        ];
    }

    public function messages()
    {
	return [
        'nombreRifa.required' => 'El nombre de la rifa es requerido.',
        'nombreRifa.string' => 'El nombre de la rifa debe ser una cadena de texto.',

        'numeroParticipantes.required' => 'El número de participantes es requerido.',
        'numeroParticipantes.string' => 'El número de participantes debe ser una cadena de texto.',

        'estado.required' => 'El estado es requerido.',
        'estado.string' => 'El estado debe ser una cadena de texto.',

        'ganador3.required' => 'El tercer ganador es requerido.',
        'ganador3.numeric' => 'El tercer ganador debe ser un número válido.',

        'ganador2.required' => 'El segundo ganador es requerido.',
        'ganador2.numeric' => 'El segundo ganador debe ser un número válido.',

        'premio1.required' => 'El primer premio es requerido.',
        'premio1.string' => 'El primer premio debe ser una cadena de texto.',

        'premio2.required' => 'El segundo premio es requerido.',
        'premio2.string' => 'El segundo premio debe ser una cadena de texto.',
    ];
    }
}
