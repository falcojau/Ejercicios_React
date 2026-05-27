// Objetivo del ejercicio: Practicar manejo de eventos, funciones de temporización y 
// manipulación del DOM. Ejercicio:
// Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: 
// “Iniciar”, “Pausar” y “Reiniciar”.
// • Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, 
// minutos y horas.
// • “Pausar” detiene el conteo pero mantiene el tiempo actual.
// • “Reiniciar” pone el temporizador en 00:00:00.
import { useState, useEffect } from "react";

export default function Ejercicio6() {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(true);
  const [intervalo, setIntervalo] = useState(null);

  const iniciar = () => {
    if (intervalo) clearInterval(intervalo);
    setIntervalo(setInterval(() => {
      setSegundos(prevSegundos => prevSegundos + 1);
    }, 1000));
    setPausado(false);
  }

  const pausar = () => {
    clearInterval(intervalo);
    setPausado(true);
  }

  const reiniciar = () => {
    setSegundos(0);
    clearInterval(intervalo);
  }

  useEffect(() => {
    return () => clearInterval(intervalo);
  }, [intervalo]);

  return (
    <div>
      <h2>Temporizador: {segundos} segundos</h2>
      <button onClick={iniciar} id="iniciar">
        Iniciar
      </button>
      <button onClick={pausar} id="pausar">
        Pausar
      </button>
      <button onClick={reiniciar} id="reiniciar">
        Reiniciar
      </button>
    </div>
  )
}