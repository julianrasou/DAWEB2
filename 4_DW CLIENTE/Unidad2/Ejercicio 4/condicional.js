let respuesta = prompt ("Mensaje");
if(respuesta < 0){
    window.alert("La edad no puede ser negativa.");
}else if(respuesta <= 12){
    window.alert("Eres un niño.");
}else if(respuesta <= 26){
    window.alert("Eres un jóven.");
}else if(respuesta <= 60){
    window.alert("Eres un adulto.");
}else{
    window.alert("Eres un jubilado.");
}