// Objetivo del ejercicio: Practicar eventos en tiempo real y manipulación avanzada del DOM.
// Ejercicio:
// Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
// • Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
// • Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios 
// ni saltos de línea.
import { useState } from 'react';

export default function Ejercicio8() {
  const [texto, setTexto] = useState("");
  const [contadorPalabras, setContadorPalabras] = useState(0);
  const [contadorCaracteres, setContadorCaracteres] = useState(0);

  const handleTextoChange = (e) => {
    const nuevoTexto = e.target.value;
    setTexto(nuevoTexto);

    // Contar caracteres (sin espacios)
    // ¿Cómo quito espacios del texto?
    const caracteres = nuevoTexto.trim().length;
    setContadorCaracteres(caracteres);

    // Contar palabras
    // ¿Cómo divido por espacios?
    // ¿Y cuántas palabras tengo?
    const palabras = nuevoTexto.trim().split(" ").length;
    setContadorPalabras(palabras);
  }

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={handleTextoChange}
        placeholder="Escribe algo..."
      />
      <p>Número de Palabras: {contadorPalabras}</p>
      <p>Número de Caracteres: {contadorCaracteres}</p>
    </div>
  )
}