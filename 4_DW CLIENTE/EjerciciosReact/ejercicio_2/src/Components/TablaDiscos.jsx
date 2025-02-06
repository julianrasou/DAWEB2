import Cabecera from "./Cabecera";
import Disco from "./Disco";

function TablaDiscos( {discos} ) {

    return (

        <table>
            <thead>
                <Cabecera />
            </thead>
            <tbody>
                {
                    discos.map(disco => (
                        <Disco disco={disco}/>
                    ))
                }
            </tbody>
            
        </table>

    )

}


export default TablaDiscos