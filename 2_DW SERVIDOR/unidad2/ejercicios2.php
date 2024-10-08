<html>
    <head></head>
    <body>
    
        <?php

        print("No\n\r iremos \n\rsolos");
        echo "</br>";
        print('No\n\r iremos \nsolos');
        echo "</br>";
        echo "No\n\r iremos \n\rsolos";
        echo "</br>";
        echo 'No\n iremos \nsolos';
        echo "</br>";
        
        $cadena="1\t2\t3\t4\n5";
        echo $cadena;
        echo strlen($cadena);
        echo "</br>";
        
        echo "<pre>";
        echo "</br>";
        echo 'No\n iremos \nsolos'; 
        echo "</br>";
        echo $cadena;
        echo "</pre>";
        echo "</br>";

        $a=100; $b=10.0; $c=false;   $d="Hola";
        echo "a= ".gettype($a)." b= ".gettype($b)." c= ".gettype($c)." d= ".gettype($d);
        echo "</br>";
        
        $e = $c||$b;
    	$f = $c||$d;
        echo '$c||$b = '.$e." tipo= ".gettype($e);
        echo '$c||$d = '.$f." tipo= ".gettype($f);
        echo "</br>";
        

        print("</br>División entre enteros: ".(5/2));
        
       
        $c=true;
        $r = $c + $b +5;
        print("</br>El valor de r es: ".$r); 
        print("</br>r es de tipo: ".gettype(($r)));        
        
        $r=$a+10;
        print("</br>r es de tipo: ".gettype(($r))); 
        print("</br>El valor de r es: ".$r); 
        
        $r=$a/10;
        print("</br>r es de tipo: ".gettype(($r))); 
        print("</br>El valor de r es: ".$r); 
        
        $r=$a/3;
        print("</br>r es de tipo: ".gettype(($r)));        
        print("</br>El valor de r es: ".$r); 
        
        
        
        
        
        
        ?>
        
    </body>

</html>

