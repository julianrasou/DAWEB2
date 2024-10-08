<?php
    
    
    function genIp($letra){
        if($letra == 'A'){
            return "10.".rand(0, 255).".".rand(0, 255).".".rand(0, 255);
        }else if($letra == 'B'){
            return "172.".rand(16, 31).".".rand(0, 255).".".rand(0, 255);
        }else if($letra == 'C'){
            return "192.168.".rand(0, 255).".".rand(0, 255);
        }else return "CARACTER INVÁLIDO";

    }




?>