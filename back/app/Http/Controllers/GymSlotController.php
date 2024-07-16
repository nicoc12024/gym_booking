<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSlotRequest;
use App\Http\Requests\StoreSlotRequest;
use App\Models\GymSlot;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Mail\SlotConfirmationMail;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GymSlotController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $user_id = $request->user()->id;
            $gymSlots = GymSlot::all();
            $userSlots = GymSlot::where("user_id", $user_id)->get();

            return response()->json([
                "status" => "true",
                "gymSlots" => $gymSlots,
                "userSlots" => $userSlots,
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error al obtener los slots: '.$e->getMessage());

            return response()->json([
                "status" => "false",
                "message" => "Hubo un error al obtener los slots. Por favor, inténtelo de nuevo más tarde."
            ], 500);
        }
    }

    public function store(StoreSlotRequest $request): JsonResponse
    {
        $user_id = $request->user()->id;
        $user = $request->user();
        $date = $request->date;
        $start_time = $request->start_time;

        try {
            return DB::transaction(function () use ($user_id, $user, $start_time, $date) {
                // Verificar si el usuario ya tiene un slot reservado en la fecha proporcionada
                $existingSlot = GymSlot::where('user_id', $user_id)
                    ->where('date', '=', $date)
                    ->lockForUpdate()
                    ->first();

                if ($existingSlot) {
                    return response()->json([
                        "status" => "false",
                        "message" => "Ya tienes un slot reservado para esta fecha. ¡Solo puedes reservar un slot por día!",
                    ], 400);
                }

                // Crear el nuevo slot
                $startTime = Carbon::createFromFormat('H:i:s', $start_time);
                $endTime = $startTime->copy()->addHour(); // Ajustar para 1 hora después

                $gymSlot = GymSlot::create([
                    'user_id' => $user_id,
                    'date' => $date,
                    'start_time' => $startTime->toTimeString(),
                    'end_time' => $endTime->toTimeString(),
                ]);

                Mail::to($user->email)->send(new SlotConfirmationMail($user, $date, $startTime->toTimeString()));

                return response()->json([
                    "message" => "Slot reservado exitosamente.",
                    "gymSlot" => $gymSlot,
                ], 201);
            });
        } catch (\Exception $e) {
            Log::error('Error al reservar slot: '.$e->getMessage());

            return response()->json([
                "status" => "false",
                "message" => "Hubo un error al reservar el slot. Por favor, inténtelo de nuevo más tarde."
            ], 500);
        }
    }

    public function deleteSlot(DeleteSlotRequest $request): JsonResponse
    {
        try {
            $user_id = $request->user()->id;
            $start_time = $request->start_time;
            $date = $request->date;

            // Buscar el slot basado en user_id, date y start_time
            $userSlot = GymSlot::where('user_id', $user_id)
                ->where('date', $date)
                ->where('start_time',$start_time)
                ->first();

            if ($userSlot) {
                $userSlot->delete();

                return response()->json([
                    "status" => "true",
                    "message" => "Slot eliminado exitosamente"
                ], 200);
            }

            return response()->json([
                "status" => "false",
                "message" => "No se encontró un slot para el usuario con la fecha y hora proporcionadas."
            ], 404);
        } catch (\Exception $e) {
            Log::error('Error al eliminar slot: '.$e->getMessage());

            return response()->json([
                "status" => "false",
                "message" => "Hubo un error al intentar eliminar el slot. Por favor, inténtelo de nuevo más tarde."
            ], 500);
        }
    }
}
