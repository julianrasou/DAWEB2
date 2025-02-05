function Disco (props) {

    let disco = props.disco;
    let prestado = disco.prestado == true ? "Sí" : "No";
    
    return (

        <tr>
            <td>{disco.nombre}</td>
            <td>{disco.grupo}</td>
            <td>{disco.publicacion}</td>
            <td>{disco.genero}</td>
            <td>{disco.localizacion}</td>
            <td>{prestado}</td>
            <td>{disco.caratula}</td>
        </tr>

    )
    
}

export default Disco