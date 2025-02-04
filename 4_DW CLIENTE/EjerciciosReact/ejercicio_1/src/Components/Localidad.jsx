import Cabecera from "./Cabecera"
import Cliente from "./Cliente"

function Localidad (props) {

    
    let clientes = props.clientes;

    let localidad = prompt("Localidades disponibles: Santander, Castro, Zamora, Bilbao");

    let clientes2 = [];
    clientes.forEach(cliente => {
        if (cliente.localidad === localidad) {
            clientes2.push(cliente);
        }
    });

    return (
        <>
            <Cabecera />
            {
                clientes2.map(cliente => (
                    <Cliente key={cliente.id} nombre={cliente.nombre} localidad={cliente.localidad} cuota={cliente.cuota}/>
                ))
            }
        </>
    )
}

export default Localidad