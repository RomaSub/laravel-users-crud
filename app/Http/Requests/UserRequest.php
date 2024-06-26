<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        $userId = $this->route('user') ? $this->route('user')->id : null;

        return [
            'email' => ['required', 'email', 'unique:users,email' . ($userId ? ",$userId" : '')],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'patronymic' => ['required', 'string', 'max:255'],
            'gender' => ['required', 'in:male,female'],
            'birth_date' => ['required', 'date'],
            'about' => ['nullable', 'string'],
            'state' => 'active',
        ];
    }
}
