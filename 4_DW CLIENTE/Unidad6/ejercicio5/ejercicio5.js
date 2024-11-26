document.addEventListener("DOMContentLoaded", iniciar);

const divParrafos = document.querySelector("#parrafos");
const divErrores = document.querySelector("#errores");

function iniciar() {

    document.querySelector("#crear").addEventListener("click", crear);

}


function crear() {

    let texto = document.querySelector("#texto").value;
    let color = document.querySelector("#color").value;

    if(texto === "") {
        
        divErrores.innerHTML = "El campo texto no puede quedar vacío"

    } else {
        
        divErrores.innerHTML = ""

        let parrafo = document.createElement("p");
        parrafo.style.background = color;
        parrafo.appendChild(document.createTextNode(texto));

        divParrafos.appendChild(parrafo);

    }
    
}