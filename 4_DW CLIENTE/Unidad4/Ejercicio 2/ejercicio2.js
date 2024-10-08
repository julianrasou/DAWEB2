function dni(){
    let input = document.getElementById("input").value;
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    document.getElementById("resultado").innerHTML = ("Números: ");
    let lista = [];
    for(let i = 1; i <= 999; i++){

        if( letras.charAt(i % 23) === input ){

            lista.push(i);

        }

    }
    document.getElementById("resultado").innerHTML += lista;
}