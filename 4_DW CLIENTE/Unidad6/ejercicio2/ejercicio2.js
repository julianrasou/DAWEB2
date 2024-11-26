///////////////////////////////////////////////////////////////////////////
//        PARA CAMBIAR DE APARTADO DESCOMENTAR EL CORRESPONDIENTE        //
///////////////////////////////////////////////////////////////////////////

// mediante querySelector
let listaInput = document.querySelectorAll("input[type=\"text\"]");
listaInput[listaInput.length - 1].focus();



// mediante getElementByTagName
/* let listaInput = document.getElementsByTagName("input");
listaInput[listaInput.length - 1].focus(); */