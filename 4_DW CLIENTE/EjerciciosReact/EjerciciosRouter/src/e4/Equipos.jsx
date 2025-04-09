import { useState } from "react";
import equiposData from "./equipos.json"; // Importamos el JSON directamente

const Equipos = () => { // permitirá seleccionar un equipo y ver su información.
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null); // Se declara un estado equipoSeleccionado con un valor inicial null
    // Este estado guardará la información del equipo seleccionado.

  // Función para manejar el cambio en la selección del equipo
  const handleChange = (event) => {
    const equipo = equiposData.find(e => e.Nombre === event.target.value); // event.target.value obtiene el nombre del equipo seleccionado en el <select>
      // equiposData.find(e => e.Nombre === event.target.value) busca en el JSON el equipo que coincida con el nombre seleccionado
    setEquipoSeleccionado(equipo); // actualiza el estado con los datos del equipo encontrado.
  };

  return (
    <div>
      <h2>Selecciona un equipo</h2>

      <select onChange={handleChange}>
        <option value="">-- Selecciona un equipo --</option>
        {equiposData.map((equipo, index) => ( // recorrer los equipos y generar opciones dinámicamente en el <select>
          <option key={index} value={equipo.Nombre}> {/* key={index} es la clave única de React para optimizar la renderización */} 
              {/* value={equipo.Nombre} establece el valor de cada opción como el nombre del equipo */}
            {equipo.Nombre}
          </option>
        ))}
      </select>

      {equipoSeleccionado && ( // Se usa renderizado condicional ({equipoSeleccionado && (...)}) para mostrar la información del equipo solo si hay un equipo seleccionado
        <div>
          <h3>{equipoSeleccionado.Nombre}</h3>
          <p><strong>Partidos Jugados:</strong> {equipoSeleccionado.PartidosJugados}</p>
          <p><strong>Partidos Ganados:</strong> {equipoSeleccionado.PartidosGanados}</p>
          <p><strong>Partidos Perdidos:</strong> {equipoSeleccionado.PartidosPerdidos}</p>
          <p><strong>Partidos Empatados:</strong> {equipoSeleccionado.PartidosEmpatados}</p>
        </div>
      )}
    </div>
  );
};

export default Equipos;