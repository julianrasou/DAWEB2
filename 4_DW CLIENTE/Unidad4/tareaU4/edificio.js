class Edificio {

    constructor(calle, num, cp) {

        this.calle = calle;
        this.numero = num;
        this.codigoPostal = cp;
        this.plantas = [[]];

        this.mensajeEdificio(calle, num, cp);

    }
    // setters
    set modificarNumero(num) {

        this.numero = num;

    }
    set modificarCalle(nuevaCalle) {

        this.calle = nuevaCalle;

    }
    set modificarCp(nuevoCP) {

        this.codigoPostal = nuevoCP;

    }
    // getters
    get imprimeNumero() {

        return this.numero;
    
    }
    get imprimeCalle() {

        return this.calle;

    }
    get imprimeCodigoPostal(){

        return this.codigoPostal;

    }

    agregarPlantasYPuertas(numPlantas, numPuertas){
        // TODO: implementar método

    }

    agregatPropietario(propietario, numPlanta, numPuerta){
        // TODO: implementar método




        this.mensajePropietario(propietario, numPlanta, numPuerta);

    }

    imprimePlantas(){
        // TODO: implementar método

    }

    mensajePropietario(nombre, planta, puerta){

        document.getElementById("mensaje").innerHTML += `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.<br/>`;

    }
    mensajeEdificio(calle, numero, cp){

        document.getElementById("mensaje").innerHTML += `Construido nuevo edificio en la calle: ${calle}, número: ${numero}, CP: ${cp}.<br/>`;

    }

}





edificio1 = new Edificio("Ribeiriña", "1B", 15659);
edificio2 = new Edificio("Miramar Castrillón", "3", 15009);
edificio3 = new Edificio("Nicaragua", "21", 15005);

