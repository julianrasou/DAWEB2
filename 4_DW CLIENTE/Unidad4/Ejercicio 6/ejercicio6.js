let convocatorias = ["Marcos,Luis,Pepe,Manuel,Lolo", "Marcos,Pepe,Luis,Antonio,Pedro", "Juan,Luis,Pepe,lolo,Marcos"];
function convocados(){

    let comunes = new Set(convocatorias[0].split(','));

    for(let i=1; i<convocatorias.length;i++){

        let actuales = new Set(convocatorias[i].split(','));
        comunes = new Set([...comunes].filter(jugador => actuales.has(jugador)));
        
    }
    document.getElementById("resultado").innerHTML += [...comunes];

}
