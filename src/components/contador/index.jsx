import "./styles.css";

import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="contador">
      <p >Componente Contador</p>

      <p >Valor del contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      {count === 0 ? <p> No se puede disminuir el valor cero </p> : 
      <div>
        <button onClick={() => setCount(count - 1)}>Disminuir</button>
        <button onClick={() => setCount(0)}>Restablecer</button>
      </div>   
    }
      
    </div>
  );
};

export default Contador;
