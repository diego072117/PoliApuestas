<?php

namespace App\Http\Requests\Transaccion;

use Illuminate\Foundation\Http\FormRequest;

class CreateTransaccion extends FormRequest
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
            // 'id_usuario' => ['required', 'exists:usuarios,id'],
            'monto_transaccion' => ['required', 'numeric'],

        ];
    }
    public function messages()
    {
        return[
            // 'id_usuario.required' => 'Usuario requerido',
            
            'monto_transaccion.required' => 'Monto requerido',
            'monto_transaccion.numeric' => 'Monto debe ser numerico',
        ];
    }
}
