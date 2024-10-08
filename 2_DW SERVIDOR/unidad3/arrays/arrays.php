<?php
echo "<pre>";

// Declaración de un array vacío
$a1 = array();
// Inicializamos usando el índice
$a1[0] = 9.9;
$a1[1] = 5.5;
$a1[2] = 5.5;

print_r($a1);

// Declaración de un array vacío
$a2 = array();
// Inicializamos sin el índice
$a2[] = 99;
$a2[] = 5.5;
$a2[] = 5.5;

print_r($a2);

// Declaramos e inicializamos
$a3 = array(4.0, 5, 9.5);

print_r($a3);

// Recuperación de elementos del array
echo "<br/>".$a1[0]; // Existe el elemento
//echo "<br/>".$a1[10]; // No existe el elemento
//echo "<br/>".$a1[]; // Fatal error: Cannot use [] for reading

// Recorrer el array
for($i = 0; $i < count($a1); $i ++){
    echo " ".$a1[$i];
}

// Array con elementos de distinto tipo
$a4 = array("Hola", 4);
echo "<br/><br/>".$a4[0]." el tipo del dato es ".gettype($a4[0]);
echo "<br/>".$a4[1]." el tipo del dato es ".gettype($a4[1])."<br>";

// Asignar un valor a posiciones que no existen
$a2[10] = 420.69;
print_r($a2);
$a2[] = 10;
print_r($a2);
$a2[3] = 69;
$a2[] = 420;
print_r($a2);

//Tamaño del array
echo "Tamaño ".count($a2)."<br/>";
echo "Tamaño ".sizeof($a2)."<br/>";

// Visualizar con foreach
foreach ($a2 as $j){
    echo "$j ";
}

// Recuperar los índices ARRAY_KEYS
$claves = array_keys($a2);
print_r($claves);

for($i = 0; $i < count($claves); $i++){
    echo $a2[$claves[$i]]." ";
}

// Elimina un elemento del array
unset($a2[10]);
unset($a2[1]);
print_r($a2);

// Asociar posiciones a los elmentos
$a5 = array(1, 2, 5, "10"=> 15, "4"=> 20, "2"=> 30);
print_r($a5); // El valor de 5 es sobreescrito

echo "</pre>";

?>




























































































