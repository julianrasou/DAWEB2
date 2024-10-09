class jugador {

    constructor() {
        this.fuerza = 1;
    }

    get getFuerza(){
        return this.fuerza;
    }

    set setFuerza(cantidad){
        this.fuerza += cantidad;
    }

}

pj = new jugador();

function incrementar() {

    pj.setFuerza = 1;

}
function mostrar(){

    fuerza = pj.getFuerza;

    document.getElementById("output").innerHTML = `Tu fuerza es ${fuerza}`;

}