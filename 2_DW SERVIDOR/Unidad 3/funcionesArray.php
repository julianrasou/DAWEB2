<?php

$a1 = array(1, 30, 45, 5, 63, 10);

echo "<br>Tamaño del array: ".count($a1);
echo "<br>Tamaño del array: ".sizeof($a1);

echo "<br>Buscar un elemento: ".in_array(30, $a1);
echo "<br>Buscar un elemento: ".in_array(8, $a1);

echo "<br>Ordenar ascendente con asociación de índices.";
echo "<pre>";

asort($a1);
print_r($a1);

echo "</pre>";
    
echo "<br>Ordenar descendente con asociación de índices.";
echo "<pre>";

arsort($a1);
print_r($a1);

echo "</pre>";

echo "<br>Ordenar ascendente sin asociación de índices.";
echo "<pre>";

sort($a1);
print_r($a1);

echo "</pre>";

echo "<br>Ordenar descendente sin asociación de índices.<br>";
echo "<pre>";

rsort($a1);
print_r($a1);

echo "<br>Recuperar los valores del array.<br><br>";
$a2 = array_values($a1);
print_r($a2);
echo "<br>";

$a3 = array("nome"=> "Julián <3", "apelido"=> "Ramos Souza");
$a4 = array_values($a3);
print_r($a4);
echo "<br>";
$a5 = array_keys($a3);
print_r($a5);

for($i = 0; $i < count($a4); $i++){
    echo "<br>".$a5[$i]." - ".$a4[$i];
}
echo("<br><br>");

ksort($a3);
print_r($a3);










echo "</pre>";
 
?>