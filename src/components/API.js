import React, { useEffect, useState } from "react";
import "../App.css";
const API = () => {
  const [pokemon, setPokemon] = useState({});
  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const consultarApi = async () => {
    const solicitud = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokeId()
    );
    const respuesta = await solicitud.json();
    setPokemon(respuesta);
    console.log(respuesta);
  };

  useEffect(() => {
    consultarApi();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="box">
      <div className="gameboy">
        <div className="screen">
          <div className="game-screen">
            <img
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                pokemon.id +
                ".png"
              }
              alt="pokemon"
            />
            <h1>{pokemon.name}</h1>
          </div>
        </div>
        <button onClick={() => consultarApi()}>next</button>
      </div>
    </div>
  );
};

export default API;
