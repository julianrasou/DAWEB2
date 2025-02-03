function Cliente (props) {

    return (
        <div className="cliente">
            <span>{props.nombre}</span>
            <span>{props.localidad}</span>
            <span>{props.cuota}</span>
        </div>
    )
}

export default Cliente