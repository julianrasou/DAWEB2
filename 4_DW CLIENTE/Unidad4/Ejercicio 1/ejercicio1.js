let paises = ["Polonia","Alemania","España","Francia","Italia","Portugal"];


function contar(){

    document.getElementById("apartado1").innerHTML = `Hay ${paises.length} países en el array.`

}

function mostrar(){

}

function añadir(){

    let opcion = document.getElementById("inputApartado3").value;
    let pais = document.getElementById("pais3").value;
    if(pais == "") return false;
    let resultado;

    if(opcion == 2){
        paises.push(pais);
        resultado = `Se ha añadido el país ${pais} al final.`;
    }else if(opcion == 1){
        paises.unshift(pais);
        resultado = `Se ha añadido el país ${pais} al principio.`
    }else resultado = "Opción no disponible";

    document.getElementById("apartado3").innerHTML = resultado;

}

function borrar(opcion){

    if(opcion == 1){
        if(paises.length == 0){
            resultado = "No se pudo borrar, el array está vacío.";
        }else{
            resultado =  `Se eliminó el país ${paises.shift()} del principio.`;
        }
    }else{
        if(paises.length == 0){
            resultado = "No se pudo borrar, el array está vacío.";
        }else{
            resultado =  `Se eliminó el país ${paises.pop()} del final.`;
        }
    }

    document.getElementById("apartado4").innerHTML = resultado;

}

function buscarIndice(){

    

}

function buscarNombre(){

}