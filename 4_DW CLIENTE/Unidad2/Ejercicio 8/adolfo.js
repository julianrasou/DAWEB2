do{
    var acierto = false;
    switch (respuesta = prompt("¿Cuál es el nombre del primer presidente de la democracia?")) {
        case "Adolfo Suárez":
            acierto = true;
            break;
        case "Adolfo":
            alert("Te falta el apellido. ¿Cuál es el nombre del primer presidente de la democracia?")
            break;
        case "Suárez":
            alert("Te falta el nombre. ¿Cuál es el nombre del primer presidente de la democracia?")
            break;
        default:
            alert("ERROR. ¿Cuál es el nombre del primer presidente de la democracia?");
            break;
    }
}while(acierto != true)

