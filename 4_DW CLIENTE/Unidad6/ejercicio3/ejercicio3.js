window.addEventListener("DOMContentLoaded",iniciar);

let discos = [];

function iniciar() {

    ////////////////////////////////////////////////////////////
    // CREACIÓN DE LOS ELEMENTOS DE FORMULARIO PARA EL NOMBRE //
    ////////////////////////////////////////////////////////////

    let pNombre = document.createElement("p"); // párrafo
    // label
    let labelNombre = document.createElement("label"); 
    labelNombre.setAttribute("for", "nombre");
    labelNombre.setAttribute("id", "nombre_etiqueta");
    labelNombre.appendChild(document.createTextNode("Nombre del disco: "))
    // input
    let inputNombre = document.createElement("input");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("name", "nombre");
    inputNombre.setAttribute("id", "nombre");
    // span
    let spanNombre = document.createElement("span");
    spanNombre.setAttribute("id", "nombre_error");
    spanNombre.setAttribute("class", "error_etiqueta");
    // añadidos al párrafo
    pNombre.appendChild(labelNombre);
    pNombre.appendChild(inputNombre);
    pNombre.appendChild(spanNombre);

    ///////////////////////////////////////////////////////////
    // CREACIÓN DE LOS ELEMENTOS DE FORMULARIO PARA EL GRUPO //
    ///////////////////////////////////////////////////////////

    let pGrupo = document.createElement("p"); // párrafo
    // label
    let labelGrupo = document.createElement("label"); 
    labelGrupo.setAttribute("for", "grupo");
    labelGrupo.setAttribute("id", "grupo_etiqueta");
    labelGrupo.appendChild(document.createTextNode("Grupo de música o cantante: "))
    // input
    let inputGrupo = document.createElement("input");
    inputGrupo.setAttribute("type", "text");
    inputGrupo.setAttribute("name", "grupo");
    inputGrupo.setAttribute("id", "grupo");
    // span
    let spanGrupo = document.createElement("span");
    spanGrupo.setAttribute("id", "grupo_error");
    spanGrupo.setAttribute("class", "error_etiqueta");
    // añadidos al párrafo
    pGrupo.appendChild(labelGrupo);
    pGrupo.appendChild(inputGrupo);
    pGrupo.appendChild(spanGrupo);

    /////////////////////////////////////////////////////////
    // CREACIÓN DE LOS ELEMENTOS DE FORMULARIO PARA EL AÑO //
    /////////////////////////////////////////////////////////

    let pAnio = document.createElement("p"); // párrafo
    // label
    let labelAnio = document.createElement("label"); 
    labelAnio.setAttribute("for", "anio");
    labelAnio.setAttribute("id", "anio_etiqueta");
    labelAnio.appendChild(document.createTextNode("Año de publicación: "))
    // input
    let inputAnio = document.createElement("input");
    inputAnio.setAttribute("type", "text");
    inputAnio.setAttribute("name", "anio");
    inputAnio.setAttribute("id", "anio");
    // span
    let spanAnio = document.createElement("span");
    spanAnio.setAttribute("id", "anio_error");
    spanAnio.setAttribute("class", "error_etiqueta");
    // añadidos al párrafo
    pAnio.appendChild(labelAnio);
    pAnio.appendChild(inputAnio);
    pAnio.appendChild(spanAnio);

    ////////////////////////////////////////////////////////////////////
    // CREACIÓN DE LOS ELEMENTOS DE FORMULARIO PARA EL TIPO DE MÚSICA //
    ////////////////////////////////////////////////////////////////////

    let pTipo = document.createElement("p"); // párrafo
    // label
    let labelTipo = document.createElement("label"); 
    labelTipo.setAttribute("for", "tipo");
    labelTipo.appendChild(document.createTextNode("Tipo de música: "))
    // input
    let selectTipo = document.createElement("select");
    selectTipo.setAttribute("name", "tipo");
    selectTipo.setAttribute("id", "tipo");
    // opciones
    let opcion = document.createElement("option")
    let opcion2 = document.createElement("option")
    let opcion3 = document.createElement("option")
    let opcion4 = document.createElement("option")
    
    opcion.appendChild(document.createTextNode("Pop"))
    opcion2.appendChild(document.createTextNode("Rock"))
    opcion3.appendChild(document.createTextNode("Punk"))
    opcion4.appendChild(document.createTextNode("Indie"))

    opcion.setAttribute("value", "pop")
    opcion2.setAttribute("value", "rock")
    opcion3.setAttribute("value", "punk")
    opcion4.setAttribute("value", "Indie")

    selectTipo.appendChild(opcion)
    selectTipo.appendChild(opcion2)
    selectTipo.appendChild(opcion3)
    selectTipo.appendChild(opcion4)
    // añadidos al párrafo
    pTipo.appendChild(labelTipo);
    pTipo.appendChild(selectTipo);

    //////////////////////////////////////////////////////////////////
    // CREACIÓN DE LOS ELEMENTOS DE FORMULARIO PARA LA LOCALIZACIÓN //
    //////////////////////////////////////////////////////////////////

    let pLocalizacion = document.createElement("p"); // párrafo
    // label
    let labelLocalizacion = document.createElement("label"); 
    labelLocalizacion.setAttribute("for", "localizacion");
    labelLocalizacion.setAttribute("id", "localizacion_etiqueta");
    labelLocalizacion.appendChild(document.createTextNode("Localización en la estantería: "))
    // input
    let inputLocalizacion = document.createElement("input");
    inputLocalizacion.setAttribute("type", "text");
    inputLocalizacion.setAttribute("name", "localizacion");
    inputLocalizacion.setAttribute("id", "localizacion");
    // span
    let spanLocalizacion = document.createElement("span");
    spanLocalizacion.setAttribute("id", "localizacion_error");
    spanLocalizacion.setAttribute("class", "error_etiqueta");
    // añadidos al párrafo
    pLocalizacion.appendChild(labelLocalizacion);
    pLocalizacion.appendChild(inputLocalizacion);
    pLocalizacion.appendChild(spanLocalizacion);

    //////////////////////////////////////////////////////////////////
    // CREACIÓN DE LOS ELEMENTOS DE FORMULARIO PARA LA LOCALIZACIÓN //
    //////////////////////////////////////////////////////////////////

    let pPrestado = document.createElement("p"); // párrafo
    // label
    let labelPrestado = document.createElement("label"); 
    labelPrestado.setAttribute("for", "prestado");
    labelPrestado.appendChild(document.createTextNode("Prestado: "))
    // input
    let inputPrestado = document.createElement("input");
    inputPrestado.setAttribute("type", "checkbox");
    inputPrestado.setAttribute("name", "prestado");
    inputPrestado.setAttribute("id", "prestado");
    // label 2
    let labelPrestado2 = document.createElement("label"); 
    labelPrestado2.setAttribute("for", "prestado");
    labelPrestado2.appendChild(document.createTextNode("Sí"))
    // añadidos al párrafo
    pPrestado.appendChild(labelPrestado);
    pPrestado.appendChild(inputPrestado);
    pPrestado.appendChild(labelPrestado2);

    ///////////////////////////////////////////////////////////
    // CREACIÓN DE LOS ELEMENTOS DE FORMULARIO PARA EL BOTÓN //
    ///////////////////////////////////////////////////////////

    let boton = document.createElement("button");

    boton.appendChild(document.createTextNode("Submit"));

    boton.setAttribute("name", "boton");
    boton.setAttribute("id", "boton");
    boton.setAttribute("value", "boton");

    /////////////////////////////
    // CREACIÓN DEL FORMULARIO //
    /////////////////////////////
    
    let formulario = document.createElement("form");
    formulario.appendChild(pNombre);
    formulario.appendChild(pGrupo);
    formulario.appendChild(pAnio);
    formulario.appendChild(pTipo);
    formulario.appendChild(pLocalizacion);
    formulario.appendChild(pPrestado);
    formulario.appendChild(boton);

    document.querySelector("main").appendChild(formulario);

    document.querySelector("#boton").addEventListener("click", function (e) {

        nombre = validarNombre();
        grupo = validarGrupo();
        anio = validarAnio();
        localizacion = validarLocalizacion();
    
        if (nombre && grupo && anio && localizacion) {
    
            e.preventDefault();

            let nombre = document.querySelector("#nombre").value;
            let grupo = document.querySelector("#grupo").value;
            let anio = document.querySelector("#anio").value;
            let tipo = document.querySelector("#tipo").value;
            let localizacion = document.querySelector("#localizacion").value;
            let prestado = document.querySelector("#prestado").checked;

            let a = [nombre, grupo, anio, tipo, localizacion, prestado];

            discos.push(a)

            console.log(discos)
            
            pintarTabla()

            return true;
    
        } else {
    
            e.preventDefault();
            return false;
    
        }


        function validarNombre() {

            let selector = "#nombre";
            let nombre = document.querySelector(selector).value;
        
            if(nombre === "") {
        
                error(selector, "No puede estar vacío.");
                return false;
        
            }else if(nombre.length > 20) {
        
                error(selector, "No puede tener más de 20 caracteres.");
                return false;
        
            }else {
        
                limpiarError(selector);
                return true; 
                
            } 
            
        
        }
        
        function validarGrupo() {

            let selector = "#grupo";
            let grupo = document.querySelector(selector).value;
        
            if(grupo === "") {
        
                error(selector, "No puede estar vacío.");
                return false;
        
            }else if(grupo.length > 20) {
        
                error(selector, "No puede tener más de 20 caracteres.");
                return false;
        
            }else {
        
                limpiarError(selector);
                return true;
        
            }
        
        }
        
        function validarAnio() {

            let selector = "#anio";
            let anio = document.querySelector(selector).value;
            let patron = /^\d{4}$/;
        
            if(!patron.test(anio)) {
        
                error(selector, "Año inválido.");
                return false;
        
            }else {
        
                limpiarError(selector);
                return true;
        
            }
        
        }

        function validarLocalizacion() {
    
            let selector = "#localizacion";
            let localizacion = document.querySelector(selector).value;
        
            if(isNaN(localizacion)) {
        
                error(selector, "Localización inválida.");
                return false;
        
            }else {
        
                limpiarError(selector);
                return true;
                
            }
        }

        function error(campo, mensaje) {

            document.querySelector(campo).classList.add("error");
            document.querySelector(campo+"_etiqueta").classList.add("error_etiqueta");
            document.querySelector(campo+"_error").innerHTML = " " + mensaje;
        
        }

        function limpiarError(campo) {

            document.querySelector(campo).classList.remove("error");
            document.querySelector(campo+"_etiqueta").classList.remove("error_etiqueta");
            document.querySelector(campo+"_error").innerHTML = "";
        
        }

    });

}

