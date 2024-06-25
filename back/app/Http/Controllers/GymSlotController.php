<?php

namespace App\Http\Controllers;

use App\Models\GymSlot;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


class GymSlotController extends Controller
{

    public function index(Request $request): JsonResponse
    {
        $user_id = $request->user()->id;
        $gymSlots = GymSlot::all();
        $userSlot = GymSlot::where("user_id", $user_id)->first();

        return response()->json([
            "status" => "true",
            "gymSlots" => $gymSlots,
            "userSlot" => $userSlot,
        ], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            "date" => "required|date",
            "start_time" => "required|date_format:H:i:s",
        ]);

        $user_id = $request->user()->id;

        $gymSlot = GymSlot::create([
            'user_id' => $user_id,
            'date' => $request->date,
            'start_time' => $request->start_time,
            'end_time' => date('H:i', strtotime($request->start_time) + 3600) // Suma 1 hora al tiempo de inicio
        ]);

        return response()->json([
            "message" => "Slot reservado exitosamente.",
            "gymSlot" => $gymSlot
        ], 201);
    }

    public function deleteSlot(Request $request): JsonResponse
    {
        $user_id = $request->user()->id;

        $userSlot = GymSlot::where('user_id', $user_id)->first();

        if ($userSlot) {
            $userSlot->delete();

            return response()->json([
                "status" => "true",
                "message" => "Slot deleted successfully"
            ], 200);
        }

        return response()->json([
            "status" => "false",
            "message" => "No slot found for the user."
        ], 404);
    }
}
