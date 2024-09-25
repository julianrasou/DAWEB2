function mostrar() {
    let input = document.getElementById("input").value;
    let cadenaCortada = input.split(":");

    document.getElementById("resultado").innerHTML = `Código postal: ${cadenaCortada[4]}<br>`;
    document.getElementById("resultado").innerHTML += `Apellidos: ${cadenaCortada[1]}<br>`;
    document.getElementById("resultado").innerHTML += `Email: ${cadenaCortada[3]}<br>`;
    document.getElementById("resultado").innerHTML += `Servidor del email: ${cadenaCortada[3].split("@")[1]}<br>`;
    document.getElementById("resultado").innerHTML += `Teléfono: ${cadenaCortada[2]}<br>`;
    
    
}
