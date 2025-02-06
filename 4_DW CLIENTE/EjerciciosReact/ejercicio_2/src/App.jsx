import TablaDiscos from "./Components/TablaDiscos"
import Disco from "./Classes/Disco";

function App() {

    let disco = new Disco("pepe", "pepe", "pepe", "pepe", "pepe", true, "pepe");
    let disco2 = new Disco("pepa", "pepe", "pepe", "pepe", "pepe", true, "pepe");
    let disco3 = new Disco("pepo", "pepe", "pepe", "pepe", "pepe", true, "pepe");

    let discos = [disco, disco2, disco3];

    return (
        <>

            <TablaDiscos discos={discos}/>
            
        </>
    );
}

export default App;
