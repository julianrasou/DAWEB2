import Cabecera from "./Cabecera"
import Cliente from "./Cliente"

function Todos (props) {

    let clientes = props.clientes;
    return (
        <>
            <Cabecera />
            {
                clientes.map(cliente => (
                    <Cliente key={clientes.id} nombre={cliente.nombre} localidad={cliente.localidad} cuota={cliente.cuota}/>
                ))
            }
        </>
    )
}

export default Todos