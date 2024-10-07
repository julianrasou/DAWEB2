function contar(lista){

    return lista.length;

}

function mostrar(lista, input){
    
    if(input == 1){

        return lista;

    }else if(input == 2){

        let lista2 = lista.slice();
        lista2.reverse();
        return lista2;

    }else if(input == 3){

        let lista2 = lista.slice();
        lista2.sort();
        return lista2;

    }else return "Opción inválida."

}

function añadir(lista, opcion, pais){

    if(pais == "") return false;

    if(opcion == 2){
        lista.push(pais);
        return lista;
    }else if(opcion == 1){
        lista.unshift(pais);
        return lista;
    }else return "Opción inválida.";

}

function borrar(lista, opcion){

    if(opcion == 1){
        if(lista.length == 0){
            return false;
        }else{
            resultado =  `Se eliminó el país ${lista.shift()} del principio.`;
        }
    }else{
        if(lista.length == 0){
            return false;
        }else{
            resultado =  `Se eliminó el país ${lista.pop()} del final.`;
        }
    }

    document.getElementById("apartado4").innerHTML = resultado;

}

function buscarIndice(lista){

    let resultado;
    let indice = document.getElementById("indiceApartado5").value;
    if(indice >= lista.length){
        resultado = "No se pudo encontrar, no hay tantos países";
    }else{
        resultado = `El país con el índice ${indice} es ${lista[indice]}`;
    }

    document.getElementById("apartado5a").innerHTML = resultado;
}

function buscarNombre(lista){

    let resultado;
    pais = document.getElementById("paisApartado5").value;
    if(!lista.indexOf(pais)){
        resultado = "Ese país no está en la lista."
    }else{
        resultado = `El país ${pais} está en el índice ${lista.indexOf(pais)}`;
    }

    document.getElementById("apartado5b").innerHTML = resultado;

}
