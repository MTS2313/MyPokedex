import axios from "axios";
import '../../assets/PokeTypesSet.scss'
import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import styled from "styled-components";
import instance from "../../assets/axios";
import "./style.scss";
function Card({ PokeId }) {
  const [LoadState, setLoadState] = useState(false);
  const [Pokemon, setPokemon] = useState({
    name: "#",
    sprites: {
      front_default: "#",
    },
  });
  useEffect(() => {
    instance.get(`/pokemon/${PokeId}`).then((response) => {
      setLoadState(false);
      setPokemon(response.data);
    });
  }, [PokeId]);
  function renderCard() {
    setInterval(() => {
      setLoadState(true);
    }, 2000);
  }
  renderCard();
  // const Div = styled.div`
  //   border-image-source: linear-gradient(0deg, #498cf0 50%, #ccf0bb 0%); ;
  // `;
  return LoadState  ? (
    <div className="Card" key={Pokemon.id} id={Pokemon.id}>
      <div className="PokemonImage">
        <img id="LoadImga" src={Pokemon.sprites.front_default} alt="" />
      </div>
      <div className="PokemonRedInfo">
        <p className="PokemonName">{Pokemon.name}</p>
        <div className="PokemonAtr">
          <div className="AtrName">
            <p>Peso</p>
          </div>
          <div className="AtrValue">{Pokemon.weight}</div>
        </div>
        <div className="PokemonAtr">
          <div className="AtrName">
            <p>Altura</p>
          </div>
          <div className="AtrValue">{Pokemon.height}</div>
        </div>
        {Pokemon.types.map((T) => {
          return (
            <div className="PokemonAtr">
              <div className="AtrName">
                <p>Tipo</p>
              </div>
              <div className={`AtrValue ${T.type.name}`}>{T.type.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="spinnerContent">
      <Spinner color="success">Carregando...</Spinner>
    </div>
  );
}

export default Card;
