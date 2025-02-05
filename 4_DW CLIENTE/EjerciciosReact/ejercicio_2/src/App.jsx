import Cabecera from "./Components/Cabecera"
import DiscoElement from "./Components/Disco"
import Disco from "./Classes/Disco";

function App() {

    let disco = new Disco("pepe", "pepe", "pepe", "pepe", "pepe", true, "pepe");

    return (
        <>
        <table>
            <thead>
                <Cabecera />
            </thead>
            <tbody>
                <DiscoElement disco={disco.mostrarInfo}/>
            </tbody>
            
        </table>
        </>
    );
}

export default App;
