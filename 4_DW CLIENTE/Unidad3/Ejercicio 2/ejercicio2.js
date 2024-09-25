function domingo(){
    
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    document.getElementById("resultado").innerHTML = "";

    for(let i = new Date().getFullYear(); i <= 2100; i++){

        let fecha = new Date(`${i}-${mes}-${dia}`)
        if(fecha.getDay() == 0){
            document.getElementById("resultado").innerHTML += `En el año ${i} tu cumpleaños cae en domindo.. <br/>`;
        }
    }


}