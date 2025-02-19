import Disco from "./Disco";

export default async function fetchDiscos() {
    
    let respuesta = await fetch("/Resources/discos.xml");
    let datos = await respuesta.text();
    console.log("📥 XML recibido:", datos);
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(datos, "text/xml");

    let xmlDiscos = xmlDoc.getElementsByTagName("disco");
    let discosTemp = [];

    for (let i = 0; i < xmlDiscos.length; i++) {
        let prestadoTexto = xmlDiscos[i].getElementsByTagName("prestado")[0]?.textContent.trim().toLowerCase();
        let prestado = prestadoTexto === "true"; // Convierte a booleano correctamente

        let disco = new Disco(
            xmlDiscos[i].getElementsByTagName("nombre")[0].textContent,
            xmlDiscos[i].getElementsByTagName("grupo")[0].textContent,
            xmlDiscos[i].getElementsByTagName("publicacion")[0].textContent,
            xmlDiscos[i].getElementsByTagName("genero")[0].textContent,
            xmlDiscos[i].getElementsByTagName("localizacion")[0].textContent,
            prestado,
            xmlDiscos[i].getElementsByTagName("caratula")[0].textContent
        );
        discosTemp.push(disco);
    }

    return discosTemp; 
    
}

