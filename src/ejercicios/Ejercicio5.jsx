// Objetivo del ejercicio: Practicar la manipulación de formularios, eventos, y lógica básica de
// JavaScript. Ejercicio:
// Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar",
// "Multiplicar", y "Dividir".
// ● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un
// área de texto o debajo de los botones.
// ● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).
import { useState } from "react";

export default function Ejercicio5() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(num1 + num2);
  };

  const restar = () => {
    setResultado(num1 - num2);
  };

  const multiplicar = () => {
    setResultado(num1 * num2);
  };

  const dividir = () => {
    if (num2 === 0) {
      alert('No se puede divir por 0');
      return;
    } else {
      setResultado(num1 / num2);
    }
  };

  return (
    <div>
      <input
        type="number"
        id="n1"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <button onClick={sumar} id="sumar">
        ➕
      </button>
      <button onClick={restar} id="sumar">
        ➖
      </button>
      <button onClick={multiplicar} id="sumar">
        ✖️
      </button>
      <button onClick={dividir} id="sumar">
        ➗
      </button>
      <input
        type="number"
        id="n2"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <p>Resultado: {resultado}</p>
    </div>
  )
}