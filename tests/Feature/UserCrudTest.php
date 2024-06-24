<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class UserCrudTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function displayUsers()
    {
        User::factory()->count(5)->create();

        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('users');
    }

    /** @test */
    public function createUser()
    {
        $response = $this->post('/users', [
            'email' => 'test@example.com',
            'first_name' => 'Иван',
            'last_name' => 'Иванов',
            'patronymic' => 'Иванович',
            'gender' => 'male',
            'birth_date' => '1990-01-01',
            'about' => 'Описание пользователя',
        ]);

        $response->assertRedirect('/');
        $this->assertDatabaseHas('users', [
            'email' => 'test@example.com',
            'first_name' => 'Иван',
        ]);
    }

    /** @test */
    public function showUser()
    {
        $user = User::factory()->create();

        $response = $this->get("/users/{$user->id}");

        $response->assertStatus(200);
        $response->assertSee($user->email);
    }

    /** @test */
    public function updateUser()
    {
        $user = User::factory()->create();

        $response = $this->put("/users/{$user->id}", [
            'email' => 'updated@example.com',
            'first_name' => 'Мария',
            'last_name' => 'Сидорова',
            'patronymic' => 'Петровна',
            'gender' => 'female',
            'birth_date' => '1990-01-01',
            'about' => 'Обновленное описание пользователя',
        ]);

        $response->assertRedirect('/');
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'email' => 'updated@example.com',
            'first_name' => 'Мария',
        ]);
    }

    /** @test */
    public function deleteUser()
    {
        $user = User::factory()->create();

        $response = $this->delete("/users/{$user->id}");

        $response->assertRedirect('/');
        $this->assertDatabaseMissing('users', [
            'id' => $user->id,
        ]);
    }
}
