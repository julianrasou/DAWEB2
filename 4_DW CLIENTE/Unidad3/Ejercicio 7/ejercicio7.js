// Apartado a
// setTimeout(function(){document.getElementById("resultado").innerHTML += `${new Date().getDay()} / ${new Date().getMonth()}`}, 2000)

let intervalo = setInterval(function(){document.getElementById("resultado").innerHTML += `${new Date().getDay()} / ${new Date().getMonth()}`}, 2000)
clearInterval(intervalo)