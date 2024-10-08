<?php
/*
EJERCICIO 1
Declara una constante tamaño de valor 20 que va a representar el tamaño máximo del vector.
Declara un vector e inicialízalo ascendente con números enteros desde 1 hasta el tamaño.
Visualízalo con foreach. Ordénalo descendentemente y visualízalo con for.
*/
echo "<h3>Ejercicio 1</h3>";
$tamaño = 20;
$a1 = array();
for($i = 1; $i <= $tamaño; $i++) $a1[] = $i;

foreach($a1 as $valor){
    echo $valor." ";
}
echo "<br>";
rsort($a1);
for($i = 0; $i < count($a1); $i++){
    echo $a1[$i]." ";
}




/*
EJERCICIO 2
Inicializa un vector de tamaño 20 con número aleatorios entre 0 y 500. Visualiza el vector
*/
echo "<h3>Ejercicio 2</h3>";

$a2 = array();
for($i = 1; $i <= $tamaño; $i++) $a2[] = mt_rand(1, 500);

for($i = 0; $i < count($a2); $i++){
echo $a2[$i]." ";
}
echo "<br>";

/*
EJERCICIO 3
Boleto primitiva una apuesta. Declara un array de tamaño 7, las 6 primeras posiciones serán
rellenadas con números enteros positivos entre el 1 y el 49 y la última posición el 
reintegro será un número del 0 al 9.
Ten en cuenta que los números de la apuesta no pueden estar repetidos, es decir, no puede
aparecer dos veces el 11 por ejemplo.
Visualiza los datos de la apuesta de la siguiente forma:
Números: X X X X X X
Complementario: X
*/
echo "<h3>Ejercicio 2</h3>";
$a3 = array();
for($i = 0; $i < 6; ){ // bucle 6 posiciones sin incremento
    $ran = mt_rand(1, 49); // variable random
    
    $yaEsta = false;
    
    foreach($a3 as $value){ //comprobar si repetido
        if($value == $ran){
            $yaEsta = true;
        }
    }

    
    if(!$yaEsta){ // si no repetido se añade, índece incrementa para siguiente posición 
        $a3[$i] = $ran;
        $i++;
    }
    
}

$a3[] = mt_rand(1, 9);

echo "Números: ";
for($i = 0; $i <6; $i++){
    echo $a3[$i]." ";
}
echo "<br/>Complementario: ";
echo $a3[6]." ";




/*
EJERCICIO 4
Declara e inicializa un array de 10 x 10 en la que la diagonal sean 1 y el resto de valores
sea 0.
Visualiza el array
*/
echo "<h3>Ejercicio 4</h3>";
$a4 = array();
for($i = 0; $i < 10; $i++){
    $a4[$i] = array();
}

for($i = 0; $i < 10; $i++){ // bucle filas
    
    for($j = 0; $j < 10; $j++){ // bucle columnas
        if($i == $j){
            $a4[$i][$j] = 1;
        }else{
            $a4[$i][$j] = 0;
        }
    }
    
}

for($i = 0; $i < 10; $i++){ // bucle filas
    
    for($j = 0; $j < 10; $j++){ // bucle columnas
        echo $a4[$i][$j]."  ";
    }
    echo "<br/>";
}




/*
EJERCICIO 5
Utiliza matrices para crear y almacenar un campo de minas en una cuadrícula de 20 x 20.
Coloca diez minas al azar en el tablero, a continuación, muestra la cuadrícula, con
asteriscos (*) para las minas ypuntos (.) para las casillas vacías.
Versión 2. Represéntalo ahora dibujando una tabla en HTML y las casillas vacías serán un
espacio en blanco, ya no hace falta que lleven el (.).
*/
echo "<h3>Ejercicio 5</h3>";

// versión 1
$a5 = array();

for($i = 0; $i < 20; $i++){ // creación del campo sin las minas
    for($j = 0; $j < 20; $j++){
        $a5[$i][$j] = ".";
    }
}

for($i = 1; $i <= 10; $i++){ // bucle que coloca 10 minas
    $a5[mt_rand(0, 19)][mt_rand(0, 19)] = "*";
}
echo "<pre>";
for($i = 0; $i < 20; $i++){ // visualizar
    for($j = 0; $j < 20; $j++){
        echo $a5[$i][$j]." ";
    }
    echo "<br>";
}
echo "</pre>";

// versión 2
echo "<table border=1>";

for($i = 0; $i < 20; $i++){ // visualizar
    echo "<tr>";
    for($j = 0; $j < 20; $j++){
        if($a5[$i][$j] == "."){
            echo "<td height=25 width=25 style='text-align:center'>"." "."</td>";
        }else{
            echo "<td height=25 width=25 style='text-align:center'>".$a5[$i][$j]."</td>";
        }
    }
    echo "</tr>";
}

echo "</table>";

// versión 3
echo "</pre>";

echo "<pre>";
echo"
. . . . . . . . . . . . . . . * . . . *
. . . * . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . 
. . . . . . * . . . . . . . . . . . . .
. . . . . . . . . . . . . * . . . . . . 
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . * . . . .
. . . . . . . * . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . * . . . . . . . . . * . . . . . . .
. . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . *
. . . . . . . . . . . . . . . . . . . .

";

echo "</pre>";









?>