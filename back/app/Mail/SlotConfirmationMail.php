<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SlotConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $slot_date;
    public $slot_time;

    public function __construct($user, $slot_date, $slot_time)
    {
        $this->user = $user;
        $this->slot_date = $slot_date;
        $this->slot_time = $slot_time;
    }

    public function build()
    {
        return $this->view('slot_confirmation')
                    ->subject('Confirmación de Reserva')
                    ->with([
                        'user' => $this->user,
                        'slot_date' => $this->slot_date,
                        'slot_time' => $this->slot_time,
                    ]);
    }
}
