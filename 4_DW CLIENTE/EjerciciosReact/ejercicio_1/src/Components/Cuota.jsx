import Cabecera from "./Cabecera"
import Cliente from "./Cliente"

function Cuota (props) {
    
    let clientes = props.clientes;

    let cuota = props.cuota;

    let clientes2 = [];
    clientes.forEach(cliente => {
        if (cliente.cuota > cuota) {
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

export default Cuota