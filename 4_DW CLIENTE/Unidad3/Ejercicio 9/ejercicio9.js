function calcular(){
    input = document.getElementById("input").value;
    if(input.startsWith("X")){
        input = "0" + input.slice(1);
    }else if(input.startsWith("Y")){
        input = "1" + input.slice(1);
    }else if(input.startsWith("Z")){
        input = "2" + input.slice(1);
    }
    
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    
    document.getElementById("resultado").innerHTML = `La letra de tu identificador es: ${letras.charAt(input%23)}`

}