document.addEventListener("DOMContentLoaded", comprobar);

function comprobar() {

    let boton = document.querySelector("#boton");
    boton.addEventListener("click", validar);

}

function validar(e) {

    let creacion = validarCreacion();
    let empleado = validarEmpleado();
    let destinatario = validarDestinatario();
    let peso = validarPeso();
    let cuenta = validarCuenta();

    if (creacion && empleado && destinatario && peso && cuenta && confirm("¿Deseas enviar el formulario?")) {

       return true;
        
    } else {

        e.preventDefault();
        return false;

    }
}

function validarCreacion() {

    let selector = "#creacion";
    let creacion = document.querySelector(selector).value;
    let patron = /^(0[1-9]||[12][1-9]||3[01])\/(0[1-9]||1[0-2])\/[0-9]{4}$/;

    if(creacion === "") {

        error(selector, "No puede estar vacío.");
        return false;

    }else if(!patron.test(creacion)) {

        error(selector, "El formato debe ser dd/mm/aaaa.");
        return false;

    }else {

        limpiarError(selector);
        return true;  

    } 
    
}

function validarEmpleado() {

    let selector = "#empleado";
    let empleado = document.querySelector(selector).value;
    let patron = /^[A-ZÑ]{2}[^A-Za-z0-9Ññ][0-9]{4}$/;

    if(empleado === "") {

        error(selector, "No puede estar vacío.");
        return false;

    }else if(!patron.test(empleado)) {

        error(selector, "El formato debe ser WW$1234.");
        return false;
        
    }else {

        limpiarError(selector);
        return true; 

    }

}

function validarDestinatario() {

    let selector = "#destinatario";
    let destinatario = document.querySelector(selector).value;
    let patron = /^[A-ZÑ]{2,3}_[A-ZÑ][a-zñ]+:[0-9]{4}$/;

    if(destinatario === "") {

        error(selector, "No puede estar vacío.");
        return false;

    }else if(!patron.test(destinatario)) {

        error(selector, "El formato debe ser NM_Madrid:1234.");
        return false;

    }else {

        limpiarError(selector);
        return true;  

    }

}

function validarPeso() {

    let selector = "#peso";
    let peso = document.querySelector(selector).value;

    if(peso === "") {

        error(selector, "No puede estar vacío.");
        return false;

    }else if(peso < 100 || peso > 5000) {

        error(selector, "Debe estar entre 100 y 5000 gramos.");
        return false;

    }else {

        limpiarError(selector);
        return true;

    }

}

function validarCuenta() {

    let selector = "#cuenta";
    let cuenta = document.querySelector(selector).value;
    let patron = /^[A-Z]{2}[0-9]{2}[0-9]{20}$/;

    if(cuenta === "") {

        error(selector, "No puede estar vacío.");
        return false;

    }else if(!patron.test(cuenta)) {

        error(selector, "Número de cuenta inválido.");
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