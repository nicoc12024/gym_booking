<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GymSlotController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register-user', [AuthController::class,'createUser']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);    
    Route::put('/update-user/{id}', [AuthController::class, 'updateUser']);
    Route::delete('/delete-user/{id}', [AuthController::class, 'deleteUser']);
    Route::post('/book-slot', [GymSlotController::class, 'store']);
    Route::delete('/delete-slot/{user_id}', [GymSlotController::class, 'deleteSlot']);
    Route::get('/gym-slots', [GymSlotController::class, 'index']);
});
