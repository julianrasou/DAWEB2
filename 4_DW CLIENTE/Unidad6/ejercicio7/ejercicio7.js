class Edificio{

    constructor(calle, numero, cp){

        this.calle=calle;
        this.numero=numero;
        this.cp=cp;
        this.plantas=[];
        this.puertas=0;
        this.propietarios;
        
    }

    agregarPlantasYPuertas(numPlantas, numPuertas){

        let resultado=``;

        for (let i = 0; i < numPlantas; i++) {

            const planta = {
                numPlanta: this.plantas.length + 1,
                puertas: []
            };
            for (let j = 0; j < numPuertas; j++) {
                planta.puertas.push({
                    numero: j + 1,
                    propietario: ""
                });
            }
            
            this.plantas.push(planta);
            
        }

        resultado += `${numPlantas} plantas con ${numPuertas} puertas añadidas en ${this.calle}, nº${this.numero} </br>`;
        return resultado;

    }

    ModificarNumero(numero){

        if(typeof(numero)=="number") this.numero = numero;
        else alert("Error, introduce un valor nuevo");

    }

    ModificarCalle(calle){

        if(typeof(calle)=="string") this.calle = calle;
        else alert("Error, introduce un valor nuevo");

    }

    ModificarCodigoPostal(codigo){

        if(typeof(codigo)=="number") this.cp = codigo;
        else alert("Error, introduce un valor nuevo");

    }

    ImprimeCalle(){

        return this.calle;

    }

    ImprimeNumero(){

        return this.numero;

    }

    ImprimeCodigoPostal(){

        return this.cp;

    }

    agregarPropietario(nombre, planta, puerta){

        let resultado=``;

        if (planta <= this.plantas.length && puerta <= this.plantas[planta - 1].puertas.length) {
            
            if (this.plantas[planta - 1].puertas[puerta - 1].propietario) {
                console.log(`La puerta ${puerta} en la planta ${planta} ya está ocupada.`);
            } else {
                this.plantas[planta - 1].puertas[puerta - 1].propietario = nombre;
                resultado += `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}. </br>`;
            }

        } else {

            console.log("La planta o puerta especificada no existe.");

        }

        return resultado;

    }

    ImprimePlantas(){

        let resultado=``;

        this.plantas.forEach(planta => {

            planta.puertas.forEach(puerta => {
                resultado +=`
                    Propietario del piso ${puerta.numero} de la planta ${planta.numPlanta}: ${puerta.propietario} </br>
                `;
            });

        });

        return resultado

    }

    toString() {

        return `Calle ${this.calle}, nº ${this.numero}, CP ${this.cp}`;

    }    

}



