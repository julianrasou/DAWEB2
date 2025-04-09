import React, { useState, useEffect } from 'react';
import pilotosData from './pilotos.json';
import './PilotosList.css';

const PilotosList = () => {
  const [pilotos, setPilotos] = useState([]); // Contiene la lista de pilotos (se inicializa como un array vacío)
  const [nacionalidad, setNacionalidad] = useState(''); // Guarda el filtro de búsqueda por nacionalidad
  const [orden, setOrden] = useState('nombreAsc'); // Almacena el criterio de ordenación (por defecto, ordena los nombres de A-Z)
  const [paginaActual, setPaginaActual] = useState(1); // Controla la página actual para la paginación
  const [pilotosPorPagina, setPilotosPorPagina] = useState(3); // Determina cuántos pilotos se muestran por página (3 por defecto)
  const [pilotoDestacado, setPilotoDestacado] = useState(null); // Guarda el ID del piloto seleccionado para resaltar

  useEffect(() => { // Este useEffect se ejecuta solo una vez, cuando el componente se monta
    setPilotos(pilotosData); // Carga los datos del JSON en el estado pilotos
  }, []);

  const filtrarPilotos = pilotos.filter((piloto) =>
    piloto.nacionalidad.toLowerCase().includes(nacionalidad.toLowerCase()) // Convierte los valores a minúsculas para evitar problemas con mayúsculas y minúsculas
      // Usa .includes() para comprobar si la nacionalidad escrita por el usuario coincide con la de algún piloto
  );

  const ordenarPilotos = (lista) => {
    return [...lista].sort((a, b) => { // Crea una copia del array con [...] para no modificar el estado directamente
      if (orden === 'nombreAsc') return a.nombre.localeCompare(b.nombre); // Ordena los nombres de A-Z.
      if (orden === 'nombreDesc') return b.nombre.localeCompare(a.nombre); // Ordena los nombres de Z-A
      if (orden === 'equipoAsc') return a.equipo.localeCompare(b.equipo); // Ordena por equipo de A-Z
      return b.equipo.localeCompare(a.equipo); // Ordena por equipo de Z-A
    });
  };

  const pilotosOrdenados = ordenarPilotos(filtrarPilotos); // Filtra y ordena la lista de pilotos con filtrarPilotos y ordenarPilotos
  // Calcula los índices de la paginación
  const indexOfLastPiloto = paginaActual * pilotosPorPagina; // indexOfLastPiloto: Último piloto en la página actual
  const indexOfFirstPiloto = indexOfLastPiloto - pilotosPorPagina; // indexOfFirstPiloto: Primer piloto en la página actual
  const pilotosPaginaActual = pilotosPorPagina === 'all' ? pilotosOrdenados : pilotosOrdenados.slice(indexOfFirstPiloto, indexOfLastPiloto);
    // Si pilotosPorPagina es "all", muestra todos los pilotos. Si no, muestra solo los pilotos correspondientes a la página actual

  const handlePilotoClick = (id) => {
    // Si el piloto está ya seleccionado, lo deseleccionamos, si no, lo seleccionamos.
    if (pilotoDestacado === id) {
      setPilotoDestacado(null);
    } else {
      setPilotoDestacado(id);
    }
  };

  return (
    <div className="contenedor">
      <h1>Lista de Pilotos de Fórmula 1</h1>
      <div className="controles">
        <input
          type="text"
          placeholder="Filtrar por nacionalidad"
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
        />
        <select onChange={(e) => setOrden(e.target.value)} value={orden}>
          <option value="nombreAsc">Nombre (A-Z)</option>
          <option value="nombreDesc">Nombre (Z-A)</option>
          <option value="equipoAsc">Equipo (A-Z)</option>
          <option value="equipoDesc">Equipo (Z-A)</option>
        </select>
        <select onChange={(e) => setPilotosPorPagina(e.target.value === 'all' ? 'all' : 3)}>
          <option value={3}>Paginación</option>
          <option value="all">Ver Todos</option>
        </select>
      </div>
      <ul>
        {pilotosPaginaActual.map((piloto) => (
          <li key={piloto.id}
              className={pilotoDestacado === piloto.id ? "pilot destacado" : "pilot"}
              onClick={() => handlePilotoClick(piloto.id)}>
            <strong>{piloto.nombre}</strong> - {piloto.equipo} - {piloto.nacionalidad}
          </li>
        ))}
      </ul>
      {pilotosPorPagina !== 'all' && (
        <div className="paginacion">
          <button onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))} disabled={paginaActual === 1}> {/* Evita que se pueda ir a una página anterior a la 1 (Math.max(prev - 1, 1)) */}
            Anterior
          </button>
          <span>Página {paginaActual}</span>
          <button
            onClick={() => setPaginaActual((prev) => prev + 1)}
            disabled={indexOfLastPiloto >= pilotosOrdenados.length} // Desactiva "Siguiente" si no hay más pilotos para mostrar
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default PilotosList;