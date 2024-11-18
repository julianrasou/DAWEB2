window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    document.querySelector("#enviar").addEventListener("click", validar);

    document.querySelector("#nombre").addEventListener("focusout", mayus);
    document.querySelector("#apellidos").addEventListener("focusout", mayus);

}

function validar(e) {

    document.querySelector("#errores").innerHTML = "";
    let nombre = validarNombreApellido("#nombre", "Nombre no puede estar vacío");
    let apellidos = validarNombreApellido("#apellidos", "Apellido no puede estar vacío");
    let edad = validarEdad()

    if(nombre && apellidos && edad && confirm("¿Desea enviar el formulario?")) {

        return true;

    } else {

        e.preventDefault();
        return false;

    }

}

function validarNombreApellido(selector, mensaje) {

    nombreAppellido = document.querySelector(selector);

    if(nombreAppellido.value === "") {

        error(nombreAppellido, mensaje);
        return false;

    } else {

        limpiarError(nombreAppellido);
        return true;

    }

}

function validarEdad() {

    edad = document.querySelector("#edad");

    if(isNaN(edad.value) || edad.value > 105 || edad.value < 0) {

        error(edad, "Edad debe ser un número entre 0 y 105");
        return false;

    } else if(edad.value === "") {

        error(edad, "Edad no puede estar vacío");
        return false;

    } else {

        limpiarError(edad);
        return true;

    }

}


function error(elemento, mensaje) {

    elemento.classList.add("error");
    document.querySelector("#errores").innerHTML += mensaje + " <br/>";
    elemento.focus();
    
}

function limpiarError(elemento) {

    elemento.classList.remove("error");

}

function mayus() {

    this.value = this.value.toUpperCase();
}