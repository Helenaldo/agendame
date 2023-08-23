<?php

namespace App\Exceptions;

use Exception;

class InvalidAuthenticationExecption extends Exception
{
    //Erro ao se autenticar

    protected $message = 'Login Inválido';


    public function render() {
        return response()->json([
            'error' => class_basename($this),
            'message' => $this->getMessage(),
        ], 400);
    }
}
