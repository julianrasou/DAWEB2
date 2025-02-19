import TablaDiscos from "./Components/TablaDiscos"
import fetchDiscos from "./Classes/fetchDiscos";
import lib from "./lib/libreria";
import Disco from "./Classes/Disco";
import { useEffect, useState } from "react";

function Indice() {

    const [seccionActiva, setSeccion] = useState("normal");
    const [rangoMin, setRangoMin] = useState(0);
    const [rangoMax, setRangoMax] = useState(3000);

    const[discos, setDiscos] = useState([]);

    const CambiarRangoMin = (e) => {
        setRangoMin(parseInt(e.target.value));
    };
    const CambiarRangoMax = (e) => {
        setRangoMax(parseInt(e.target.value));
    };

    useEffect(() => {
        
        fetchDiscos().then(data => {

            setDiscos(data);

        }).catch(() => {

            setDiscos([]);

        });

    }, []); 

    function principio() {
        let nombre = prompt("Nombre del disco:");
        let grupo = prompt("Nombre del grupo:");
        let publicacion = prompt("Fecha de publicacion:");
        let genero = prompt("Género del disco:");
        let local = prompt("Localización en la estantería:");

        let disco = new Disco(nombre, grupo, publicacion, genero, local, false, "imagen.png");

        setDiscos([disco, ...discos])

    }
    function final() {
        let nombre = prompt("Nombre del disco:");
        let grupo = prompt("Nombre del grupo:");
        let publicacion = prompt("Fecha de publicacion:");
        let genero = prompt("Género del disco:");
        let local = prompt("Localización en la estantería:");

        let disco = new Disco(nombre, grupo, publicacion, genero, local, false, "imagen.png");

        setDiscos([...discos, disco])
    }

    function eliminarPrincipio () {
        eliminar(discos, 1)
    }
    function eliminarFinal () {
        eliminar(discos, 2)
    }
    function eliminar(lista, opcion) {

        let lista2 = lista;
        if (opcion == 1) {

            if (lista.length == 0) {
                return false;
            } else {
                lista2.shift()
                setDiscos([...lista2]);
            }
    
        } else if (opcion == 2) {
    
            if (lista.length == 0) {
                return false;
            } else {
                lista2.pop()
                setDiscos([...lista2]);
            }
    
        }

    }
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
                <input type="number" className="rango" onChange={CambiarRangoMin} placeholder="min"/>
                <input type="number" className="rango" onChange={CambiarRangoMax} placeholder="max"/>
            </p>
            <div className="botones">
                <button onClick={principio}>Añadir al principio</button>
                <button onClick={final}>Añadir al final</button>
            </div>
            <div className="botones">
                <button onClick={eliminarPrincipio}>Eliminar al principio</button>
                <button onClick={eliminarFinal}>Eliminar al final</button>
            </div>

            {seccionActiva === "normal" && <TablaDiscos discos={lib.mostrar(discos, 1, rangoMin, rangoMax)}/>}
            {seccionActiva === "reves" && <TablaDiscos discos={lib.mostrar(discos, 2, rangoMin, rangoMax)}/>}
            {seccionActiva === "alfa" && <TablaDiscos discos={lib.mostrar(discos, 3, rangoMin, rangoMax)}/>}
            
            
        </>
    );
}

export default Indice;
