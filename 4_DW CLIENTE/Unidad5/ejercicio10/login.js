document.addEventListener("DOMContentLoaded", iniciar);

class Cliente {

    constructor(documento, nacimiento) {

        this.documento = documento;
        this.nacimiento = nacimiento;

    }

}

function iniciar() {
    document.querySelector("boton").addEventListener("click", guardar);
}

function guardar() {

    if(document.getElementById("dni").checked){

        localStorage.setItem("tipoDocumento", "dni")

    }else if(document.getElementById("pasaporte").checked){

        localStorage.setItem("tipoDocumento", "pasaporte")

    }

    let codigo = document.querySelector("#numDocumento").value;
    localStorage.setItem("numDocumento", codigo);

    

}