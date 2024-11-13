document.addEventListener("DOMContentLoaded", iniciar);
const div = document.querySelector('#div');

function iniciar() {

    document.querySelector("#boton").addEventListener("click", mover);

}

function mover() {

    let anchoVentana = window.innerWidth;
    let altoVentana = window.innerHeight;

    let posx = randomInteger(0, anchoVentana - 140);
    let posy = randomInteger(0, altoVentana - 60);

    div.style.left = posx + "px";
    div.style.top = posy + "px";

}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}