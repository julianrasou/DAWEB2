let numeros = [1, 2, 4, 5, 7, 18];

function mostrar(){

    document.getElementById("lista").innerHTML = "";

    numeros.forEach(element => {
        
        document.getElementById("lista").innerHTML += element + " "; 

    });

}

document.getElementById("frase").addEventListener("mouseover", function() {

    numeros.reverse();
    mostrar();

})

document.getElementById("frase").addEventListener("mouseout", function() {

    numeros.reverse();
    mostrar();

})

mostrar();