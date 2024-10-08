<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    
    <table border="1">

        <?php
        include 'funcion.php';
        $letra = $_POST['input'];
        for($i = 1; $i <= 10; $i++ ){
            echo "<tr><td>IP $i</td><td>".genIp($letra)."</td></tr>";
        }
        ?>

    </table>
</body>
</html>