// Objetivo del ejercicio: Practicar la interacción entre eventos del DOM y lógica en JavaScript.
// Ejercicio:
// Crea una página con un campo de texto y una lista predefinida de elementos.
// ● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
// mostrar solo los elementos que contienen el texto escrito.
// Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe
// quedar visible.
import { useState } from 'react';

export default function Ejercicio4() {
  const [list, setList] = useState(["Perro", "Gato", "Pez"]);
  const [inputValue, setInputValue] = useState("");

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Escribe algo...'
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}