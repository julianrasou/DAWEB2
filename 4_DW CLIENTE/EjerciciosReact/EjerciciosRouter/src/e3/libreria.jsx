// Obtener una cookie
export function getCookie(nombre) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${nombre}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Establecer una cookie
export function setCookie(nombre, value, dias = 365) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = `${nombre}=${value};expires=${fecha.toUTCString()};path=/`;
}

// Verificar jugador y visitas
export function verificarJugador(setJugador, setVisitas) {
    let nombre = prompt("Por favor, ingresa tu nombre:");

    if (nombre) {
        let visitas = parseInt(getCookie(nombre + '_visitas')) || 0; // Si no existe, asigna 0 como valor predeterminado
        visitas++;
        setCookie(nombre + '_visitas', visitas);
        setJugador(nombre);
        setVisitas(visitas);
        setCookie('usuario', nombre);
    }
}

// Cargar imágenes de la API
export async function cargarImagenes() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=6&format=XML");
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const fotos = xmlDoc.getElementsByTagName("picture");
        const correos = xmlDoc.getElementsByTagName("email");

        let imagenes = [];
        for (let i = 0; i < fotos.length; i++) {
            const url = fotos[i].getElementsByTagName("large")[0].textContent;
            const email = correos[i].textContent;
            imagenes.push({ url, email });
            imagenes.push({ url, email });
        }

        return imagenes.sort(() => Math.random() - 0.5);
    } catch (error) {
        console.error("Error al cargar imágenes:", error);
        return [];
    }
}
