let jugadoras=["Luisa", "Maria", "Carlota", "Ana", "Martina", "Claudia"];
let respuesta = prompt ("Introduce una jugadora:");
let acierto=false;
for(let i=0;i<jugadoras.length;i++){
    if(respuesta==jugadoras[i]){
        alert("Jugadora convocada.");
        acierto=true;
    }
}
if(acierto==false){
    alert("Jugadora no convocada.");
}