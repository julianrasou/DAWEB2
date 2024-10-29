let intervalo;

document.getElementById("comenzar").addEventListener("click", () => {

    if(!intervalo){
        intervalo = setInterval(saludar, 3000);
    }

});

document.getElementById("parar").addEventListener("click", () => {

    clearInterval(intervalo);
    intervalo = null;

});

function saludar(){
    alert("hola");
}
