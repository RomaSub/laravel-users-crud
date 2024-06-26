<?php

namespace App\States;

use App\Models\User;
use Spatie\ModelStates\State;

abstract class UserState extends State
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public static $states = [
        Active::class,
        Banned::class,
    ];

    public function isActive()
    {
        return $this->is(Active::class);
    }

    public function isBanned()
    {
        return $this->is(Banned::class);
    }
        /*public static function config(): StateConfig*/
    /*{*/
    /*    return parent::config()*/
    /*        ->default(Active::class)*/
    /*        ->allowTransition(Active::class, Banned::class)*/
    /*        ->allowTransition(Banned::class, Active::class);*/
    /*}*/
}
