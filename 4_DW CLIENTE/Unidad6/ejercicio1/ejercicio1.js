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

    if (texto.trim() === "") {
        alert("Escribe una tarea antes de añadirla.");
        return;
    }

    let tarea = new Tarea(texto);
    let lista = document.querySelector("#lista");

    let elemento = document.createElement("li");
    let checkbox = document.createElement("input");
    let textoSpan = document.createElement("span");
    textoSpan.textContent = texto;

    checkbox.setAttribute("type", "checkbox");

    checkbox.addEventListener("change", function () {
        tarea.completada = checkbox.checked;
        if (checkbox.checked === true) {
            textoSpan.classList.add("completada");
        } else {
            textoSpan.classList.remove("completada");
        }
    });

    elemento.appendChild(checkbox);
    elemento.appendChild(textoSpan);
    lista.appendChild(elemento);

    tareas.push(tarea);

    // Limpiar el input después de añadir
    document.querySelector("#input").value = "";
}

