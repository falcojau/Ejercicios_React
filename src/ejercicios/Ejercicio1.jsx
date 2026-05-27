// Objetivo del ejercicio: Practicar eventos en JavaScript y manipulación de estilos del DOM.
// Ejercicio:
// Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario 
// haga clic en el
// botón, el color de fondo de la página debe cambiar a un color aleatorio.
import { useState, useEffect } from 'react';

export default function Ejercicio1() {
  const [backgroundColor, setBackgroundColor] = useState("");

  const colorAleatorio = () => {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    return () => { document.body.style.backgroundColor = ""; };
  }, [backgroundColor]);

  return (
    <div>
      <button onClick={() => setBackgroundColor(colorAleatorio())}>Cambiar Color de Fondo</button>
    </div>
  )
}