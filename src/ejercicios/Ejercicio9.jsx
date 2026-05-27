// Objetivo del ejercicio: Practicar persistencia de datos con localStorage.
// Ejercicio:
// Crea una aplicación de lista de tareas.
// • Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
// • Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
// • Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.
import { useState, useEffect } from 'react';

export default function Ejercicio9() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(tareasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const tareaCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const limpiarCompletadas = () => {
    const tareasSinCompletadas = tareas.filter(tarea => !tarea.completada);
    setTareas(tareasSinCompletadas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => tareaCompletada(index)}
            />
            <span>
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={limpiarCompletadas}>Limpiar Completadas</button>
    </div>
  );
};
