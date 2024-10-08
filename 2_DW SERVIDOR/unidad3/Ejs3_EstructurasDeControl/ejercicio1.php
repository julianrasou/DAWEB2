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
         * EJERCICIO 1
         * TABLAS DE MULTIPLICAR:  
         * Escribir un script que escriba las tablas de multiplicar del 1 al 9
         */
        for($i = 1; $i <= 9; $i++){
            for($j = 1; $j <= 10; $j++){
                echo ($i * $j).' ';
            }
            echo '<br/>';
        }
        
        ?>
    </body>
</html>
