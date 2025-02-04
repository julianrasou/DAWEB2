import { useState, useEffect } from "react";
import Todos from "./Components/Todos";
import LocalidadInit from "./Components/LocalidadInit";
import CuotaInit from "./Components/CuotaInit";
function App() {

    const [seccionActiva, cambiarSeccion] = useState("");

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch("src/json/clientes.json")
        .then(respuesta => respuesta.json())
        .then(datos => {
            setClientes(datos);
        })
    }, []);



    return (
        <>
            <div className="botones">
                <button onClick={() => cambiarSeccion("mostrarTodos")}>Mostrar Todos</button>
                <button onClick={() => cambiarSeccion("mostrarLocalidad")}>Mostrar Localidad</button>
                <button onClick={() => cambiarSeccion("mostrarCuota")} className="ultimo">Mostrar Cuota</button>
            </div>
            

            {seccionActiva === "mostrarTodos" && <Todos clientes={clientes}/>}
            {seccionActiva === "mostrarLocalidad" && <LocalidadInit clientes={clientes}/>}
            {seccionActiva === "mostrarCuota" && <CuotaInit clientes={clientes}/>}
        </>
    )
}

export default App
