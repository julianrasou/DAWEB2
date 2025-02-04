import Cabecera from "./Cabecera"
import Cliente from "./Cliente"

function Localidad (props) {
    
    let clientes = props.clientes;

    let localidad = props.localidad;

    let clientes2 = [];
    clientes.forEach(cliente => {
        if (cliente.localidad.toLowerCase().includes(localidad.trim().toLowerCase())) {
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