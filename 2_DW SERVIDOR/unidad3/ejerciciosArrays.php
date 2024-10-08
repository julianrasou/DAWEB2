<?php

// EJERCICIO     1: Dado el siguiente array:
$dia = array( "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado");

// Resultado de ejecutar la sentencia:
echo $dia[0]; //domingo

// Resultado de ejecutar las sentencias: 
$dia[5]= "viernes";
print_r($dia);   // Array ( [0] => domingo [1] => lunes [2] => martes [3] => miercoles [4] => jueves [5] => viernes [6] => sabado )

// Resultado de ejecutar las sentencias:
$dia[7]= "viernes";
print_r($dia);   // Array ( [0] => domingo [1] => lunes [2] => martes [3] => miercoles [4] => jueves [5] => viernes [6] => sabado [7] => viernes )

// EJERCICIO 2: Dado el siguiente array:
$a = array('a', 3 => 'b', 1 => 'c', 'd');

// Resultado de ejecutar la sentencia:
// echo $a[2]; // Warning: Undefined array key 2 in C:\xampp\htdocs\ejerciciosArrays.php on line 21

// Resultado de ejecutar la sentencia:
echo $a[4]; // d

// EJERCICIO 3: Dado el siguiente array:
$x = array("A", "B", 1 => "C", "D", 2 => "E");

// Resultado de ejecutar la sentencia:
echo count($x); // 3



$cualificacions = array(9.8, 6.1, 3.8);
echo $cualificacions[10]; // Warning: Undefined array key 10 in C:\xampp\htdocs\ejerciciosArrays.php on line 35


?>