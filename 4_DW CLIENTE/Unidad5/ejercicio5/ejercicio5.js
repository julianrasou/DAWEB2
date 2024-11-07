document.addEventListener("DOMContentLoaded", jugar);

function jugar() {

    let boton = document.querySelector("#boton");
    boton.addEventListener("click", validar);

}

function validar(e) {

    nombre = validarNombre();
    grupo = validarGrupo();
    anio = validarAnio();
    localizacion = validarLocalizacion();

    if (nombre && grupo && anio && localizacion && confirm("¿Deseas enviar el formulario?")) {

       return true;

    } else {

        e.preventDefault();
        return false;

    }
}

function validarNombre() {

    let selector = "#nombre";
    let nombre = document.querySelector(selector).value;

    if(nombre === "") {

        error(selector, "No puede estar vacío.");
        return false;

    }else if(nombre.length > 20) {

        error(selector, "No puede tener más de 20 caracteres.");
        return false;

    }else {

        limpiarError(selector);
        return true; 
        
    } 
    

}

function validarGrupo() {

    let selector = "#grupo";
    let grupo = document.querySelector(selector).value;

    if(grupo === "") {

        error(selector, "No puede estar vacío.");
        return false;

    }else if(grupo.length > 20) {

        error(selector, "No puede tener más de 20 caracteres.");
        return false;

    }else {

        limpiarError(selector);
        return true;

    }

}

function validarAnio() {

    let selector = "#anio";
    let anio = document.querySelector(selector).value;
    let patron = /^\d{4}$/;

    if(!patron.test(anio)) {

        error(selector, "Año inválido.");
        return false;

    }else {

        limpiarError(selector);
        return true;

    }

}

function validarLocalizacion() {
    
    let selector = "#localizacion";
    let localizacion = document.querySelector(selector).value;

    if(isNaN(localizacion)) {

        error(selector, "Localización inválida.");
        return false;

    }else {

        limpiarError(selector);
        return true;
        
    }
}

function error(campo, mensaje) {

    document.querySelector(campo).classList.add("error");
    document.querySelector(campo+"_etiqueta").classList.add("error_etiqueta");
    document.querySelector(campo+"_error").innerHTML = " " + mensaje;

}

function limpiarError(campo) {

    document.querySelector(campo).classList.remove("error");
    document.querySelector(campo+"_etiqueta").classList.remove("error_etiqueta");
    document.querySelector(campo+"_error").innerHTML = "";

}