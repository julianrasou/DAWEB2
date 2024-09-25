function ejecutaBits(){
    document.getElementById("resultado").innerHTML= ``;

    document.getElementById("resultado").innerHTML+= "125 / 8 = "+(125>>3)+"</br>";
    document.getElementById("resultado").innerHTML+= "40 * 4 = "+(40<<2)+"<br/>";
    document.getElementById("resultado").innerHTML+= "25 / 2 = "+(25>>1)+"<br/>";
    document.getElementById("resultado").innerHTML+= "10 * 16 = "+(10<<4)+"<br/>";
}