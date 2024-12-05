let contadorIDS = 1;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#boton").addEventListener("click", nuevaImagen);
})

function nuevaImagen() {
    
    let id = contadorIDS;
    let galeria = document.querySelector("#galeria");
    let urlImagen = URL.createObjectURL(document.querySelector("#imagen").files[0]);

    let elementoImg = document.createElement("img");
    elementoImg.setAttribute("src", urlImagen);
    elementoImg.setAttribute("width", "300px");

    let botonBorrar = document.createElement("button");
    botonBorrar.addEventListener("click", () => borrar(id));
    botonBorrar.setAttribute("class", "cerrar");
    botonBorrar.setAttribute("class", "borrar");
    botonBorrar.appendChild(document.createTextNode("X"));

    let elementoDiv = document.createElement("div");
    elementoDiv.setAttribute("id", "id"+id);
    elementoDiv.appendChild(elementoImg);
    elementoDiv.appendChild(botonBorrar);

    galeria.appendChild(elementoDiv);


    contadorIDS++;
}

function borrar(id) {
    let elemento = document.querySelector("#id" + id);
    elemento.parentNode.removeChild(elemento);
}