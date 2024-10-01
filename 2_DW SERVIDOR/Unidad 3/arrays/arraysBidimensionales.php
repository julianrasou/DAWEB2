<?php

$a1 = array();
$a1[0] = array(90, 30, 40);
$a1[1] = array(50, 40, 10);
$a1[2] = array(10, 40, 10);
/*
$a1 = array();
$a1[] = array(90, 30, 40);
$a1[] = array(50, 40, 10);
$a1[] = array(10, 40, 10);
*/
echo "<br>".$a1[0][0]; // 90
echo "<br>".$a1[1][0]; // 50
echo "<br>".$a1[0][1]; // 30

$a1 = array("Carlos"=> array(90, 30, 40),"Tonto"=> array(50, 40, 10),"Lolo9"=> array(10, 40, 10));

echo "<pre>";
print_r($a1);
echo "<pre/>";

$a1 = array();
$a1[0] = array(90, 40);
$a1[1] = array(50, 40, 10);
$a1[2] = array(10);

echo "<pre>";
print_r($a1);
echo "<pre/>";

for($f = 0; $f < count($a1); $f++) { // Recorremos filas
    for($c = 0; $c < count($a1[$f]); $c++) { // Recorremos columnas
        
        echo $a1[$f][$c]." ";
        
    }
    echo "<br>";
}







?>