window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    document.querySelector("#enviar").addEventListener("click", validar);

    document.querySelector("#nombre").addEventListener("focusout", mayus);
    document.querySelector("#apellidos").addEventListener("focusout", mayus);

    mostrarIntentos();

}

function validar(e) {

    document.querySelector("#errores").innerHTML = "";
    let nombre = validarNombreApellido("#nombre", "Nombre no puede estar vacío");
    let apellidos = validarNombreApellido("#apellidos", "Apellido no puede estar vacío");
    let edad = validarEdad();
    let nif = validarNIF();
    let email = validarEmail();
    let provincia = validarProvincias();
    let fecha = validarFecha();
    let numero = validarTelefono();
    let hora = validarHora();

    incrementarIntentos();

    if(nombre && apellidos && edad && nif && email && provincia && fecha && numero && hora && confirm("¿Desea enviar el formulario?")) {

        return true;

    } else {
        
        e.preventDefault();
        return false;

    }

}

function setCookie(name, value) {

    document.cookie = `${name}=${value}`;

}

function getCookie(name) {

    const cookies = document.cookie.split(";").map(cookie => cookie.trim());
    const match = cookies.find(cookie => cookie.startsWith(`${name}=`));
    return match ? decodeURIComponent(match.split("=")[1]) : null;

}

function mostrarIntentos() {

    const intentos = getCookie("form_attempts") || 0;
    const intentosDiv = document.getElementById("intentos");

    if (intentosDiv) {

        intentosDiv.innerHTML = `Intentos de envío del formulario: ${intentos}`;

    }

}

function incrementarIntentos() {

    let intentos = parseInt(getCookie("form_attempts")) || 0;
    intentos++;
    setCookie("form_attempts", intentos, 1); // La cookie expira en 1 día
    mostrarIntentos();
    
}

function validarNombreApellido(selector, mensaje) {

    let nombreAppellido = document.querySelector(selector);

    if(nombreAppellido.value === "") {

        error(nombreAppellido, mensaje);
        return false;

    } else {

        limpiarError(nombreAppellido);
        return true;

    }

}

function validarEdad() {

    let edad = document.querySelector("#edad");

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

function validarNIF() {

    let nif = document.querySelector("#nif");
    let patron = /^[0-9]{8}\-[A-Za-z]{1}$/;

    if(nif.value == "" || !patron.test(nif.value)) {

        error(nif, "Debe introducir un NIF válido (12345678-X)");
        return false;

    } else {

        limpiarError(nif);
        return true;

    }

}

function validarEmail() {

    let email = document.querySelector("#email");
    let patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email.value == "" || !patron.test(email.value)) {

        error(email, "Debe introducir un email válido");
        return false;

    } else {

        limpiarError(email);
        return true;

    }

}

function validarProvincias(){

    let provincia = document.querySelector("#provincia");

    if(provincia.selectedIndex === 0) {

        error(provincia, "Por favor, seleccione una provincia");
        return false;

    }else{

        limpiarError(provincia);
        return true;

    }
    
}

function validarFecha(){

    let fecha = document.querySelector("#fecha");
    let patron = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
    let patron2 = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-([0-9]{4})$/;

    if (fecha.value === "" || !(patron.test(fecha.value) || patron2.test(fecha.value))) {

        error(fecha, "Por favor, introduce una fecha válida");
        return false;

    } else {

        limpiarError(fecha);
        return true;

    }

}

function validarTelefono() {

    let telefono = document.querySelector("#telefono");
    let patron = /^([0-9]{9})$/;

    if(telefono.value === "" || !patron.test(telefono.value)){
        
        error(telefono, "Por favor, introduce un teléfono válido");
        return false;

    }else{

        limpiarError(telefono);
        return true;

    }
    
}

function validarHora(){

    let hora = document.getElementById('hora');
    let patron = /^([0-1][0-9]|2[0-3])\:[0-5][0-9]$/;

    if(hora.value === "" || !patron.test(hora.value)){

        error(hora, "Por favor introduce una hora válida");
        return false;

    }else{

        limpiarError(hora);
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







