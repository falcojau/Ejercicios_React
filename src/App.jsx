import { useState } from 'react';
import Ejercicio1 from './ejercicios/Ejercicio1.jsx';
import Ejercicio2 from './ejercicios/Ejercicio2.jsx';
import Ejercicio3 from './ejercicios/Ejercicio3.jsx';
import Ejercicio4 from './ejercicios/Ejercicio4.jsx';
import Ejercicio5 from './ejercicios/Ejercicio5.jsx';
import Ejercicio6 from './ejercicios/Ejercicio6.jsx';
import Ejercicio7 from './ejercicios/Ejercicio7.jsx';
import Ejercicio8 from './ejercicios/Ejercicio8.jsx';
import Ejercicio9 from './ejercicios/Ejercicio9.jsx';



export default function App() {
  const [ejercicioActual, setEjercicioActual] = useState(1);

  const renderizarEjercicio = () => {
    switch (ejercicioActual) {
      case 1:
        return <Ejercicio1 />;
      case 2:
        return <Ejercicio2 />;
      case 3:
        return <Ejercicio3 />;
      case 4:
        return <Ejercicio4 />;
      case 5:
        return <Ejercicio5 />;
      case 6:
        return <Ejercicio6 />;
      case 7:
        return <Ejercicio7 />;
      case 8:
        return <Ejercicio8 />;
      case 9:
        return <Ejercicio9 />;
      default:
        return <Ejercicio1 />;
    }
  };

  return (
    <div>
      <nav>
        <h1>Mis Ejercicios React</h1>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => setEjercicioActual(num)}
              style={{
                backgroundColor: ejercicioActual === num ? 'blue' : 'gray',
                color: 'white',
                padding: '10px 15px',
                margin: '5px',
                cursor: 'pointer'
              }}
            >
              Ejercicio {num}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {renderizarEjercicio()}
      </main>
    </div>
  );
}