document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    let edificios = [];

    document.querySelector("#mostrar").addEventListener("click", mostrarEdificio)

    document.querySelector("#formulario1").addEventListener('submit', (event) => {

        event.preventDefault(); 

        let direccion = document.getElementById('direccion').value.trim();
        let numero = parseInt(document.getElementById('numero').value);
        let cp = parseInt(document.getElementById('cp').value);
        let planta = parseInt(document.getElementById('planta').value);
        let puerta = parseInt(document.getElementById('puerta').value);

        if (direccion === "" || numero <= 0 || cp < 1000 || planta <= 0 || puerta <= 0) {
            alert("Por favor, introduce datos válidos en todos los campos.");
            return;
        }

        let nuevoEdificio = new Edificio(direccion, numero, cp);
        nuevoEdificio.agregarPlantasYPuertas(planta, puerta);
        edificios.push(nuevoEdificio);

        actualizarListaEdificios();
        
    });

    function actualizarListaEdificios() {

        document.querySelector("#listaEdificios").innerHTML = ''; 
        document.querySelector("#selectEdificio").innerHTML = ''; 
    
        edificios.forEach((edificio, index) => {

            let contenedorEdificio = document.createElement('li');
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'edificioSeleccionado';
            radio.value = index; 
            radio.id = `edificio-${index}`;
    
            let etiqueta = document.createElement('label');
            etiqueta.htmlFor = `edificio-${index}`;
            etiqueta.textContent = `${edificio.toString()}`;
    
            contenedorEdificio.appendChild(radio);
            contenedorEdificio.appendChild(etiqueta);
            listaEdificios.appendChild(contenedorEdificio);
    

            let option = document.createElement('option');
            option.value = index;
            option.textContent = `${edificio.calle}, nº ${edificio.numero}`;
            document.querySelector("#selectEdificio").appendChild(option);
        });

    }

    function mostrarEdificio() {
        let indexEdificio = document.querySelector("#selectEdificio").value;
    
        if (indexEdificio === '') {
            alert('Por favor, selecciona un edificio en el desplegable.');
            return;
        }
    
        let edificio = edificios[indexEdificio];
    

        let tabla = document.createElement('table');
        tabla.style.border = "1px solid black";
        tabla.style.backgroundColor = "#E2B71A";
        tabla.style.marginTop = "20px";
    

        let plantasOrdenadas = [...edificio.plantas].sort((a, b) => b.numPlanta - a.numPlanta);
    

        plantasOrdenadas.forEach((planta) => {
            let fila = document.createElement('tr');
    

            let celdaPlanta = document.createElement('td');
            celdaPlanta.textContent = `Planta ${planta.numPlanta}`;
            celdaPlanta.style.border = "1px solid black";
            celdaPlanta.style.backgroundColor = "#DDDDDD";
            fila.appendChild(celdaPlanta);
    

            planta.puertas.forEach((puerta) => {
                let celdaPuerta = document.createElement('td');
                celdaPuerta.textContent = puerta.propietario || 'Vacío';
                celdaPuerta.style.border = "1px solid black";
                celdaPuerta.style.cursor = "pointer";
    

                celdaPuerta.addEventListener('click', () => editarPropietarioDesdeTabla(celdaPuerta, edificio, planta.numPlanta, puerta.numero));
    
                fila.appendChild(celdaPuerta);
            });
    
            tabla.appendChild(fila);
        });
    

        const tablasPrevias = document.querySelectorAll('table');
        tablasPrevias.forEach(tablaAntigua => tablaAntigua.remove());
        document.querySelector("#contenido").appendChild(tabla);
    }

    function editarPropietarioDesdeTabla(celda, edificio, numPlanta, numPuerta) {

        celda.innerHTML = '';
    

        let etiqueta = document.createElement('label');
        etiqueta.textContent = 'Propietario: ';
        let inputPropietario = document.createElement('input');
        inputPropietario.type = 'text';
        inputPropietario.value = edificio.plantas[numPlanta - 1].puertas[numPuerta - 1].propietario || '';
    

        inputPropietario.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                let nuevoPropietario = inputPropietario.value.trim();
                edificio.plantas[numPlanta - 1].puertas[numPuerta - 1].propietario = nuevoPropietario;
    
                celda.textContent = nuevoPropietario || 'Vacío';
                alert(`Propietario actualizado: ${nuevoPropietario}`);
            }
        });

        inputPropietario.addEventListener('blur', () => {
            let nuevoPropietario = inputPropietario.value.trim();
            edificio.plantas[numPlanta - 1].puertas[numPuerta - 1].propietario = nuevoPropietario;
        
            celda.textContent = nuevoPropietario || 'Vacío';
        });
        
        celda.appendChild(etiqueta);
        celda.appendChild(inputPropietario);
        inputPropietario.focus();
    }

    function editarPropietarioDesdeTabla(celda, edificio, numPlanta, numPuerta) {

        celda.innerHTML = '';
    
        let etiqueta = document.createElement('label');
        etiqueta.textContent = 'Propietario: ';
        let inputPropietario = document.createElement('input');
        inputPropietario.type = 'text';
        inputPropietario.value = edificio.plantas[numPlanta - 1].puertas[numPuerta - 1].propietario || '';
    
        inputPropietario.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                let nuevoPropietario = inputPropietario.value.trim();
                edificio.plantas[numPlanta - 1].puertas[numPuerta - 1].propietario = nuevoPropietario;
    
                celda.textContent = nuevoPropietario || 'Vacío';
                alert(`Propietario actualizado: ${nuevoPropietario}`);
            }
        });

        inputPropietario.addEventListener('blur', () => {
            let nuevoPropietario = inputPropietario.value.trim();
            edificio.plantas[numPlanta - 1].puertas[numPuerta - 1].propietario = nuevoPropietario;
        
            celda.textContent = nuevoPropietario || 'Vacío';
        });
        
    
        celda.appendChild(etiqueta);
        celda.appendChild(inputPropietario);
        inputPropietario.focus();
    }

    document.querySelector("#formulario2").addEventListener('submit', (event) => {
        
        event.preventDefault();
    
        let radioSeleccionado = document.querySelector('input[name="edificioSeleccionado"]:checked');
        if (!radioSeleccionado) {
            alert('Por favor, selecciona un edificio en la lista.');
            return;
        }
    
        let indexEdificio = parseInt(radioSeleccionado.value);
        let edificio = edificios[indexEdificio];
    
        let planta = parseInt(document.getElementById('planta2').value);
        let puerta = parseInt(document.getElementById('puerta2').value);
        let nuevoPropietario = document.getElementById('propietario').value.trim();
    
        if (planta <= 0 || puerta <= 0 || nuevoPropietario === '') {
            alert('Por favor, introduce datos válidos.');
            return;
        }
    
        if (planta > edificio.plantas.length || puerta > edificio.plantas[planta - 1].puertas.length) {
            alert('La planta o puerta especificada no existe.');
            return;
        }
    
        edificio.plantas[planta - 1].puertas[puerta - 1].propietario = nuevoPropietario;
    
        alert(`Propietario actualizado: ${nuevoPropietario}`);
        actualizarListaEdificios(); 

    });

}