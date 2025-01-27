class Tarea{

    constructor (texto, completada) {

        this.texto = texto;
        this.completada = completada;

    }

    cambiar() {

        this.completada = !this.completada;

    }
}

const tareas = [];

window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    /* const xhr = new XMLHttpRequest();
    xhr.open("GET", "./tareas.json");
    xhr.send();
    xhr.onreadystatechange= function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            tareas2 = JSON.parse(xhr.responseText);
            tareas2.forEach(element => {
                let tarea = new Tarea(element.texto, element.completada);
                tareas.push(tarea)
                let lista = document.querySelector("#lista");

                let elemento = document.createElement("li");
                let checkbox = document.createElement("input");
                let textoSpan = document.createElement("span");
                textoSpan.textContent = element.texto;
            
                checkbox.setAttribute("type", "checkbox");
                
                if(element.completada) {
                    checkbox.checked = element.completada;
                    textoSpan.classList.add("completada");
                }

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
            
            });
        }

    }; */


    peticion();
    document.querySelector("#boton").addEventListener("click", añadir);

}

async function peticion() {

	let respuesta = await fetch("tareas.json");
	let datos = await respuesta.text();

    tareas2 = JSON.parse(datos);
    tareas2.forEach(element => {
        let tarea = new Tarea(element.texto, element.completada);
        tareas.push(tarea)
        let lista = document.querySelector("#lista");

        let elemento = document.createElement("li");
        let checkbox = document.createElement("input");
        let textoSpan = document.createElement("span");
        textoSpan.textContent = element.texto;
    
        checkbox.setAttribute("type", "checkbox");
        
        if(element.completada) {
            checkbox.checked = element.completada;
            textoSpan.classList.add("completada");
        }

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
    
    });

}


function añadir() {
    let texto = document.querySelector("#input").value;

    if (texto.trim() === "") {
        alert("Escribe una tarea antes de añadirla.");
        return;
    }

    let tarea = new Tarea(texto, false);
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

