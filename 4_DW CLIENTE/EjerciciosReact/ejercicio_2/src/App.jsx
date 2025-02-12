import TablaDiscos from "./Components/TablaDiscos"
import fetchDiscos from "./Classes/fetchDiscos";
import lib from "./lib/libreria";
import { useEffect, useState } from "react";

function App() {

    const [seccionActiva, setSeccion] = useState("normal");
    const [rangoMin, setRangoMin] = useState("");
    const [rangoMax, setRangoMax] = useState("");

    const[discos, setDiscos] = useState([]);

    const CambiarRangoMin = (e) => {
        setRangoMin(e.target.value);
    };
    const CambiarRangoMax = (e) => {
        setRangoMin(e.target.value);
    };

    useEffect(() => {
        
        fetchDiscos().then(data => {

            setDiscos(data);

        }).catch(() => {

            setDiscos([]);

        });

    }, []); 

    return (
        <>
            <p className="apartado">
                Número de discos:
                <span className="resultado">
                    {lib.contar(discos)}
                </span>
            </p>
            <p className="apartado">
                Ordenar:
                <div className="botones">
                    <button onClick={() => setSeccion("normal")}>Normal</button>
                    <button onClick={() => setSeccion("reves")}>Del revés</button>
                    <button onClick={() => setSeccion("alfa")}>Alfabéticamente</button>
                </div>
                Rango de años:
                <input type="number" onChange={CambiarRangoMin} placeholder="min"/>
                <input type="number" onChange={CambiarRangoMax} placeholder="max"/>
            </p>

            {seccionActiva === "normal" && <TablaDiscos discos={lib.mostrar(discos, 1)}/>}
            {seccionActiva === "reves" && <TablaDiscos discos={lib.mostrar(discos, 2)}/>}
            {seccionActiva === "alfa" && <TablaDiscos discos={lib.mostrar(discos, 3)}/>}
            
            
        </>
    );
}

export default App;
