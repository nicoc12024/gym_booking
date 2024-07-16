<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Mail\WelcomeMail;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{

    public function createUser(CreateUserRequest $request): JsonResponse
    {
        $user = User::create([
            'name' => $request->name,
            'last_name' => $request->last_name,
            'apartment_letter' => $request->apartment_letter,
            'floor' => $request->floor,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Mail::to($user->email)->send(new WelcomeMail ($user));

        return response()->json([
            "status" => "true",
            "message" => "User created successfully",
            "token" => $user->createToken("API TOKEN")->plainTextToken,
            "user" => $user,
        ], 201);
}


    public function login(LoginRequest $request): JsonResponse
    {
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json([
            "status" => "false",
            "message" => "Email & password do not match with our records"
        ], 401);
        }

        $user = User::where("email", $request->email)->first();
 
        return response()->json([
            "status" => "true",
            "message" => "User logged in successfully",
            "token" => $user->createToken("API TOKEN")->plainTextToken,
            "user" => $user,
        ], 200);       
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->tokens()->delete(); 

        return response()->json([
            "status" => "true",
            "message" => "User logged out successfully"
        ], 200);
    }

    public function updateUser(UpdateUserRequest $request, $id): JsonResponse
    {
        $user = User::findOrFail($id);

        $user->update($request->only([
            'name',
            'last_name',
            'apartment_letter',
            'floor',
            'phone_number'
        ]));
    
        return response()->json([
            "status" => "true",
            "message" => "User updated successfully",
            "user" => $user,
        ], 200);
    }

    public function deleteUser(Request $request): JsonResponse
    {
        $user = User::findOrFail($request->id);

        $user->delete();

        return response()->json([
            "status" => "true",
            "message" => "User deleted successfully"
        ], 200);
    }

}
