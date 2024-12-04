document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#analizar").addEventListener("click", analizar);
    document.querySelector("#archivo").addEventListener("change", (e) => {

        let archivo = e.target.files[0];
        if (archivo) {
            let lector = new FileReader();
            
            lector.onload = (e) => {
                document.querySelector("#iframe").setAttribute("srcdoc", e.target.result);
            };

            lector.readAsText(archivo);
        }

    });

});

function analizar() {
    // TODO: contar parrafos y eso y mostrar resultado en div id = resultado
    let iframe = document.querySelector("#iframe");
    let archivo = iframe.contentDocument;
    let resultado = document.querySelector("#resultado");

    resultado.textContent = "";

    ////////////////////////////////////////////////
    // numero de parrafos                         //
    ////////////////////////////////////////////////
    let parrafos = archivo.querySelectorAll("p");
    let numParrafos = parrafos.length;

    let pNum = document.createElement("p");
    pNum.appendChild(document.createTextNode("Número de párrafos: " + numParrafos));

    resultado.appendChild(pNum)
    
    ////////////////////////////////////////////////
    // texto segundo parrafo                      //
    ////////////////////////////////////////////////
    let segundoParrafo;
    if(numParrafos<2) {
        segundoParrafo = "No hay segundo párrafo."
    }else {
        segundoParrafo = parrafos[1].textContent;
    }

    let pSeg = document.createElement("p");
    pSeg.appendChild(document.createTextNode("Texto del segundo párrafo: "));
    let divSeg = document.createElement("div");
    divSeg.setAttribute("class", "div");
    divSeg.appendChild(document.createTextNode(segundoParrafo));
    pSeg.appendChild(divSeg);

    resultado.appendChild(pSeg)

    ////////////////////////////////////////////////
    // numero de enlaces                          //
    ////////////////////////////////////////////////
    let enlaces = archivo.querySelectorAll("a");
    let numEnlaces = enlaces.length;

    let pEnl = document.createElement("p");
    pEnl.appendChild(document.createTextNode("Número de enlaces: " + numEnlaces));

    resultado.appendChild(pEnl)

    ////////////////////////////////////////////////
    // dirección del primer enlace                //
    ////////////////////////////////////////////////
    let primerEnlace;
    if(numEnlaces==0) {
        primerEnlace = "No hay ningún enlace";
    }else {
        primerEnlace = enlaces[0].getAttribute("src");
    }

    let pEn2 = document.createElement("p");
    pEn2.appendChild(document.createTextNode("Dirección del primer enlace: "));
    let divEn = document.createElement("div");
    divEn.setAttribute("class", "div");
    divEn.appendChild(document.createTextNode(primerEnlace));
    pEn2.appendChild(divEn);

    resultado.appendChild(pEn2)

    ////////////////////////////////////////////////
    // dirección del penúltimo enlace             //
    ////////////////////////////////////////////////
    let penulEnlace;
    if(numEnlaces<2) {
        penulEnlace = "No hay suficientes enlaces";
    }else {
        penulEnlace = enlaces[-1].getAttribute("src");
    }

    let pEn3 = document.createElement("p");
    pEn3.appendChild(document.createTextNode("Dirección del penúltimo enlace: "));
    let divEn2 = document.createElement("div");
    divEn2.setAttribute("class", "div");
    divEn2.appendChild(document.createTextNode(penulEnlace));
    pEn3.appendChild(divEn2);

    resultado.appendChild(pEn3)

    ////////////////////////////////////////////////
    // num enlaces que apunten a /wiki/Municipio  //
    ////////////////////////////////////////////////
    let numEnlacesMunicipio = document.querySelectorAll('a[src="/wiki/Municipio"]').length;

    let pEnlacesMunicipio = document.createElement("p");
    pEnlacesMunicipio.appendChild(document.createTextNode("Número de enlaces que apuntan a /wiki/Municipio: " + numEnlacesMunicipio));

    resultado.appendChild(pEnlacesMunicipio);

    ////////////////////////////////////////////////
    // num enlaces del primer párrafo             //
    ////////////////////////////////////////////////
    let numEnlacesParrafo = document.querySelectorAll("p:first-of-type a").length;

    let pEnlacesParrafo = document.createElement("p");
    pEnlacesParrafo.appendChild(document.createTextNode("Número de enlaces del primer párrafo: " + numEnlacesParrafo));

    resultado.appendChild(pEnlacesParrafo);
    
    ////////////////////////////////////////////////
    // en consola, contenido de todos los p       //
    ////////////////////////////////////////////////
    parrafos.forEach(parrafo => {
        console.log(parrafo.textContent);
    });

}