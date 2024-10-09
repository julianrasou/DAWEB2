<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>
<body>
    <h2>
    <?php
    
    if($_FILES["archivo"]["type"] === "application/pdf"){
        
        move_uploaded_file($_FILES["archivo"]["tmp_name"], "./pdf/".$_FILES["archivo"]["name"]);
        echo "Archivo subido con éxito.";

    }else if($_FILES["archivo"]["type"] === "image/jpeg" || $_FILES["archivo"]["type"] === "image/png" || $_FILES["archivo"]["type"] === "image/bmp"){
       
        move_uploaded_file($_FILES["archivo"]["tmp_name"], "./img/".$_FILES["archivo"]["name"]);
        echo "Archivo subido con éxito.";

    }else{

        echo "El tipo de fichero no es correcto.";

    }
    
    ?>
    </h2>
</body>
</html>