<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => $request->get('password'),
        ]);

        Auth::login($user);

        $token = $user->createToken('Token Name')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token,
        ];
    }

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = $request->user();

            Auth::login($user);

            $user->tokens()
                ->where('name', 'Token Name')
                ->delete();
            $token = $user->createToken('Token Name')->plainTextToken;

            return [
                'token' => $token,
                'user' => $user,
            ];
        } else {
            return response()->json([
                'message' => 'Неверный емейл, или пароль'
            ], 400);
        }
    }

    public function logout(Request $request)
    {
        Session::flush();
        Auth::logout();

        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    }
}
