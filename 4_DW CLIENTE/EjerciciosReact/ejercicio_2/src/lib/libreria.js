function contar(lista) {

    return lista.length;

}

function mostrar(lista, input) {

    if (input == 1) {

        return lista;

    } else if (input == 2) {

        let lista2 = lista.slice();
        lista2.reverse();
        return lista2;

    } else if (input == 3) {

        if (typeof lista[0] == "object") {

            let lista2 = lista.slice();
            lista2.sort(function (a, b) {
                return a.nombre.localeCompare(b.nombre);
            });
            return lista2;

        } else {

            let lista2 = lista.slice();
            lista2.sort();
            return lista2;

        }

    } else return false;

}

export default {contar, mostrar}