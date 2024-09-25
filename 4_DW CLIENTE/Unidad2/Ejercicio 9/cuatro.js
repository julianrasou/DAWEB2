let respuesta = prompt ("Mensaje");
switch (true) {
    case respuesta<0:
        window.alert("La edad no puede ser negativa.");
        break;
    case respuesta<=12:
        window.alert("Eres un niño.");
        break;
    case respuesta<=26:
        window.alert("Eres un jóven.");
        break;
    case respuesta<=60:
        window.alert("Eres un adulto.");
        break;
    default:
        window.alert("Eres un jubilado.");
        break;
}