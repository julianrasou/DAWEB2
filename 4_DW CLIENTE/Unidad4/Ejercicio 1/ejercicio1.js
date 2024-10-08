import * as lib from "./libreria.js";
let paises = ["España", "Francia", "Holanda", "Italia", "Portugal"];

document.getElementById("apartado1").innerHTML = `Hay ${lib.contar(paises)} países.`;
document.getElementById("original").innerHTML = lib.mostrar(paises, 1);
document.getElementById("reves").innerHTML = lib.mostrar(paises, 2);
document.getElementById("alfa").innerHTML = lib.mostrar(paises, 3);
document.getElementById("principio").innerHTML = `Se añadió Fuenlabrada al principio. El nuevo array: ${lib.añadir(paises, 1, "Fuenlabrada")}.`;
document.getElementById("final").innerHTML = `Se añadió Torremolinos al final. El nuevo array: ${lib.añadir(paises, 2, "Torremolinos")}.`;
document.getElementById("principio2").innerHTML = `Se eliminó ${lib.borrar(paises, 1)} del principio.`;
document.getElementById("final2").innerHTML = `Se eliminó ${lib.borrar(paises, 2)} del final.`;
document.getElementById("apartado5a").innerHTML = `El país con índice 2 es: ${lib.buscarIndice(paises, 2)}.`;
document.getElementById("apartado5b").innerHTML = `El índice de Francia es: ${lib.buscarNombre(paises, "Francia")}.`;