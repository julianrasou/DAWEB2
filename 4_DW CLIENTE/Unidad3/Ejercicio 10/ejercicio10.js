function ventana(){
    
    let respuesta = confirm("Hay un error, no se pudo cargar la página.");
    if(respuesta){
        ventana()
    }else{
        location.assign("https://coachingsanitario.com/wp-content/uploads/2019/06/ERROR.jpg")
    }

}
ventana()