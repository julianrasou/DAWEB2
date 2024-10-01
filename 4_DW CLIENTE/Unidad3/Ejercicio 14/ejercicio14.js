function ordenador(){
    let cadena = document.getElementById("cadena").value;

    if(cadena.substring(0,3)=="DOC" && cadena.substring(3,6)>=0 && cadena.substring(3,6)<=252 && (cadena.charAt(cadena.length-1)=="A" || cadena.charAt(cadena.length-1)=="B" ||cadena.charAt(cadena.length-1)=="C")){
        
        switch(true){
            case (cadena.charAt(cadena.length-1)=="A") :
                document.getElementById("resultado").innerHTML= `10.42.68.${cadena.substring(3,6)} <br/>`;
                break;
            case (cadena.charAt(cadena.length-1)=="B") :
                document.getElementById("resultado").innerHTML= `10.42.69.${cadena.substring(3,6)} <br/>`;
                break;
            case (cadena.charAt(cadena.length-1)=="C") :
                document.getElementById("resultado").innerHTML= `10.52.178.${cadena.substring(3,6)} <br/>`;
                break;
        }

    }else if(cadena.substring(0,4)=="025P" && cadena.substring(4,7)>=0 && cadena.substring(4,7)<=252 && (cadena.charAt(cadena.length-1)=="A" || cadena.charAt(cadena.length-1)=="B" ||cadena.charAt(cadena.length-1)=="C")){
        
        switch(true){
            case (cadena.charAt(cadena.length-1)=="A") :
                document.getElementById("resultado").innerHTML= `10.42.68.${cadena.substring(4,7)} <br/>`;
                break;
            case (cadena.charAt(cadena.length-1)=="B") :
                document.getElementById("resultado").innerHTML= `10.42.69.${cadena.substring(4,7)} <br/>`;
                break;
            case (cadena.charAt(cadena.length-1)=="C") :
                document.getElementById("resultado").innerHTML= `10.52.178.${cadena.substring(4,7)} <br/>`;
                break;
        }

    }else alert("Introduce un nombre válido");
}
