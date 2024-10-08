<?php

echo '<br/>Array $_REQUEST<br/>';
print_r($_REQUEST);
echo '<br/>Array $_POST<br/>';
print_r($_POST); // para ver los datos en aplication/x-www-form-urlencoded

print_r(file_get_contents("php://input"));

echo '<br>Array $_GET<br>';
print_r($_GET);
