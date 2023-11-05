<?php

namespace App\Http\Requests\Apuesta;

use Illuminate\Foundation\Http\FormRequest;

class CreateBet extends FormRequest
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
            'deporte' => ['required', 'string'],
            'campeonato' => ['required', 'string'],
            'marcador' => ['required', 'numeric'],
            'valorMinimo' => ['required', 'numeric', 'regex:/^\d+(\.\d{1,2})?$/'],
            'valorMaximo' => ['required', 'numeric', 'regex:/^\d+(\.\d{1,2})?$/'],
            'ganador' => ['required', 'numeric'],
            'valorObtenido' => ['required', 'numeric', 'regex:/^\d+(\.\d{1,2})?$/'],
            'estado' => ['required', 'string'],
            'totalParticipantes' => ['required', 'numeric'],

        ];
    }

    public function messages()
    {
	return [
        'deporte.required' => 'El campo deporte es requerido.',
        'deporte.string' => 'El campo deporte debe ser una cadena de texto.',

        'campeonato.required' => 'El campo campeonato es requerido.',
        'campeonato.string' => 'El campo campeonato debe ser una cadena de texto.',

        'marcador.required' => 'El marcador es requerido.',
        'marcador.numeric' => 'El marcador debe ser un número válido.',

        'valorMinimo.required' => 'El valor mínimo es requerido.',
        'valorMinimo.numeric' => 'El valor mínimo debe ser un número válido.',
        'valorMinimo.regex' => 'El valor mínimo debe ser un número decimal con un máximo de dos decimales.',

        'valorMaximo.required' => 'El valor máximo es requerido.',
        'valorMaximo.numeric' => 'El valor máximo debe ser un número válido.',
        'valorMaximo.regex' => 'El valor máximo debe ser un número decimal con un máximo de dos decimales.',

        'ganador.required' => 'El ganador es requerido.',
        'ganador.numeric' => 'El ganador debe ser un número válido.',

        'valorObtenido.required' => 'El valor obtenido es requerido.',
        'valorObtenido.numeric' => 'El valor obtenido debe ser un número válido.',
        'valorObtenido.regex' => 'El valor obtenido debe ser un número decimal con un máximo de dos decimales.',

        'estado.required' => 'El estado es requerido.',
        'estado.string' => 'El estado debe ser una cadena de texto.',

        'totalParticipantes.required' => 'El total de participantes es requerido.',
        'totalParticipantes.numeric' => 'El total de participantes debe ser un número válido.',
    ];
    }
}
