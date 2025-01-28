let pilotos = [];
let currentPage = 1;
let pilotsPerPage = 3;
let selectedPilot = null;

document.addEventListener("DOMContentLoaded", () => {
    fetch('pilotos.json')
        .then(response => response.json())
        .then(data => {
            pilotos = data.pilotos;
            renderPilots();
        });

    document.getElementById('sort').addEventListener('change', renderPilots);
    document.getElementById('filter').addEventListener('change', renderPilots);
    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 1) currentPage--;
        renderPilots();
    });
    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < Math.ceil(pilotos.length / pilotsPerPage)) currentPage++;
        renderPilots();
    });
    document.getElementById('all').addEventListener('click', () => {
        currentPage = 1;
        pilotsPerPage = pilotos.length;
        renderPilots();
    });
});

function renderPilots() {
    let sortedPilots = [...pilotos];

    // Ordenar por nombre o equipo
    const sortOption = document.getElementById('sort').value;
    if (sortOption.includes('nombre')) {
        sortedPilots.sort((a, b) => a.nombre.localeCompare(b.nombre));
        if (sortOption === 'nombre-desc') sortedPilots.reverse();
    } else if (sortOption.includes('equipo')) {
        sortedPilots.sort((a, b) => a.equipo.localeCompare(b.equipo));
        if (sortOption === 'equipo-desc') sortedPilots.reverse();
    }

    // Filtrar por nacionalidad
    const filterOption = document.getElementById('filter').value;
    if (filterOption !== 'todos') {
        sortedPilots = sortedPilots.filter(pilot => pilot.nacionalidad === filterOption);
    }

    // Paginación
    const startIndex = (currentPage - 1) * pilotsPerPage;
    const paginatedPilots = sortedPilots.slice(startIndex, startIndex + pilotsPerPage);

    // Renderizar lista
    const pilotsList = document.getElementById('pilots-list');
    pilotsList.innerHTML = '';
    paginatedPilots.forEach(pilot => {
        const pilotDiv = document.createElement('div');
        pilotDiv.classList.add('pilot');
        pilotDiv.innerHTML = `
            <strong>${pilot.nombre}</strong><br>
            Equipo: ${pilot.equipo}<br>
            Número: ${pilot.numero}<br>
            Nacionalidad: ${pilot.nacionalidad}
        `;
        pilotDiv.addEventListener('click', () => highlightPilot(pilot));

        if (selectedPilot && selectedPilot.numero === pilot.numero) {
            pilotDiv.classList.add('highlight');
        }

        pilotsList.appendChild(pilotDiv);
    });
}

function highlightPilot(pilot) {
    if (selectedPilot && selectedPilot.numero === pilot.numero) {
        selectedPilot = null;
    } else {
        selectedPilot = pilot;
    }
    renderPilots();
}