import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import instance from "../../assets/axios";
import InfoBar from "../../components/InfoBar/InfoBar";
import AtribuNivel from "../../components/Progress/AtribuNivel";
import "./style.scss";

function ModalBody({ name, onClick }) {
  let icon_size = 2.4;
  const [Pokemon, setPokemon] = useState({
    weight: "",
    height: "",
    stats: [
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
    ],
    types: [
      {
        type: {
          name: "",
        },
      },
    ],
    sprites: {
      other: {
        dream_world: {
          front_default: "",
        },
      },
    },
  });
  useEffect(() => {
    instance.get(`/pokemon/${name}`).then((response) => {
      setPokemon(response.data);
    });
  }, [name]);
  return (
    <div className="ModalBody">
      <div className="ModalHeader">
        <MdOutlineClose
          fontSize={`${icon_size}rem`}
          onClick={onClick}
          cursor="pointer"
        />
        <p className="ModalPokemonName">{name}</p>
        <div className="ContentFakeModal"></div>
      </div>

      <div className="BarDivTwContent" />

      <div className="ModalImage">
        <img src={Pokemon.sprites.other.dream_world.front_default} />
      </div>
      <div className="ModalPokemoninfo">
        <div className="InfosBarContent">
          <div className="Info infoContentsAl">
            <p className="InfoTitlesClass">Info</p>
            <div className="InfoContentBars AllBarsModalClass">
              <InfoBar
                variant="bar2"
                name="Weight"
                value={`${Pokemon.weight <= 10? `${Pokemon.weight * 100}g`: `${Pokemon.weight/10}`}Kg`}
              />
              <InfoBar
                variant="bar2"
                name="Height"
                value={`${Pokemon.weight <= 10? `${Pokemon.weight * 10}cm`: `${Pokemon.weight/10}`}m`}
              />
            </div>
          </div>
          <div className="Types infoContentsAl">
            <p className="InfoTitlesClass">Types</p>
            <div className="TypesModalContent AllBarsModalClass">
              {Pokemon.types.map((i, index) => {
                return (
                  <InfoBar
                    value={i.type.name}
                    classSu={i.type.name}
                    variant="typebar"
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="StatsContent">
          {/* porq nao usar um map? */}
          <AtribuNivel
            name={Pokemon.stats[0].stat.name}
            value={Pokemon.stats[0].base_stat}
          />
          <AtribuNivel
            name={Pokemon.stats[1].stat.name}
            value={Pokemon.stats[1].base_stat}
          />
          <AtribuNivel
            name={Pokemon.stats[2].stat.name}
            value={Pokemon.stats[2].base_stat}
          />
          <AtribuNivel
            name={Pokemon.stats[3].stat.name}
            value={Pokemon.stats[3].base_stat}
          />
          <AtribuNivel
            name={Pokemon.stats[4].stat.name}
            value={Pokemon.stats[4].base_stat}
          />
          <AtribuNivel
            name={Pokemon.stats[5].stat.name}
            value={Pokemon.stats[5].base_stat}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalBody;
