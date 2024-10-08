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
         * EJERCICIO 2
         * Escribe un script que imprima una tabla de multiplicar, estando el
         * número almacenado en una variable.
         */
        $num = 5;
        echo "TABLA DE MULTIPLICAR DEL $num: <br/>";
        for($i = 1; $i <=10; $i++){
            print "$num X $i = ".($num * $i).'<br/>';
            // printf("%40s","$num X $i = ".($num * $i).'<br/>');
        }
        
        ?>
    </body>
</html>
