var miVentana;
var intervalo;
posX = 50;
posY = 50;
let velocidadX = 3;
let velocidadY = 3;

function crearVentana(){

    miVentana = window.open("","","width=500,height=200,top=50,left=50");
    miVentana.document.write("<h3 style=\"text-align: center;\">La ventana que rebota</h3>")

    intervalo = setInterval(moverVentana, 10);

}

function cerrarVentana(){
    miVentana.close();
    clearInterval(intervalo);
}

function pararVentana(){
    clearInterval(intervalo);
}

function moverVentana(){
    let pantallaAncho = screen.availWidth;
    let pantallaAlto = screen.availHeight;


    if(((posX+500) >= pantallaAncho) || (posX <= 0)){
        velocidadX = (-velocidadX);
    }
    if(((posY+200) >= pantallaAlto) || (posY <= 0)){
        velocidadY = (-velocidadY);
    }

    posX += velocidadX;
    posY += velocidadY;

    miVentana.moveTo(posX, posY);



}