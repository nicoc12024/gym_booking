<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;


Route::get("/", [MailController::class, "index"])->name("index");
