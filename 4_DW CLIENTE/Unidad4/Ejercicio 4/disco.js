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




let d1 = new Disco("El disco", "El grupo", "12/6/1999", "El género");
let d2 = new Disco("El disco2", "El grupo2", "12/6/2000", "El género2");
let d3 = new Disco("El disco3", "El grupo3", "12/6/2001", "El género3");
let d4 = new Disco("El disco4", "El grupo4", "12/6/2002", "El género4");

let discos = [d1, d2, d3, d4];

// Mostrar número de discos:
document.getElementById("apartado1").innerHTML = `Hay ${lib.contar(discos)} discos.`;
