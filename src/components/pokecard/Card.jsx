import axios from "axios";
import "../../assets/PokeTypesSet.scss";
import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import instance from "../../assets/axios";
import "./style.scss";
import InterPokemon from "../../assets/SVG/ponto-de-interrogacao.svg";
import InfoBar from "../InfoBar/InfoBar";
import ModalBody from "../../page/Modal/ModalBody";


function Card({ PokeId }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [LoadState, setLoadState] = useState(false);
  const [Pokemon, setPokemon] = useState({
    name: "#",
    height:0,
    weight:0,
    sprites: {
      front_default: "#",
      other: {
        dream_world: {
          front_default: null,
        },
      },
    },
    types:[
      {
        type:{
          name:null,
        }
      }
    ]
  });
  useEffect(() => {
    instance.get(`/pokemon/${PokeId}`).then((response) => {
      setLoadState(false);
      setPokemon(response.data);
    });
  }, [PokeId]);
  return (
    <div className="Card" >
      <div className="PokemonImg">
        <img
          src={
            Pokemon.sprites.other.dream_world.front_default
              ? Pokemon.sprites.other.dream_world.front_default
              : InterPokemon
          }
          alt=""
        />
      </div>
      <div className="DivBar"></div>
      <div className="InfoContent">
        <p className="PokemonName">{Pokemon.name}</p>
        <InfoBar name='Weight' value={`${Pokemon.weight < 10 ? `${Pokemon.weight * 10}g`:`${Pokemon.weight/10}kg`}`} variant='bar2'/>
        <InfoBar name='Height' value={`${Pokemon.height < 10 ? `${Pokemon.height * 10}cm`:`${Pokemon.height/10}m`}`} variant='bar2'/>
        {Pokemon.types.map(i=>{
          return(
            <InfoBar value={i.type.name} classSu={i.type.name} variant='typebar'/>
          )
        })}
        <button className="BtnModal" onClick={handleShow}>Modal</button>
      </div>
      <Modal show={show} onHide={handleClose} size='xl' centered={true}>
        <ModalBody name={Pokemon.name} onClick={handleClose}/>
      </Modal>
    </div>
  );
}

export default Card;
