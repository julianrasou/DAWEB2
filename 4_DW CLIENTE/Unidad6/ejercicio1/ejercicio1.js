class Tarea{

    constructor (texto) {

        this.texto = texto;
        this.completada = false;

    }

    cambiar() {

        this.completada = !this.completada;

    }
}

const tareas = [];

window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    document.querySelector("#boton").addEventListener("click", añadir);

}

function añadir() {

    let texto = document.querySelector("#input").value;

    tareas.push(new Tarea(texto));

    let lista = document.querySelector("#lista");

    let elemento = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox")

    elemento.appendChild(checkbox)
    elemento.appendChild(document.createTextNode(texto));

    // checkbox.addEventListener("click", cambiar)
    
    lista.appendChild(elemento);

}

