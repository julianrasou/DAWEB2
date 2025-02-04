import { useState } from "react";
import Cuota from "./Cuota";

function CuotaInit (props) {
    
    const [cuota, setCuota] = useState("");

    const manejarCuota = (e) => {
        setCuota(e.target.value);
    };

    return (
        <>
            <input
                type="number" 
                value={cuota} 
                onChange={manejarCuota} 
                placeholder="Ingresa una cuota"
                className="input"
            />

            <Cuota clientes={props.clientes} cuota={cuota}/>
        </>
    )
}

export default CuotaInit