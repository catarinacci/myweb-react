import React, { useState } from "react";
import "./styles.css";

export default function ListaNombres() {
  const [nombre, setNombre] = useState("");
  const [nombres, setNombres] = useState([]);

  const guardar = () => {
    setNombres([...nombres,nombre]);
    setNombre("");
    //console.log(nombres)
  }

  return (
    <div className="listaNombres">
      <h1>Lista nombres</h1>

      <p>Ingresar nombre: </p>
      <input type="text" name="" id="" value={nombre} onChange={(e) => {setNombre(e.target.value)}} />
      <button onClick={guardar}>Enviar</button>

      <ul>
        {
            nombres.map((elemento, index) => {
                return <li key={index}>{elemento}</li>
            })
        }
      </ul>
    </div>
  );
}
