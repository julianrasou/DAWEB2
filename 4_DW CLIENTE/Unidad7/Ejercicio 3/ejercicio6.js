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
let imagenes = [];

// Obtén las imágenes desde la API REST usando XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://randomuser.me/api/?results=6&format=XML", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
    const results = xmlDoc.getElementsByTagName("picture");

    for (let i = 0; i < results.length; i++) {
      const largeImage = results[i].getElementsByTagName("large")[0].textContent;
      imagenes.push(largeImage);
    }

    iniciarJuego();
  } else {
    console.error("Error al obtener las imágenes:", xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error("Error de red al intentar obtener las imágenes.");
};
xhr.send();

function iniciarJuego() {
  const imagenesDuplicadas = [...imagenes, ...imagenes];
  imagenesDuplicadas.sort(() => Math.random() - 0.5);

  let primeraSeleccion = null;
  let segundaSeleccion = null;
  let bloqueado = false;
  let parejasEncontradas = 0; // Contador de parejas encontradas

  for (let i = 0; i < celdas.length; i++) {
    celdas[i].innerHTML = `<img src="${imagenesDuplicadas[i]}" style="display: none;">`;
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
}
