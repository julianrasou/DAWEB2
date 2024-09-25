function difFechas(){
    
    let fechaActual = new Date();
    let fechaObjetivo = new Date('2025-07-22');

    let diferencia = fechaObjetivo.getTime() - fechaActual.getTime();
    diferencia = diferencia/(1000*60*60*24);
    document.getElementById("hora").innerHTML = `La diferencia entre ${fechaActual.toDateString()} y ${fechaObjetivo.toDateString()} es de ${diferencia} días.`;


}
difFechas();