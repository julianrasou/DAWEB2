<?php

/*  EJERCICIO 1
    Implementa una función que recibe un String y nos devuelve “ES Palíndromo” si
    se trata de un palíndromo y “NO ES Panlíndromo” en caso contrario.
    Mayúsculas y espacios no se tienen en cuenta, acentos sí*/
function esPalindromo($cadena){
    
    $palindromo = true;
    $cadena2 = strtolower(str_replace(" ","",$cadena));
    for($inicio = 0, $final = strlen($cadena2)-1; $inicio <= $final; $inicio++, $final-- ){
        
        if($cadena2[$inicio] !== $cadena2[$final]){
            $palindromo = false;
        }
        
        if(!$palindromo) break;
    }
    
    if($palindromo){
        echo "$cadena es palíndromo";
    }else echo "$cadena no es palíndromo";
    
    
}

esPalindromo("s omosasomos");



/*  EJERCICIO 2
        

*/ 















