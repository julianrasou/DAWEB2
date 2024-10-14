import * as lib from "../Ejercicio 1/libreria.js";

let d1 = new disco.Disco("El disco", "El grupo", "12/6/1999", "El género");
let d2 = new disco.Disco("El disco2", "El grupo2", "12/6/2000", "El género2");
let d3 = new disco.Disco("El disco3", "El grupo3", "12/6/2001", "El género3");
let d4 = new disco.Disco("El disco4", "El grupo4", "12/6/2002", "El género4");

let discos = [d1, d2, d3, d4];

// Mostrar número de discos:
document.getElementById("apartado1").innerHTML = `Hay ${lib.contar(discos)} discos.`;
