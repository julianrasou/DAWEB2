function mostrar(){
    let input = document.getElementById("input").value;
    let nombreCortado = input.split(" ");
    let nombreSinEspacios = input.split(" ").join("");
    
    document.getElementById("resultado").innerHTML = `Tamaño del nombre sin espacios: ${nombreSinEspacios.length}<br>`;
    document.getElementById("resultado").innerHTML += `En minúsculas: ${input.toLowerCase()}<br>`;
    document.getElementById("resultado").innerHTML += `En mayúsculas: ${input.toUpperCase()}<br>`;
    document.getElementById("resultado").innerHTML += `Nombre: ${nombreCortado[0]}<br>Apellido 1: ${nombreCortado[1]}<br>Apellido 2: ${nombreCortado[2]}<br>`;
    document.getElementById("resultado").innerHTML += `Propuesta de nombre de usuario: ${(nombreCortado[0].substring(0, 1)+nombreCortado[1]+nombreCortado[2].substring(0,1)).toLowerCase()}<br>`;
    document.getElementById("resultado").innerHTML += `Propuesta de nombre de usuario: ${(nombreCortado[0].substring(0, 3)+nombreCortado[1].substring(0,3)+nombreCortado[2].substring(0,3)).toLowerCase()}`;

}