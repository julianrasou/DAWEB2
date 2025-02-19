import Cabecera from "./Cabecera";
import Disco from "./Disco";

function TablaDiscos( {discos} ) {

    const listaDiscos = Array.isArray(discos) ? discos : [];

    return (

        <table>
            <thead>
                <Cabecera />
            </thead>
            <tbody>
                {
                    listaDiscos.map(disco => (
                        <Disco disco={disco}/>
                    ))
                }
            </tbody>
            
        </table>

    )

}


export default TablaDiscos