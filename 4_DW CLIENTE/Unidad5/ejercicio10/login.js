document.addEventListener("DOMContentLoaded", function() {

    function validarDocumento() {
        const tipoDocumento = document.querySelector('input[name="tipoDocumento"]:checked');
        const numeroDocumento = document.getElementById('numDocumento').value;
        const errorDocumento = document.getElementById('errorDocumento');  
        let valido = false;

        if (tipoDocumento && tipoDocumento.value === "dni") {
            const dniRegex = /^[0-9]{8}[A-Za-z]$/; 
            const tarjetaResidenciaRegex = /^[XYZ][0-9]{7}[A-Za-z]$/;
            valido = dniRegex.test(numeroDocumento) || tarjetaResidenciaRegex.test(numeroDocumento);
        }

        if (tipoDocumento && tipoDocumento.value === "pasaporte") {
            const pasaporteRegex = /^[A-Za-z]{3}[0-9]{6}[A-Za-z]?$/i;
            valido = pasaporteRegex.test(numeroDocumento);
        }

        if (errorDocumento) {
            if (valido) {
                errorDocumento.style.display = 'none';
            } else {
                errorDocumento.style.display = 'block';
            }
        }

        return valido;
    }

    function validarFecha() {
        const nacimiento = parseInt(document.getElementById('nacimiento').value);

        const fechaError = document.getElementById('errorFecha'); 

        if (isNaN(nacimiento)) {
            fechaError.style.display = 'block';
            return false;
        }

        fechaError.style.display = 'none';
        return true;
    }

    document.getElementById("boton").addEventListener("click", function(e) {
        const tipoDocumento = document.querySelector('input[name="tipoDocumento"]:checked');
        const numDocumento = document.getElementById('numDocumento').value;
        const fecha = document.getElementById('nacimiento').value;

        if (!numDocumento || !fecha || !tipoDocumento) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!validarDocumento()) {
            alert("El número de documento no es válido.");
            return;
        }

        if (!validarFecha()) {
            alert("La fecha de nacimiento no es válida.");
            return;
        }

        alert("Datos guardados correctamente. Bienvenido al Área de Clientes.");
        e.preventDefault();
        window.location.href = "./clave.html";
    });
});
