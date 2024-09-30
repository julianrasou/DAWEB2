var miVentana;
var intervalo;
function crearVentana(){

    miVentana = window.open("","","width=500,height=200");
    miVentana.document.write("<h3 style=\"text-align: center;\">La ventana que rebota</h3>")

    intervalo = setInterval(moverVentana, 10);

}

function cerrarVentana(){
    miVentana.close();
    clearInterval(intervalo);
}

function moverVentana(){
    let velocidadX;
    let velocidadY;
    if(miVentana.screenX < (window.innerWidth-miVentana.innerWidth)){
        velocidadX = 3;
    }else if(miVentana.screenX < 0){
        velocidadX = -3;
    }
    if(miVentana.screenY < (window.innerHeight-miVentana.innerHeight)){
        velocidadY = 3;
    }else if(miVentana.screenY < 0){
        velocidadY = -3;
    }

    if(!miVentana.closed){
        miVentana.moveBy(velocidadX,velocidadY);
    }

}