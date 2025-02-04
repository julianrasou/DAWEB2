import { useState } from "react";
import Localidad from "./Localidad";

function LocalidadInit (props) {
    
    const [localidad, setLocalidad] = useState("");

    const manejarLocalidad = (e) => {
        setLocalidad(e.target.value);
    };

    return (
        <>
            <input
                type="text" 
                value={localidad} 
                onChange={manejarLocalidad} 
                placeholder="Ingresa una localidad"
                className="input"
            />

            <Localidad clientes={props.clientes} localidad={localidad}/>
        </>
    )
}

export default LocalidadInit