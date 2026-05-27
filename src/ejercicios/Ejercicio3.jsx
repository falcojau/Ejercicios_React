// Objetivo del ejercicio: Trabajar con la creación, eliminación y manipulación de elementos del DOM.
// Ejercicio:
// Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
// ● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un
// nuevo elemento de la lista.
// ● Añade un botón al lado de cada elemento para eliminarlo de la lista.
import { useState } from 'react';

export default function Ejercicio3() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const agregarItem = () => {
    setList([...list, inputValue]);
    setInputValue("");
  }

  const eliminarItem = (indiceAEliminar) => {
    const listaFiltrada = list.filter((item, index) => index !== indiceAEliminar)
    setList(listaFiltrada);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Escribe algo...'
      />
      <button onClick={agregarItem}>Agregar Item a la Lista</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => eliminarItem(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}