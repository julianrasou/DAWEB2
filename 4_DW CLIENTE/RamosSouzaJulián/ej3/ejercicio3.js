class Alumno {

    constructor (nombre, apellidos, correo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;


        this.notas = {
            "mate": 0,
            "lengua": 0,
            "lingua": 0,
            "ingles": 0,
            "musica": 0,
            "tic": 0
        }
        
    }

    agregarNota(asignatura, nota) {

        this.notas[asignatura] = nota;

    }

    getCorreo() {
        return this.correo;
    }

}













let alumnos = [];

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("button").addEventListener("click", validar)
    
    let botonBuscar = document.createElement("button");
    botonBuscar.addEventListener("click", buscar);
    botonBuscar.textContent = "Buscar";


    document.querySelector("form").appendChild(botonBuscar);

})

function validar(e) {

    document.querySelectorAll("p").forEach(elemento => {
        document.querySelector("form").removeChild(elemento)
    });


    let nombreValido = validarNombre();
    let apellidoValido = validarApellidos();
    let correoValido = validarCorreo();
    let notaValida = validarNota();

    if( nombreValido && apellidoValido && correoValido && notaValida && confirmar() ) {

        e.preventDefault();

        let alumno;
        let correo = document.querySelector("#correo").value;
        let nombre = document.querySelector("#nombre").value;
        let apellidos = document.querySelector("#apellidos").value;
        let nota = document.querySelector("#nota").value;
        let asignatura = document.querySelector("#asignatura").value;

        for(let i = 0; i<alumnos.length; i++){
            if(correo == alumnos[i].getCorreo()){
                alumno = alumnos[i];
                break;
            }
        }
        if(alumno == undefined) {
            alumno = new Alumno(nombre, apellidos, correo)
            alumnos.push(alumno);
        }

        alumno.agregarNota(asignatura, nota)
        console.log(alumnos)

    }else {
        e.preventDefault();
    }

}

function validarNombre() {

    let nombre = document.querySelector("#nombre");
    let mensaje = "";

    if(nombre.value.trim() === "") {
        mensaje = "El nombre no puede estar vacío."
    } else if(5 >= nombre.value.length >= 20) {
        mensaje = "El nombre ha de contener entre 5 y 20 caracteres. <br>"
    }

    if(mensaje === "") {
        limpiarError(nombre);
        return true;
    }

    error(mensaje, nombre);
    return false;

}

function validarApellidos() {

    let apellido = document.querySelector("#apellidos");
    let mensaje = "";

    if(apellido.value.trim() === "") {
        mensaje = "El apellido no puede estar vacío."
    } else if(5 >= apellido.value.length >= 50) {
        mensaje = "El apellido ha de contener entre 5 y 50 caracteres."
    }

    if(mensaje === "") {
        limpiarError(apellido);
        return true;
    }

    error(mensaje, apellido);
    return false;

}

function validarCorreo() {

    let email = document.querySelector("#correo");
    let patron = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let mensaje = "";

    if(email.value.trim() === "") {
        mensaje = "El correo no puede estar vacío.";
    }else if(!patron.test(email.value)) {
        mensaje = "El correo no tiene formato correcto.";
    }

    if(mensaje === "") {
        limpiarError(email);
        return true;
    }

    error(mensaje, email);
    return false;

}

function validarNota() {

    let nota = document.querySelector("#nota");
    let mensaje = "";
    let numNota = Number(document.querySelector("#nota").value)

    if(nota.value === "") {
        mensaje = "La nota no puede estar vacía."
    }
    if(numNota < 0 || numNota > 10) {
        mensaje = "La nota debe estar entre 0 y 10."
    }

    if(mensaje === "") {
        limpiarError(nota);
        return true;
    }

    error(mensaje, nota);
    return false;
}

function confirmar() {
    let nombre = document.querySelector("#nombre").value;
    let apellidos =document.querySelector("#apellidos").value;

    return confirm("¿Registrar notas de " + nombre + " y " + apellidos + "?")
}

function error(mensaje, elemento) {

    let pError = document.createElement("p");
    pError.setAttribute("class", "errorEtiqueta");
    pError.appendChild(document.createTextNode(mensaje))

    document.querySelector("form").insertBefore(pError, document.querySelector("button"))

    elemento.classList.add("error")


}

function limpiarError(elemento) {

    elemento.classList.remove("error");

}

function buscar(e) {

    e.preventDefault();
    let correo = prompt("¿Qué alumno estás buscando? Introduce su correo electrónico.")
    let alumno;

    for(let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].getCorreo() === correo) {
            alumno = alumnos[i];
            break;
        }
    }
    if(document.querySelector("div") != null){
        document.querySelector("form").removeChild(document.querySelector("div"));
    }
    
    let div = document.createElement("div");

    if(alumno == undefined) {
        let error = document.createElement("p");
        error.textContent = "El alumno especificado no se encuentra en la base de datos."

        div.appendChild(error);
    }else {
        let nombre = document.createElement("p");
        nombre.textContent = "Nombre: " + alumno.nombre;
        div.appendChild(nombre);

        let apellidos = document.createElement("p");
        apellidos.textContent = "Apellidos: " + alumno.apellidos;
        div.appendChild(apellidos)

        let correo = document.createElement("p");
        correo.textContent = "Correo: " + alumno.correo;
        div.appendChild(correo);

        let sumaNotas;
        for(let i = 0; i<alumno.notas.length; i++){
            sumaNotas += alumno.notas[i];
            console.log(alumno.notas[i])
        };
        console.log(sumaNotas)
        let notaMedia = sumaNotas/6;

        let nota = document.createElement("p");
        nota.textContent = "Nota media: " + notaMedia;
        div.appendChild(nota);

    }

    document.querySelector("form").appendChild(div);

}