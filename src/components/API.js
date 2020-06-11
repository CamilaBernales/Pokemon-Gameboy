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
        <div class="top">
          <span>◁ OFF·ON ▷</span>
        </div>
        <div className="screen">
          <div className="screen-top">
            <span>DOT MATRIX WITH STEREO SOUND</span>
          </div>
          <div class="battery">
            <div class="led"></div>
            <p>Baterry</p>
          </div>
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
        <div class="marca">
          <p>Nintendo</p>
        </div>
        <div className="controles">
          <div class="cross">
            <div class="cursor up"></div>
            <div class="cursor left"></div>
            <div class="cursor center">
              <div class="circle"></div>
            </div>
            <div class="cursor right"></div>
            <div class="cursor down"></div>
          </div>
        </div>
        <div className="btn-rd">
          <button className="btn-rd1"></button>
          <button className="btn-rd2"></button>
        </div>
        <div className="buttons">
          <div className="start-container">
            <button
              onClick={() => consultarApi()}
              className="start-btn"
            ></button>
          </div>
          <div className="select-container">
            <button className="select-btn"></button>
          </div>
        </div>
        <div class="audio">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  );
};

export default API;
