var miVentana;
var intervalo;
function crearVentana(){

    miVentana = window.open("","","width=500,height=200,top=0,left=0");
    miVentana.document.write("<h3 style=\"text-align: center;\">La ventana que rebota</h3>")

    intervalo = setInterval(moverVentana, 10);

}

function cerrarVentana(){
    miVentana.close();
    clearInterval(intervalo);
}

function moverVentana(){
    let velocidadX = 3;
    let velocidadY = 3;
    let derecha, abajo;
    if(miVentana.screenX <= (window.outerWidth-miVentana.outerWidth-100)){
        derecha = false;
    }else if(miVentana.screenX <= 100){
        derecha = true;
    }
    if(miVentana.screenY <= (window.outerHeight-miVentana.outerHeight-100)){
        abajo = false;
    }else if(miVentana.screenY <= 100){
        abajo = true;
    }

    if(derecha){
        velocidadX = -3;
    }else{
        velocidadX = 3;
    }
    if(abajo){
        velocidadY = -3;
    }else{
        velocidadY = 3;
    }

    if(!miVentana.closed){
        miVentana.moveBy(velocidadY,velocidadX);
    }

}