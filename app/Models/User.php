<?php

namespace App\Models;

use App\States\Active;
use App\States\Banned;
use App\States\UserState;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\ModelStates\HasStates;

class User extends Model
{
    use HasFactory;
    use HasStates;
    use SoftDeletes;

    protected $fillable = [
        'email',
        'first_name',
        'last_name',
        'patronymic',
        'gender',
        'birth_date',
        'about',
    ];

    protected function statusStates(): void
    {
        $this->addState('state', UserState::class)
            ->default(Active::class)
            ->allowTransition(Active::class, Banned::class)
            ->allowTransition(Banned::class, Active::class);
    }

    protected $casts = [
        'state' => UserState::class,
    ];
}
