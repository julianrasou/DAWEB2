let boo=true;

for(let hora = 9; hora<22;){
    if(hora==true){
        document.write(hora+":00 <br/>");
        boo=false;
    }
    else {
        document.write(hora+":30 <br/>");
        boo=true;
        hora++;
    }
    
}