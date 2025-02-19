function contar(lista) {

    return lista.length;

}

function mostrar(lista, input, min, max) {

    console.log(min)
    let valorMin = (!min || min == NaN) ? 0 : min;
    let valorMax = (!max || max == NaN) ? 3000 : max;
    let discos = [];

    lista.forEach(disco => {
        
        if(disco.publicacion >= valorMin && disco.publicacion <= valorMax) {

            discos.push(disco);
            
        }

    });

    if (input == 1) {

        return discos;

    } else if (input == 2) {

        let lista2 = discos.slice();
        lista2.reverse();
        return lista2;

    } else if (input == 3) {

        if (typeof discos[0] == "object") {

            let lista2 = discos.slice();
            lista2.sort(function (a, b) {
                return a.nombre.localeCompare(b.nombre);
            });
            return lista2;

        } else {

            let lista2 = discos.slice();
            lista2.sort();
            return lista2;

        }

    } else return false;

}

export default {contar, mostrar}