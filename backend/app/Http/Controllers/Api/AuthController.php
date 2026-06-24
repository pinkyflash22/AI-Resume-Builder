<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        //get the validated data from the request
        $credentials = $request->validated();
        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
        ], 201);
    }

    public function login(LoginRequest $request) //handles login request controller
    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = Auth::user();


        $token = $user->createToken('remember_token')->plainTextToken; //create token para maka access ngani
        return response()->json([
            'message' => 'Login Successful',
            'token' => $token,
            'user' => $user,
        ], 200);  //200 and up is success, 400 and up is error, 500 and up is server error
    }

    public function user(Request $request)
    {
        //
    }

    public function logout(Request $request)
    {
        //
    }
}
