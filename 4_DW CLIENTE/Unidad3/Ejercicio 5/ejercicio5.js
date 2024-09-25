// . isInteger()
function calcular(){
    
    input = parseInt(document.getElementById("input").value);
    document.getElementById("resultado").innerHTML = `Valor exponencial: ${input.toExponential()}<br>`;
    document.getElementById("resultado").innerHTML += `Con 4 decimales: ${input.toFixed(4)}<br>`;
    document.getElementById("resultado").innerHTML += `En binario: ${input.toString(2)}<br>`;
    document.getElementById("resultado").innerHTML += `En octal: ${input.toString(8)}<br>`;
    document.getElementById("resultado").innerHTML += `En hexadecimal: ${input.toString(16)}<br>`;

}
