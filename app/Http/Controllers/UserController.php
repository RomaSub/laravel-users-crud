<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->paginate(15);

        return inertia('Home', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    // Измените тип запроса на UserRequest
    public function store(UserRequest $request)
    {
        $fields = $request->validated();

        User::create($fields);

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return inertia('Show', ['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia('Edit', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    // Измените тип запроса на UserRequest
    public function update(UserRequest $request, User $user)
    {
        $fields = $request->validated();

        $user->update($fields);

        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect('/');
    }
}