function pintarTabla() {

    let tabla = document.createElement("table");

    let cabecera = document.createElement("tr");
    let nombre = document.createElement("td");
    nombre.appendChild(document.createTextNode("Nombre"));
    cabecera.appendChild(nombre);

    let grupo = document.createElement("td");
    grupo.appendChild(document.createTextNode("Grupo"));
    cabecera.appendChild(grupo);

    let anio = document.createElement("td");
    anio.appendChild(document.createTextNode("Anio"));
    cabecera.appendChild(anio);

    let tipo = document.createElement("td");
    tipo.appendChild(document.createTextNode("Tipo"));
    cabecera.appendChild(tipo);

    let localizacion = document.createElement("td");
    localizacion.appendChild(document.createTextNode("Localizacion"));
    cabecera.appendChild(localizacion)

    let prestado = document.createElement("td");
    prestado.appendChild(document.createTextNode("Prestado"));
    cabecera.appendChild(prestado)

    tabla.appendChild(cabecera);

    discos.forEach(disco => {

        let tr = document.createElement("tr");

        disco.forEach(elemento => {

            let td = document.createElement("td");
            td.appendChild(document.createTextNode(elemento));

            tr.appendChild(td);

        })

        tabla.appendChild(tr);
        
    });

    tabla.border = "1";
    tabla.style.borderCollapse = "collapse";

    document.querySelector("#tabla").innerHTML = "";
    document.querySelector("#tabla").appendChild(tabla);

}






