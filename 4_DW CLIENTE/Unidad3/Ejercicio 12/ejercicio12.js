function abrir(){
    let ventana = window.open("", "ventana", "width=300,height=200, left=100, top=300");
    document.getElementById("resultado").innerHTML = "<h2>¡Hola!</h2><p>Cierra esta ventana o se cerrará automáticamente en 3 segundos.</p>";

    setTimeout(function(){ ventana.close(); },3000);
    
}


