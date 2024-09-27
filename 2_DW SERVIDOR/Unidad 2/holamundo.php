<html>
    
    <head>
        
    </head>
    
    <body>
        <p>Esto es un párrafo en HTML</p>
        <?php
        
        echo "Hola mundo!";
        echo "<p>Esto es un párrafo en PHP</p>";
        
        // Comentario de una línea
        
        /*
        Comentario de varias líneas
        ou yea
        */
        
        $nombre = "Julián";
        echo 'Mi nombre es $nombre <br/>';
        echo "Mi nombre es $nombre <br/>";
        echo "Mi nombre es ".$nombre."<br/>";
        echo "<h1>Cabecera</h1>";
        
        ?>
        
        <p>Este es otro párrafo en HTML</p>
        
        <?php
        
        echo "<p>Este es otro párrafo en PHP</p>";
        
        //VARIABLES PREDEFINIDAS
        echo "<pre>"; // texto preformateado
        print_r($_SERVER);
        // print_r($_SESSION);
        echo "</pre>";
        
        $a = 12; $b = 12.5; $c = "Hola!"; $d = true;
        
        echo "<br/>".var_dump($a);
        echo "<br/>".var_dump($b);
        echo "<br/>".var_dump($c);
        echo "<br/>".var_dump($d);
        
        // phpinfo();
        
        echo "<br> el tipo de a es ".gettype($a);
        echo "<br>La longitud de c es ".strlen($c); 
        echo "<br>La longitud de c es ".mb_strlen($c); 
        
        ?>
    </body>
    
</html>

