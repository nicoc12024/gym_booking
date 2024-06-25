<?php

namespace App\Http\Controllers;

use App\Models\GymSlot;
use Illuminate\Http\Request;

class GymSlotController extends Controller
{
    public function store(Request $request)
    {
        // Validar los datos de la solicitud
        $request->validate([
            "date" => "required|date",
            "start_time" => "required|date_format:H:i",
        ]);

        // Obtener el ID del usuario autenticado
        $user_id = $request->user()->id;

        // Verificar si ya existe un slot reservado para la misma fecha y hora
        $existingSlot = GymSlot::where('date', $request->date)
            ->where('start_time', $request->start_time)
            ->first();

        if ($existingSlot) {
            return response()->json([
                'message' => 'Imposible reservar el slot. Ya está ocupado por otro usuario.',
            ], 409);
        }

        // Crear el nuevo registro de reserva en la base de datos
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

    public function cancel(Request $request)
    {
        // Validar los datos de la solicitud
        $request->validate([
            "date" => "required|date",
            "start_time" => "required|date_format:H:i",
        ]);

        // Obtener el ID del usuario autenticado
        $user_id = $request->user()->id;

        // Verificar si existe una reserva del usuario para la fecha y hora proporcionadas
        $existingSlot = GymSlot::where('date', $request->date)
            ->where('start_time', $request->start_time)
            ->where('user_id', $user_id)
            ->first();

        if ($existingSlot) {
            $existingSlot->delete();
            return response()->json([
                'message' => 'Reserva cancelada exitosamente.',
            ], 200);
        }

        return response()->json([
            'message' => 'No se encontró ninguna reserva para cancelar en la fecha y hora proporcionadas.',
        ], 404);
    }
}
