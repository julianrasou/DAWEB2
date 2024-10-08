<?php

// EJERCICIO 1: Crea una script que dada una dirección de correo electrónico, imprima sólo el nombre de usuario
echo "<h3>Ejercicio 1</h3>";
$email = "julianrasou03@gmail.com";
$posArroba = strpos($email,"@");
$usuario = substr($email,0, $posArroba);

echo "Nombre de usuario: $usuario<br>";

// EJERCICIO 2: 
echo "<h3>Ejercicio 2</h3>";
$cadena = "candela";
$usuario = strtolower($cadena);

if(ctype_alnum($usuario)){
    echo "Nombre de usuario válido. El login será $usuario.";
}else{
    echo "El nombre de usuario sólo puede contender números y letras sin espacios en blanco";
}

// EJERCICIO 3: Realiza un script que cuente e imprima el número de ocurrencias de un carácter o substring en una cadena de
// caracteres. Ignorando mayúsculas y minúsculas.
echo "<h3>Ejercicio 3</h3>";
$cadena = "Esto es una prueba";
$caracter = "a";

$subcadena = $cadena;
$contadorDeA = 0;
/*for(;;) { 

    $posA = stripos($subcadena, $caracter);
    if($posA == false) {
        break;
    }else{
        $contadorDeA ++; 
        $subcadena = substr($cadena,$posA + 1);
    } 
    
}*/

echo "En la cadena: $cadena<br>El caracter $caracter aparece $contadorDeA veces.";





?>