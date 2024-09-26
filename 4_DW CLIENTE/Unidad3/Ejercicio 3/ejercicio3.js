function ejecuta(){
    let operacion = document.getElementById("operacion").value;
    if(operacion == 1) potencia();
    if(operacion == 2) raiz();
    if(operacion == 3) redondeo();
    if(operacion == 4) trigonometria();
}

function potencia(){
    let base = prompt("Base de la potencia:");
    let exponente = prompt("Exponente de la potencia:");
    document.getElementById("resultado").innerHTML = `${base} elevado a ${exponente} es igual a: ${Math.pow(base,exponente)}`
}

function raiz(){
    do {var num = prompt("Introduce un número positivo:");}while(num<0);
    document.getElementById("resultado").innerHTML = `La raíz cuadrada de ${num} es: ${Math.sqrt(num).toFixed(2)}`
}

function redondeo(){
    let num = prompt("Introduce un número decimal:");
    document.getElementById("resultado").innerHTML = `El entero más próximo: ${Math.round(num)}<br>A la baja: ${Math.floor(num)}<br>Al alza: ${Math.ceil(num)}`
}

function trigonometria(){
    let num = prompt("Introduce un ángulo:");
    let rad = (num * Math.PI / 180);
    document.getElementById("resultado").innerHTML = `Seno de ${num}: ${Math.sin(rad)}<br>`
    document.getElementById("resultado").innerHTML += `Coseno de ${num}: ${Math.cos(rad)}<br>`
    document.getElementById("resultado").innerHTML += `Tangente de ${num}: ${Math.tan(rad)}`
}
