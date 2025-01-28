let equipos = [];

document.addEventListener("DOMContentLoaded", () => {

    const divSelect = document.querySelector("#divSelect");
    const divTabla = document.querySelector("#divTabla");
    
    let select = document.createElement("select");
    select.setAttribute("id", "select");

    /* const xhr = new XMLHttpRequest();
    xhr.open("GET", "./equipos.json");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            equipos = JSON.parse(xhr.responseText)

            let predet = document.createElement("option");
            predet.textContent = "Selecciona un equipo: ";
            select.appendChild(predet);

            equipos.forEach(element => {
                let opt = document.createElement("option");
                opt.value = element.nombre;
                opt.textContent = element.nombre;

                select.appendChild(opt);

                divSelect.appendChild(select);

                select.addEventListener("change", crearTabla)
            });
        }
    }; */

    
    async function peticion() {

        let respuesta = await fetch("equipos.json");

        let datos = await respuesta.text();

        equipos = JSON.parse(datos);
        console.log(equipos)
        let predet = document.createElement("option");
        predet.textContent = "Selecciona un equipo: ";
        select.appendChild(predet);

        equipos.forEach(element => {
            let opt = document.createElement("option");
            opt.value = element.nombre;
            opt.textContent = element.nombre;

            select.appendChild(opt);

            divSelect.appendChild(select);

            select.addEventListener("change", crearTabla)
        });

    }

    peticion();
})



function crearTabla() {
    let valorSelect = select.value;
    let equipo;
    equipos.forEach(element => {
        if(element.nombre == valorSelect) {
            equipo = element;
            
        }
    });

    let tabla = document.createElement("table");
    let cabecera = document.createElement("tr");
    let titulos = ["Nombre", "P Jugados", "P Ganados", "P Perdidos", "P Empatados"];

    titulos.forEach(element => {
        let titulo = document.createElement("th");
        titulo.textContent = element;
        cabecera.appendChild(titulo);
    });

    let fila = document.createElement("tr");
    let dato = document.createElement("td");
    dato.textContent = equipo.nombre;
    fila.appendChild(dato);

    dato = document.createElement("td");
    dato.textContent = equipo.pJugados;
    fila.appendChild(dato);

    dato = document.createElement("td");
    dato.textContent = equipo.pGanados;
    fila.appendChild(dato);

    dato = document.createElement("td");
    dato.textContent = equipo.pPerdidos;
    fila.appendChild(dato);

    dato = document.createElement("td");
    dato.textContent = equipo.pEmpatados;
    fila.appendChild(dato);

    tabla.appendChild(cabecera);
    tabla.appendChild(fila);
    divTabla.innerHTML = "";
    divTabla.appendChild(tabla);

}