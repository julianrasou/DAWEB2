<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        PHP Uso de variables 
        <br>
        Es un lenguaje débilmente tipado por eso no es necesario indicar el tipo de una variable.
        <br>
        <?php
            $foo = True; // asigna o valor TRUE a $foo
            ?>

            <?php
            $a = 1234; // número entero
            $a = -123; // un número negativo            
            $a = 0x1A; // número hexadecimal (equivalente a 26 decimal)
            ?>

            <?php
            $a = 1.234; 
            $b = 1.2e3; //Multiplicar por 1000
            $c = 1.2e-3; //Dividir entre 1000
            echo "<br>";
            echo "El valor de a es $a";
            echo "El valor de b es $b";
            echo "El valor de c es $c";
            ?>

            <?php
            $txt="Ola mundo!";
            echo $txt;
            ?> 

            <?php
            $cars=array("Volvo","BMW","Toyota");
            echo "Gústame " . $cars[0] . ", " . $cars[1] . " e " . $cars[2] . ".";
            ?> 

           

            <?php
            $var = NULL;       
            ?>
        <br>
        PHP Uso de constantes
        <br>
        <?php
        define("CONSTANT", "Ola mundo.");
        echo CONSTANT; // mostra "Hola mundo."
    //    echo Constant; // mostra "Constant" y provoca un error.
        ?>

        <?php
        // Funciona desde PHP 5.3.0
        const CONSTANT = 'Ola Mundo';

        echo CONSTANT;
        ?>
        
        <?php
            // Variables booleanas
            // Para especificar un literal booleano, use alguna de las palabras clave TRUE o FALSE. Ambas son
            // insensibles a mayúsculas y minúsculas.
            // Cualquier valor distinto de 0 es equivalente a verdadero y se imprimirá un 1.
            /* Cuando se realizan conversiones a boolean, los siguientes valores son considerados FALSE:
            ● el boolean FALSE mismo
            ● el integer 0 (cero)
            ● el float 0.0 (cero)
            ● el valor string vacío, y el string "0"
            ● un array con cero elementos
             
             */
            $foo = 10;   // $foo é un integer
            $bar = (boolean) $foo;   // $bar é un boolean
            echo "<br/>O valor de bar é $bar";
            
            $foo = 0;   // $foo é un integer
            $bar = (boolean) $foo;   // $bar é un boolean
            echo "<br/>O valor de bar é $bar";
            
           /* Cualquier otro valor es considerado TRUE (incluyendo cualquier resource).
            * */
            
            /* var_dump muestra el tipo y el valor de la variable */
            
            echo "<br/>";
            var_dump((bool) 0); // bool(false)
            var_dump((bool) ""); // bool(false)
            var_dump((bool) 1); // bool(true)
            var_dump((bool) -2); // bool(true)
            var_dump((bool) "foo"); // bool(true)
            var_dump((bool) 2.3e5); // bool(true)
            var_dump((bool) array(12)); // bool(true)
            var_dump((bool) array()); // bool(false)
            var_dump((bool) "false"); // bool(true)
            
            $continuar = False;
            echo "<br>Valor de continuar é $continuar";
            echo "Visualizar con var_dump";
            echo "<br>O valor de continuar é "; var_dump((bool)$continuar);
            $continuar = True;
            echo "<br>O valor de continuar é $continuar";
            echo "Visualizar con var_dump";
            echo "<br>O valor de continuar é "; var_dump((bool)$continuar);
            
        ?>

      
    </body>
</html>