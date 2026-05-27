// Objetivo del ejercicio: Practicar el manejo de eventos y la actualización del 
// contenido del DOM. Ejercicio:
// Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre 
// "Clics: 0". Cada vez que se haga clic en el botón, el texto debe actualizarse para 
// mostrar el número total de clics realizados.
import { useState } from 'react';

export default function Ejercicio2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clics: {count}</p>
      <button onClick={() => setCount(count + 1)}>Contar clics</button>
    </div>
  );
}