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
         * EJERCICIO 4
         * Realiza un script que imprima el triángulo invertido para un número comprendido 
         * entre 1 y 25.
         * Almacenaremos el valor de ese número en una variable.
         */
        $num = 10;
        for($i = $num; $i >= 0; $i--){
            for($j = 1; $j <= $i; $j++){
                echo "$j ";
            }
            echo '<br/>';
        }
        
        ?>
    </body>
</html>
