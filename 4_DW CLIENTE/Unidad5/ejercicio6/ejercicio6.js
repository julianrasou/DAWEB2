const celdas = Array.from(document.querySelectorAll("#tabla td"))
// celdas guardadas de 0 a 11, de arriba a abajo, de izquierda a derecha

const imagenes = [
    "./img/gallina.jpg",
    "./img/cerdo.jpg",
    "./img/ciervo.jpg",
    "./img/gato.jpg",
    "./img/perro.jpg",
    "./img/vaca.jpg"
]
const imagenesDuplicadas = [...imagenes, ...imagenes];
imagenesDuplicadas.sort(() => Math.random() - 0.5);

for(let i = 0; i<12; i++) {
    celdas[i].innerHTML = `<img src="${imagenesDuplicadas[i]}">`




    celdas[i].addEventListener("click", comprobar);
}



function comprobar() {
    console.log(1);
}