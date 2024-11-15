// Solicita el nombre del jugador
const nombreJugador = prompt("Por favor, ingresa tu nombre:") || "Jugador";

// Recupera el contador de visitas desde localStorage o lo establece en 0 si es la primera vez
let contadorVisitas = parseInt(localStorage.getItem(`visitas_${nombreJugador}`)) || 0;
contadorVisitas++;

// Guarda el nuevo valor del contador en localStorage
localStorage.setItem(`visitas_${nombreJugador}`, contadorVisitas);

// Muestra el mensaje de bienvenida junto con el contador de visitas
document.getElementById("bienvenida").innerHTML = `¡Bienvenido, ${nombreJugador}!`;
document.getElementById("contador").innerHTML = `Has ingresado a la página ${contadorVisitas} ${(contadorVisitas==1)?"vez":"veces"}.`;

// Juego de memoria
const celdas = Array.from(document.querySelectorAll("#tabla td"));
const imagenes = [
    "./img/gallina.jpg",
    "./img/cerdo.jpg",
    "./img/ciervo.jpg",
    "./img/gato.jpg",
    "./img/perro.jpg",
    "./img/vaca.jpg"
];
const imagenesDuplicadas = [...imagenes, ...imagenes];
imagenesDuplicadas.sort(() => Math.random() - 0.5);

let primeraSeleccion = null;
let segundaSeleccion = null;
let bloqueado = false;
let parejasEncontradas = 0; // Contador de parejas encontradas

for (let i = 0; i < celdas.length; i++) {
    celdas[i].innerHTML = `<img src="${imagenesDuplicadas[i]}">`;
    celdas[i].addEventListener("click", seleccionarCelda);
}

function seleccionarCelda(event) {
    if (bloqueado) return;

    const celdaSeleccionada = event.currentTarget;
    const imagen = celdaSeleccionada.querySelector("img");

    if (imagen === primeraSeleccion) return;

    imagen.style.display = "block";

    if (!primeraSeleccion) {
        primeraSeleccion = imagen;
    } else {
        segundaSeleccion = imagen;
        bloqueado = true;

        if (primeraSeleccion.src === segundaSeleccion.src) {
            // Pareja encontrada
            primeraSeleccion = null;
            segundaSeleccion = null;
            bloqueado = false;
            parejasEncontradas++;

            // Verifica si todas las parejas han sido encontradas
            if (parejasEncontradas === imagenes.length) {
                setTimeout(() => {
                    alert(`¡Felicidades, ${nombreJugador}! Has encontrado todas las parejas.`);
                }, 500);
            }
        } else {
            setTimeout(() => {
                primeraSeleccion.style.display = "none";
                segundaSeleccion.style.display = "none";
                primeraSeleccion = null;
                segundaSeleccion = null;
                bloqueado = false;
            }, 1000);
        }
    }
}
