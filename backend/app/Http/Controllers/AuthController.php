<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('Personal Access Token')->accessToken;
            return response()->json([
                'token' => $token,
            ], 200);
        } 

        return response()->json([
            'error' => "Invalid email or password"
        ], 401);
    }

    public function register(RegistrationRequest $request) 
    {
        $validatedData = $request->validated();

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password'])
        ]);

        $token = $user->createToken('Personal Access Token')->accessToken;

        return response()->json([
            'token' => $token,
        ], 201);
    }

    public function profile()
    {

    }

    public function logout()
    {

    }
}
