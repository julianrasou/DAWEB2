const claveReal = "123456";
let claveParcial = Array(6).fill('*');

function cargarClaveParcial() {
    const claveTable = document.getElementById('claveTable');
    const randomIndexes = [];

    while (randomIndexes.length < 3) {
        let randIndex = Math.floor(Math.random() * 6);
        if (!randomIndexes.includes(randIndex)) {
            randomIndexes.push(randIndex);
        }
    }

    Array.from(claveTable.rows[0].cells).forEach((cell, index) => {
        if (randomIndexes.includes(index)) {
            cell.innerText = "*"; // Mostrar como asterisco
            cell.classList.add('filled');
            cell.classList.remove('empty');
            claveParcial[index] = claveReal[index];
        } else {
            cell.innerText = ""; // Celdas que el usuario debe llenar se quedan vacías
            cell.classList.add('empty');
            cell.classList.remove('filled');
            claveParcial[index] = "*";
        }
    });
}

function asignarNumeroEnClave(e) {
    const clickedNumber = e.target.innerText;
    const claveTable = document.getElementById('claveTable');
    const emptyCells = Array.from(claveTable.rows[0].cells).filter(cell => cell.classList.contains('empty'));

    if (emptyCells.length > 0) {
        const firstEmptyCell = emptyCells[0];
        const position = parseInt(firstEmptyCell.getAttribute('data-position'));

        claveParcial[position] = clickedNumber;
        firstEmptyCell.innerText = "*"; // Mostrar el número ingresado como asterisco
        firstEmptyCell.classList.remove('empty');
        firstEmptyCell.classList.add('filled');
        
        // Verificar si ya están todas las celdas llenas y validar automáticamente
        if (claveParcial.every(val => val !== "*")) {
            validarClave();
        }
    }
}

function validarClave() {
    const claveUsuario = claveParcial.join("");
    const messageDiv = document.getElementById('message');

    if (claveUsuario === claveReal) {
        messageDiv.textContent = "¡Bienvenido! Has ingresado correctamente.";
        messageDiv.style.color = "green";
        limpiarClave();
        cargarClaveParcial();
    } else {
        messageDiv.textContent = "Clave incorrecta. Inténtalo de nuevo.";
        messageDiv.style.color = "red";
        limpiarClave();
        cargarClaveParcial();
    }
}

function limpiarClave() {
    const claveTable = document.getElementById('claveTable');
    Array.from(claveTable.rows[0].cells).forEach(cell => {
        cell.innerText = '*';
        cell.classList.remove('filled');
        cell.classList.add('empty');
    });
    claveParcial = Array(6).fill('*');
}

document.addEventListener("DOMContentLoaded", function () {
    cargarClaveParcial();

    const numberCells = document.querySelectorAll("#numbersTable td");
    numberCells.forEach(cell => {
        cell.addEventListener("click", asignarNumeroEnClave);
    });

    document.getElementById('claveContainer').style.display = 'block';
});
