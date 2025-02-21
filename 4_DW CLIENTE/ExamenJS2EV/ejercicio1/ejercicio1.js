// Array que almacenará las personas caundo se carguen
let personas = [];

// Se añade un event listener al documento para que haya cargado la página
// Tras eso se ejecuta la petición
document.addEventListener("DOMContentLoaded", function () {

    let peticion = new XMLHttpRequest();

    peticion.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarJSON(this);
        }
    })

    peticion.open("GET", "personas.json");

    peticion.send();

    // Se añade un event listener al botón para mostrar los usuarios
    document.getElementById("boton").addEventListener("click", mostrar)

})


// La función de la petición
// cogerá las personas y guardrá en el array objetos con los datos que necesitamos y así no trabajamos todo el rato con el JSON completo
function cargarJSON(peticion) {

    let personasTXT = peticion.responseText;
    let personasJS = JSON.parse(personasTXT);

    //console.log(personasJS);
    //console.log(personasJS.results.persons[0].name.first)

    let arrayPersonas = personasJS.results.persons;

    arrayPersonas.forEach(element => {

        let persona = {"nombre": element.name.first, "usuario": element.login.username, "contrasena": element.login.password}
        //console.log(persona)

        personas.push(persona);

    });

}


// Función que muestra los usuarios
// Si la validación es correcta, muestra el número de usuarios del input mediante un bucle
// si no, muestra todos
function mostrar () {

    let input = document.getElementById("input").value;

    if(validar(input)) {
        //console.log("tru");

        imprimir(input)

    } else {
        //console.log("fake");

        imprimir(personas.length)

    }

}


// Función validat, separada para no tener todo en la misma función
function validar (input) {
    
    
    if(input > personas.length || input <= 0) {
        return false;
    }

    return true;
}

function imprimir(input) {

    document.getElementById("resultado").innerHTML = "";

        for (let i = 0; i < input; i++) {

            let div = document.createElement("div");

            div.appendChild(document.createTextNode("Nombre: " + personas[i].nombre + ", usuario: " + personas[i].usuario + ", contraseña: " + personas[i].contrasena));
            div.classList.add("card");

            document.getElementById("resultado").appendChild(div);

            

        }
}