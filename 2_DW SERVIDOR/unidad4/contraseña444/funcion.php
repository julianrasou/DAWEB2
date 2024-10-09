<?php

function generarContraseña($min, $max, $tipo){

    $tamaño = mt_rand($min, $max);
    $contraseña = "";
    $letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    switch ($tipo) {
        case 'num':
            
            for($i = 1; $i <= $tamaño; $i++){
                $contraseña .= mt_rand(0,9);
            }

            break;
        
        case 'alfa':
            
            for($i = 1; $i <= $tamaño; $i++){
                $contraseña .= substr($letras,mt_rand(0,25),1);
            }

            break;

        case 'alfanum':
            
            for($i = 1; $i <= $tamaño; $i++){
                
                if(mt_rand(0,1) == 1){
                    $contraseña .= mt_rand(0,9);
                }else{
                    $contraseña .= substr($letras,mt_rand(0,25),1);
                }

            }
            
            break;
    }

    return $contraseña;

}