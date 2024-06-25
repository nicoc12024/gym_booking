<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'sometimes|string|max:35',
            'last_name' => 'sometimes|string|max:35',
            'apartment_letter' => 'sometimes|string|max:1',
            'floor' => 'sometimes|string|max:2',
            'phone_number' => 'sometimes|string|max:15',
        ];
    }
}
