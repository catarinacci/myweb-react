import "./styles.css";
import React, { useEffect, useState } from "react";

export default function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [anterior, setAnterior] = useState(null);
  const [siguiente, setSiguiente] = useState(null);
  const [actual, setActual] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

  useEffect(() => {
    async function obtenerPokemones() {
      const response = await fetch(actual);
      const data = await response.json();
      console.log(data)
      setPokemones(data.results);
      setAnterior(data.previous);
      setSiguiente(data.next);
    }
    obtenerPokemones();
  },[actual]);

  return (
    <div className="pokemones">
        <h1>Lista de pokemones</h1>
      <ul>
        {pokemones.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ul>
      {anterior !== null && <button onClick={() => anterior !== null && setActual(anterior)}>Anteriores</button>}     
      <button onClick={() => siguiente !== null && setActual(siguiente)}>Siguientes</button>
    </div>
  );
}
