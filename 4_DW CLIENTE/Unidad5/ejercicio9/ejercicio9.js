document.addEventListener("DOMContentLoaded", comprobar);

function comprobar() {

    rellenar();

    let boton = document.querySelector("#boton");
    boton.addEventListener("click", validar);

}

function rellenar() {
    let nombre = "";


    
    if(localStorage.getItem("nombre")){
        nombre = localStorage.getItem("nombre");
    }
    
    document.getElementById("nombre").value = nombre;

}

function validar(e) {

    let nombre = validarNombre();
    let email = validarEmail();
    let contrasena = validarContrasena();

    if (nombre && email && contrasena && confirm("¿Deseas enviar el formulario?")) {

        localStorage.setItem("nombre", document.querySelector("#nombre").value);
        return true;
        
    } else {

        e.preventDefault();
        return false;

    }
}

function validarNombre() {

    let selector = "#nombre";
    let nombre = document.querySelector(selector).value;

    if(nombre.trim() === "") {

        error(selector, "Escribe tu nombre.");
        return false;

    }else {

        limpiarError(selector);
        return true;  

    } 
    
}

function validarEmail() {

    let selector = "#email";
    let email = document.querySelector(selector).value;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.trim() === "") {

        error(selector, "Escribe tu correo electrónico");
        return false;

    }else if(!validEmail.test(email)) {
        error(selector, "Email inválido")
    }else {

        limpiarError(selector);
        return true;  

    } 
    
}

function validarContrasena() {

    let selector = "#contrasena";
    let contrasena = document.querySelector(selector).value;
    let selector2 = "#contrasena2";
    let contrasena2 = document.querySelector(selector2).value;


    if(contrasena === "") {
        
        limpiarError(selector2);
        error(selector, "Escribe una contraseña");
        return false;

    }else {
        
        if(contrasena !== contrasena2) {

            limpiarError(selector);
            error(selector2, "Las contraseñas tienen que ser iguales");
            return false;

        }else {

            limpiarError(selector);
            limpiarError(selector2);
            return true;

        }

    } 
    
}

function error(campo, mensaje) {

    document.querySelector(campo).classList.add("error");
    document.querySelector(campo+"_etiqueta").innerHTML = mensaje;

}

function limpiarError(campo) {

    document.querySelector(campo).classList.remove("error");
    document.querySelector(campo+"_etiqueta").innerHTML = "";

}