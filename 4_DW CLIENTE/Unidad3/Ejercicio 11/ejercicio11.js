navigator.geolocation.getCurrentPosition(siHayExito);

function siHayExito(p){
    console.log(`Tu latitud: ${p.coords.latitude}<br>`);
    console.log(`Tu longitud: ${p.coords.longitude}`);

}