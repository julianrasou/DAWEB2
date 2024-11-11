let respuestas = ["a", "b", "b", "b"];
let total;

document.addEventListener("DOMContentLoaded", comprobar);

function comprobar() {

    let boton = document.querySelector("#submit");
    boton.addEventListener("click", validar);

}

function validar(e) {

    total = 0;

    validarPregunta("1");
    validarPregunta("2");
    validarPregunta("3");
    validarPregunta("4");

    document.getElementById("total").innerHTML = "Respuestas correctas: " + total; 
    
    e.preventDefault();

}

function validarPregunta(pregunta) {

    let respuesta = "";
    if(document.getElementById("p" + pregunta + "a").checked) {
        respuesta = "a";
    }else if(document.getElementById("p" + pregunta + "b").checked) {
        respuesta = "b";
    }else if(document.getElementById("p" + pregunta + "c").checked) {
        respuesta = "c";
    }else {
        respuesta = "";
    }

    let selector = "p" + pregunta + respuesta;
    quitarEstilos("p" + pregunta + "a")
    quitarEstilos("p" + pregunta + "b")
    quitarEstilos("p" + pregunta + "c")

    if(respuesta == ""){
        
        error(selector + "a");
        error(selector + "b");
        error(selector + "c");

    }else if(respuesta === respuestas[pregunta - 1]) {

        total += 1;
        bien(selector);

    }else {

        error(selector);

    }

}

function error(campo) {

    document.getElementById(campo).classList.add("error");
    document.getElementById(campo+"_etiqueta").classList.add("error");

}

function quitarEstilos(campo) {

    document.getElementById(campo).classList.remove("error");
    document.getElementById(campo+"_etiqueta").classList.remove("error");
    document.getElementById(campo).classList.remove("bien");
    document.getElementById(campo+"_etiqueta").classList.remove("bien");

}

function bien(campo) {

    document.getElementById(campo).classList.add("bien");
    document.getElementById(campo+"_etiqueta").classList.add("bien");

}