import { useState, useEffect } from "react";
import tareasJSON from "./tareasJSON.json"; // Importamos el archivo JSON

const Tarea = () => {
  const [tareas, setTareas] = useState([]); // Almacena la lista de tareas (inicialmente vacía)
  const [nuevaTarea, setNuevaTarea] = useState(""); // Guarda el texto de la nueva tarea que el usuario escribe en el input.

  // Inicializamos el estado de tareas desde el JSON
  useEffect(() => { // useEffect con un array vacío ([]): Se ejecuta solo una vez, al montar el componente
    setTareas(tareasJSON); // Se inicializa el estado tareas con los datos del JSON
  }, []);

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") { // Verifica que nuevaTarea no esté vacía (trim() elimina espacios en blanco)
      setTareas([
        ...tareas,
        { texto: nuevaTarea, realizado: false } // Añade una nueva tarea a la lista
      ]);
      setNuevaTarea(""); // Limpia el input
    }
  };

  // Cambiar el estado de "realizada" al hacer click en el checkbox
  const toggleTarea = (index) => {
    const nuevasTareas = [...tareas]; // Crea una copia de la lista de tareas
    nuevasTareas[index].realizado = !nuevasTareas[index].realizado; // Invierte el estado de realizado de la tarea seleccionada (true ↔ false)
    setTareas(nuevasTareas); // Actualiza el estado tareas con la nueva lista modificada
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea} // El input es controlado por el estado nuevaTarea
        onChange={(e) => setNuevaTarea(e.target.value)} // se actualiza el estado en tiempo real
        placeholder="Escribe una nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar tarea</button>

      <ul>
        {tareas.map((tarea, index) => ( // tareas.map() recorre la lista y genera <li> para cada tarea
          <li key={index}> {/* Cada elemento tiene una key={index}, lo que ayuda a React a optimizar la renderización */}
            {/* Checkbox controlado */}
            <input
              type="checkbox"
              checked={tarea.realizado} // Controla si el checkbox está marcado (true o false)
              onChange={() => toggleTarea(index)} // Cambiar el estado de la tarea
            />
            {/* Aplicar estilos dinámicamente */}
            <span
              className={tarea.realizado ? "tareaRealizada" : "tareaTexto"} // Si la tarea está realizada (true), se le asigna la clase "tareaRealizada" (probablemente un texto tachado en CSS).
                // Si no está realizada (false), se asigna la clase "tareaTexto" (probablemente un texto normal)
            >
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarea;