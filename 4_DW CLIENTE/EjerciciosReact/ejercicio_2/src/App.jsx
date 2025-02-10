import TablaDiscos from "./Components/TablaDiscos"
import fetchDiscos from "./Classes/fetchDiscos";
import { useEffect, useState } from "react";

function App() {

    const[discos, setDiscos] = useState([]);

    useEffect(() => {
        
        fetchDiscos().then(data => {

            setDiscos(data);

        }).catch(() => {

            setDiscos([]);

        });

    }, []); 

    console.log(discos);
    return (
        <>

            <TablaDiscos discos={discos}/>
            
        </>
    );
}

export default App;
