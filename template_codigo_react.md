import { useState } from "react";

export default function MiComponente() {
  // 1. ESTADO
  const [dato1, setDato1] = useState(valorInicial);
  const [dato2, setDato2] = useState(valorInicial);

  // 2. FUNCIONES
  const funcionAccion1 = () => {
    setDato1(nuevoValor);
  };

  const funcionAccion2 = () => {
    setDato2(nuevoValor);
  };

  // 3. VALIDACIONES (si las necesitas)
  const funcionConValidacion = () => {
    if (condicionError) {
      alert('Error');
      return;
    }
    setDato1(nuevoValor);
  };

  // 4. RETURN
  return (
    <div>
      {/* INPUTS */}
      <input 
        value={dato1}
        onChange={(e) => setDato1(e.target.value)}
      />

      {/* BOTONES */}
      <button onClick={funcionAccion1}>Acción 1</button>
      <button onClick={funcionAccion2}>Acción 2</button>

      {/* RESULTADO */}
      <p>Resultado: {dato1}</p>
    </div>
  );
}