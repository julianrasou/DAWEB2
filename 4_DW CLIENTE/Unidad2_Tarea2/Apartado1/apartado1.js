function mostrarmul(){
    document.getElementById("multiplicar").innerHTML = ``;
    for (let i = 1; i < 11; i++) {
        let resultado = i * 7;
        document.getElementById("multiplicar").innerHTML += `7 * ${i} = ${resultado}<br>`;
    }
    
    
}
function mostrarsum(){
    let i = 1;
    document.getElementById("sumar").innerHTML = ``;
    while (i <= 11) {
        let respuesta = i + 8;
        document.getElementById("sumar").innerHTML += `8 + ${i} = ${respuesta}<br>`;
        i ++;
    }
    
    
}
function mostrardiv(){
    let i = 1;
    document.getElementById("dividir").innerHTML = ``;
    do {
        let respuesta = 9 / i;
        document.getElementById("dividir").innerHTML += `9 / ${i} = ${respuesta}<br>`;
        i ++;
    } while(i <= 10)
    
    
}