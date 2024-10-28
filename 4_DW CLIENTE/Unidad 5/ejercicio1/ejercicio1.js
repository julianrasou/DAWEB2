function mostrarPosicion(){
    document.getElementById("pos").innerHTML = `Posición x: ${event.clientX}<br/>Posición y: ${event.clientY}`;
}

document.addEventListener("mousemove", mostrarPosicion)