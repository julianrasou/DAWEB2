let pilotos = [];

fetch("pilotos.json").then(function(respuesta) {
    return respuesta.text();
}).then(function(datos) {
    let pilotos = JSON.parse(datos).pilotos;
    console.log(pilotos);

    mostrar(pilotos);
})

function mostrar(pilotos) {
    let tabla = document.createElement("table");

    let cabecera = document.createElement("tr");

    let titulos = ["Nombre", "Equipo", "Número", "Nacionalidad"]
    for(let i = 0; i<titulos.length; i++) {
        let titulo = document.createElement("th");
        titulo.textContent = titulos[i];
        cabecera.appendChild(titulo);
    }
    tabla.appendChild(cabecera);






    
    document.getElementById("pilotos").appendChild(tabla);
}