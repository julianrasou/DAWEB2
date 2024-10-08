<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <?php
    function es_palindromo($cadena){
    
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

    es_palindromo($_POST['palindromo'])
    ?>
</body>
</html>