function calcular(){
    let radio = document.getElementById("input").value;

    document.getElementById("resultado").innerHTML = `Radio de la circunferencia: <b>${radio} cm</b><br>`;
    document.getElementById("resultado").innerHTML += `Diámetro de la circunferencia: <b>${radio*2} cm</b><br>`;
    document.getElementById("resultado").innerHTML += `Perímetro de la circunferencia: <b>${(radio*2*Math.PI).toFixed(2)} cm</b><br>`;
    document.getElementById("resultado").innerHTML += `Área de la circunferencia: <b>${(Math.pow(radio, 2)*Math.PI).toFixed(2)} cm2</b><br>`;
    document.getElementById("resultado").innerHTML += `Área de la esfera: <b>${(Math.pow(radio, 2)*Math.PI*4).toFixed(2)} cm2</b><br>`;
    document.getElementById("resultado").innerHTML += `Volumen de la esfera: <b>${(Math.pow(radio, 3)*Math.PI*4/3).toFixed(2)} cm3</b>`;

}