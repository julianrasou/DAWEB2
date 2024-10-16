import * as lib from "../Ejercicio 1/libreria.js";

class Disco {
    constructor(nombre, grupo, publicacion, genero) {

        this.nombre = nombre;
        this.grupo = grupo;
        this.publicacion = publicacion;
        this.genero = genero;
        this.localizacion = 0;
        this.prestado = false;
        this.caratula = "imagen.png";

    }

    set nuevaLocalizacion(loc){

        this.localizacion = loc;

    }

    set nuevoPrestado(pre){

        this.prestado = pre;

    }

    get mostrarInfo(){
        
        let info = {"nombre":this.nombre,"grupo":this.grupo,"publicacion":this.publicacion,"genero":this.genero,"localizacion":this.localizacion, "prestado":this.prestado, "caratula":this.caratula};
        return info;

    }
}

function mostrarDiscos(discos) {
    
    let resultado = "<table border=\"1\">";
    resultado += "<tr><td>Nombre</td><td>Grupo</td><td>Publicación</td><td>Genero</td><td>Localización</td><td>Prestado</td><td>Caratula</td></tr>";

    discos.forEach(element => {
        
        resultado += "<tr>";
        
        resultado += `<td>${element["nombre"]}</td>`;
        resultado += `<td>${element["grupo"]}</td>`;
        resultado += `<td>${element["publicacion"]}</td>`;
        resultado += `<td>${element["genero"]}</td>`;
        resultado += `<td>${element["localizacion"]}</td>`;
        resultado += `<td>${element["prestado"]}</td>`;
        resultado += `<td>${element["caratula"]}</td>`;

        resultado += "</tr>";

    });

    resultado += "</table>";

    return resultado;

}

function mostrarDisco(disco) {

    let resultado = "<table border=\"1\">";
    resultado += "<tr><td>Nombre</td><td>Grupo</td><td>Publicación</td><td>Genero</td><td>Localización</td><td>Prestado</td><td>Caratula</td></tr>";

    resultado += "<tr>";
        
    resultado += `<td>${disco["nombre"]}</td>`;
    resultado += `<td>${disco["grupo"]}</td>`;
    resultado += `<td>${disco["publicacion"]}</td>`;
    resultado += `<td>${disco["genero"]}</td>`;
    resultado += `<td>${disco["localizacion"]}</td>`;
    resultado += `<td>${disco["prestado"]}</td>`;
    resultado += `<td>${disco["caratula"]}</td>`;

    resultado += "</tr>";


    resultado += "</table>";

    return resultado;
    
}

function mostrarPorAño(lista, min, max) {

    let resultado = "<table border=\"1\">";
    resultado += "<tr><td>Nombre</td><td>Grupo</td><td>Publicación</td><td>Genero</td><td>Localización</td><td>Prestado</td><td>Caratula</td></tr>";

    lista.forEach(disco =>{

        if(disco.publicacion>=min && disco.publicacion<=max){

            resultado += "<tr>";
        
            resultado += `<td>${disco["nombre"]}</td>`;
            resultado += `<td>${disco["grupo"]}</td>`;
            resultado += `<td>${disco["publicacion"]}</td>`;
            resultado += `<td>${disco["genero"]}</td>`;
            resultado += `<td>${disco["localizacion"]}</td>`;
            resultado += `<td>${disco["prestado"]}</td>`;
            resultado += `<td>${disco["caratula"]}</td>`;

            resultado += "</tr>";

        }

    })

    resultado += "</table>";

    return resultado;
    
}




let d1 = new Disco("A El disco", "El grupo", 1999, "El género");
let d2 = new Disco("B El disco2", "El grupo2", 2000, "El género2");
let d3 = new Disco("D El disco3", "El grupo3", 2001, "El género3");
let d4 = new Disco("C El disco4", "El grupo4", 2002, "El género4");

let discos = [d1, d2, d3, d4];

// Mostrar número de discos:
document.getElementById("apartado1").innerHTML = `Hay ${lib.contar(discos)} discos.`;

document.getElementById("apartado2").innerHTML = "Orden normal: <br>" + mostrarDiscos(discos);
document.getElementById("apartado22").innerHTML = "Del revés: <br>" + mostrarDiscos(lib.mostrar(discos, 2));
document.getElementById("apartado222").innerHTML = "Alfabéticamente: <br>" + mostrarDiscos(lib.mostrar(discos, 3));


document.getElementById("apartado3").innerHTML = "Discos en rango de 2000 a 2001: " + mostrarPorAño(discos, 2000, 2001);

let d5 = new Disco("E El disco5", "El grupo5", 2003, "El género5");
let d6 = new Disco("F El disco6", "El grupo6", 2004, "El género6");

document.getElementById("apartado4").innerHTML = "Añadido disco al final: <br> " + mostrarDiscos(lib.añadir(discos, 2, d5));
document.getElementById("apartado44").innerHTML = "Añadido disco al principio: <br> " + mostrarDiscos(lib.añadir(discos, 1, d6));

lib.borrar(discos, 1);
document.getElementById("apartado5").innerHTML = "Borrado disco del principio: <br> " + mostrarDiscos(discos);
lib.borrar(discos, 2);
document.getElementById("apartado55").innerHTML = "Borrado disco del final: <br> " + mostrarDiscos(discos);

document.getElementById("apartado6").innerHTML = "Buscar índice 2: <br> " + mostrarDisco(lib.buscarIndice(discos, 2));
document.getElementById("apartado66").innerHTML = "Posición del disco B El disco2: " + lib.buscarNombre(discos, "B El disco2");




