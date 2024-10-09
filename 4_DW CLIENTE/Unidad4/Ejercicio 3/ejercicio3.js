class cliente {

    constructor(nombre, localidad, cuota) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }

}

let clientes = [new cliente("Laura", "Santander", 50), new cliente("Álvaro", "Castro", 50),
    new cliente("Igor", "Castro", 60), new cliente("Iván", "Santander", 40),
    new cliente("Mónica", "Zamora", 30), new cliente("Javi", "Bilbao", 30),
    new cliente("David", "Bilbao", 50)];

function mostrar() {
    let input = document.getElementById("input").value;
    let resultado;
    if(input == "1"){
        
        resultado = `<table border="1"><tr><td>Nombre</td><td>Localidad</td><td>Cuota</td></tr>`;

        clientes.forEach(elemento => {

            resultado += `<tr><td>${elemento.nombre}</td><td>${elemento.localidad}</td><td>${elemento.cuota}</td></tr>`;


        });

        resultado += `</table>`;

        document.getElementById("resultado").innerHTML = resultado;

    }else if(input == "2"){
        
        

    }else if(input == "3"){
        
        

    }
}