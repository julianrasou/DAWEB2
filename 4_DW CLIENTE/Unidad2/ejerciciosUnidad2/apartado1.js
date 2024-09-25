function ejecutaMult(){
    document.getElementById("resultado1").innerHTML= ``;
    for(let i=0;i<=10;i++){
        let k=7*i;
        document.getElementById("resultado1").innerHTML+= `7 * ${i} = ${k} <br/>`;
    }
}
function ejecutaSum(){
    document.getElementById("resultado2").innerHTML= ``;
    let i = 1;
    while(i<=10){
        let k=8+i;
        document.getElementById("resultado2").innerHTML+= `8 + ${i} = ${k} <br/>`;
        i++;
    }
}
function ejecutaDiv(){
    document.getElementById("resultado3").innerHTML= ``;
    let i = 1;
    do{
        let k=9/i;
        document.getElementById("resultado3").innerHTML+= `9 / ${i} = ${k} <br/>`;
        i++;
    }while(i<=10)
}