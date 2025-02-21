import { useState } from "react";
import Listado from "./Listado";

function Opciones() {
    const [input, setInput] = useState("");

    function cambiarInput(e) {
        setInput(e.target.value)
    }

    return (
        <>
            <h2>Mostrar lenguajes por año:</h2>
            <input type="number"
                placeholder="Rango máximo:"
                onChange={cambiarInput}
            />

            <Listado input={input}/>
        </>
    );
}

export default Opciones;
