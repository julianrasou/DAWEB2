import { useEffect, useState } from "react";

function Listado({input}) {

    // estado que guarda el array de lenguajes
    const [lenguajes, setLenguajes] = useState([]);

    // se inicializa el estado con los lenguajes del JSON
    useEffect(() => {

        fetch("lenguajes.json").then(function (resultado) {

            return resultado.text();

        }).then(function (datosTXT) {

            let datosJSON = JSON.parse(datosTXT);
    
            setLenguajes(datosJSON.lenguajes_cliente.lista);
    
        })

    });

    // Si hay errores se guardan en error, se escribe error, si está vacío no muestra nada porque no hay errores
    let error = ""
    if(input > 2025) {
        error = "Fecha inválida"
    }

    // guarda en un array temporal los lenguajes después de filtrarlos
    let lenguajes2 = [];
    lenguajes.forEach((element) => {

        if(element.lenguaje.year <= input) {
            lenguajes2.push(element)
        }

    })
    
    return (
        <>
            <div className="error">{error}</div>

            {lenguajes2.map((element) => (
                <div className="lenguaje">
                    <h3>Nombre: {element.lenguaje.nombre}, año: {element.lenguaje.year}, creador: {element.lenguaje.creador}</h3>
                    <p>Uso: {element.lenguaje.uso}</p>
                </div>
                
            ))}
            
        </>
    );
}

export default Listado;
