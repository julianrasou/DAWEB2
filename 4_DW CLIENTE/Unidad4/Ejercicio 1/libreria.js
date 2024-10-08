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

    }else return false;

}

function añadir(lista, opcion, pais){

    if(pais == "") return false;

    if(opcion == 2){

        lista.push(pais);
        return lista;

    }else if(opcion == 1){

        lista.unshift(pais);
        return lista;

    }else return false;

}

function borrar(lista, opcion){

    if(opcion == 1){

        if(lista.length == 0){
            return false;
        }else{
            return lista.shift();
        }

    }else if(opcion == 2){

        if(lista.length == 0){
            return false;
        }else{
            return lista.pop();
        }

    }

}

function buscarIndice(lista, indice){

    if(indice >= lista.length){

        return false;

    }else{

        return lista[indice];

    }

}

function buscarNombre(lista, elemento){

    if(!lista.indexOf(elemento)){

        return false;

    }else{

        return lista.indexOf(elemento);

    }

}


export {contar, mostrar, añadir, borrar, buscarIndice, buscarNombre};

