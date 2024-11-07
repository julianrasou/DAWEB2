let respuestas = ["a", "b", "b", "b"];

document.addEventListener("DOMContentLoaded", comprobar);

function comprobar() {

    let boton = document.querySelector("#submit");
    boton.addEventListener("click", validar);

}

function validar(e) {

    validarPregunta("1");
    validarPregunta("2");
    validarPregunta("3");
    validarPregunta("4");
    e.preventDefault();

}

function validarPregunta(pregunta) {

    let respuesta = "";
    if(document.getElementById(pregunta + "a").checked) {
        respuesta = "a";
    }else if(document.getElementById(pregunta + "b").checked) {
        respuesta = "b";
    }else if(document.getElementById(pregunta + "c").checked) {
        respuesta = "c";
    }else {
        respuesta = "";
    }

    let selector = "#" + pregunta + respuesta;
    if(respuesta == ""){

        error(selector);

    }else if(respuesta === respuestas[pregunta - 1]) {

        bien(selector);

    }else {

        error(selector);

    }

}

function error(campo) {

    document.querySelector(campo).classList.add("error");
    document.querySelector(campo+"_etiqueta").classList.add("error");

}

function bien(campo) {

    document.querySelector(campo).classList.add("bien");
    document.querySelector(campo+"_etiqueta").classList.add("bien");

}