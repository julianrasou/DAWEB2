function comprobar() {

    document.getElementById("nif").addEventListener("input", function () {

        let niff = this.value;
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    
        if(niff.length === 8) {
    
            document.getElementById("resultado").value = letras.charAt(niff%23);
    
        }else {
    
            document.getElementById("resultado").value = "";
    
        }
    
    
    })
    
}

document.addEventListener("DOMContentLoaded", comprobar);