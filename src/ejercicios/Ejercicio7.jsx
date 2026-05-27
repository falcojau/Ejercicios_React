// Objetivo del ejercicio: Practicar generación de cadenas aleatorias y uso de formularios.
// Ejercicio:
// Crea una página con un campo de entrada para especificar la longitud de una contraseña y 
// un botón que diga “Generar contraseña”.
// • Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
// letras, números y caracteres especiales.
// • Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando 
// que la longitud debe ser mayor o igual a 4. 
import { useState } from 'react';

export default function Ejercicio7() {
  const [longitud, setLongitud] = useState(0);
  const [password, setPassword] = useState("");
  const numeros = "1234567890";
  const letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const simbolos = "!@#¢$%&/()._-"
  const todosCaracteres = numeros + letras + simbolos;

  const createPassword = () => {
    if (longitud <= 4) {
      alert('La longitud de la contraseña debe ser mayor que 4')
      return;
    } else {
      let contraseñaGenerada = "";
      for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length);
        contraseñaGenerada += todosCaracteres[indiceAleatorio];
      }
      setPassword(contraseñaGenerada);
    }
  }


  return (
    <div>
      <label>Selecciona la longitud de tu contraseña: </label>
      <input
        type="number"
        value={longitud}
        onChange={(e) => setLongitud(Number(e.target.value))}
        placeholder='Mínimo 4'
      />
      <button onClick={createPassword}>
        Generar Contraseña
      </button>
      <p>Contraseña Segura: {password}</p>
    </div>
  )
}