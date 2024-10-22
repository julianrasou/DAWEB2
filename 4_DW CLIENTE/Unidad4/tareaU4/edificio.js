class Edificio {

    constructor(calle, num, cp) {

        this.calle = calle;
        this.numero = num;
        this.codigoPostal = cp;
        this.plantas = [];

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
        
        let tamaño = this.plantas.length;
        let nuevasPlantas = tamaño + numPlantas;

        for(let i = tamaño; i < nuevasPlantas; i++){

            this.plantas[i] = [];
            for(let j = 0; j < numPuertas; j++){

                this.plantas[i][j] = "";
            
            }

        }

    }

    agregarPropietario(propietario, numPlanta, numPuerta){
        
        this.plantas[numPlanta-1][numPuerta-1] = propietario;

        this.mensajePropietario(propietario, numPlanta, numPuerta);

    }

    imprimePlantas(){
        
        let resultado = "";
        for(let i = 0; i < this.plantas.length; i++){

            for(let j = 0; j < this.plantas[i].length; j++){

                resultado += `Propietario del piso ${j+1} de la planta ${i+1}: ${this.plantas[i][j]}<br/>`

            }

        }

        return resultado;

    }

    mensajePropietario(nombre, planta, puerta){

        document.getElementById("mensaje").innerHTML += `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.<br/>`;

    }
    mensajeEdificio(calle, numero, cp){

        document.getElementById("mensaje").innerHTML += `Construido nuevo edificio en la calle: ${calle}, número: ${numero}, CP: ${cp}.<br/>`;

    }

}

// Construcción de edificios
edificioA = new Edificio("García Prieto", "58", 15706);
edificioB = new Edificio("Camino Caneiro", "29", 32004);
edificioC = new Edificio("San Clemente", "s/n", 15705);

// Uso de métodos get
document.getElementById("mensaje").innerHTML += "<br/>";
document.getElementById("mensaje").innerHTML += `El código postal del edificio A es: ${edificioA.imprimeCodigoPostal}.<br/>`;
document.getElementById("mensaje").innerHTML += `La calle del edificio C es: ${edificioC.imprimeCalle}.<br/>`;
document.getElementById("mensaje").innerHTML += `El edificio B está situado en la calle ${edificioB.imprimeCalle} número ${edificioB.imprimeNumero}.<br/>`;

// Agregar plantas y puertas
edificioA.agregarPlantasYPuertas(2, 3);

// Agregar propietarios
document.getElementById("mensaje").innerHTML += "<br/>";
edificioA.agregarPropietario("Jose Antonio López", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

// Listado de propietarios del edificio A
document.getElementById("mensaje").innerHTML += "<br/>";
document.getElementById("mensaje").innerHTML += edificioA.imprimePlantas();

// Agregar planta 2
edificioA.agregarPlantasYPuertas(1, 3);

// Agregar otro propietario
document.getElementById("mensaje").innerHTML += "<br/>";
edificioA.agregarPropietario("Pedro Meijide", 3, 2);

// Listado de propietarios 2
document.getElementById("mensaje").innerHTML += "<br/>";
document.getElementById("mensaje").innerHTML += edificioA.imprimePlantas();

