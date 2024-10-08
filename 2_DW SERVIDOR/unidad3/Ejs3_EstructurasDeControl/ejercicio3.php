<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHPWebPage.php to edit this template
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        
        /*
         * EJERCICIO 3
         * Escribe un script que guarde en una variable un número entre 1 y 100 y muestre por pantalla
         * un triángulo de asteriscos.
         * Si el número está fuera del asterisco, muestra "El número tiene que estar comprendido entre
         * 1 y 100.".
         */
        $num = 40;
        if($num < 1 || $num > 100){
            echo 'El número tiene que estar comprendido entre 1 y 100.';
        }else {
            for($i = 1; $i <= $num; $i++){
                for($j = 1; $j <= $i; $j++){
                    echo '*';
                }
                echo '<br/>';
            } 
        }
        
        
        ?>
    </body>
</html>
