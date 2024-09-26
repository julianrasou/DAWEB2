// setTimeout()
function time(){
    setTimeout(fecha,2000);
}
time();
function fecha(){
    let fecha=new Date();
    document.getElementById("resultado").innerHTML += `${fecha}`;
};


// setInterval()
let intervalo = setInterval(fecha,2000);
function intervalos(){
    intervalo;
}
intervalos();
function fecha(){
    let fecha = new Date();
    document.getElementById("resultado").innerHTML += `${fecha}`;
    clearInterval(intervalo);
}
