<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->paginate(10);

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
    public function store(Request $request)
    {
        $fields = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'birth_date' => ['required'],
            'about' => ['required'],
        ]);

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
    public function update(Request $request, User $user)
    {
        $fields = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'birth_date' => ['required'],
            'about' => ['required'],
        ]);

        $user->update($fields);

        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect('/'); //->with('message', 'The user has been successfully deleted!');
    }
}
