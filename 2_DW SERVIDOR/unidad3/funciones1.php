<?php

/* EJERCICIO 1
   Escribe una función PHP que dado un número indique si es par o impar.*/

function par($num){
    if(($num % 2) == 0){
        return true;
    }else{
        return false;
    }
}


/* EJERCICIO 2
   Escribe una función PHP que dado un número indique si es primo o no.*/
function primo($num){
    
    $primo = true;
    for($i = 2; $i <= ($num/2); $i++){
        if($num % $i == 0) $primo = false;
    }
    return $primo;
    
}


/* EJERCICIO 3
   Escribe una función PHP que para cada número del 1 al 10, muestre si el número es
   un número par o impar, y también mostrará un mensaje si el número es un número
   primo. Los cálculos para saber si el número es primo deben estar en una función y
   para saber si es par o impar en otra.*/
function parPrimo(){
        for($i = 1; $i <= 10; $i++){
            
        echo "El número $i es ";
        if(par($i)) echo "par";
        else echo "impar";
    
        if(primo($i)) echo " y primo.";
        else echo " y no es primo.";
        
        echo "<br>";
        }
}












// PRUEBAS
$num = 9;
echo "<h3>Ejercicio 1</h3><br>";
if(par($num)){
    echo "$num es par.<br>";
}else echo "$num es impar.<br>";

echo "<h3>Ejercicio 2</h3><br>";
if(primo($num)){
    echo "$num es un número primo.<br>";
}else echo "$num no es un número primo.<br>";

echo "<h3>Ejercicio 3</h3><br>";
parPrimo();




?>