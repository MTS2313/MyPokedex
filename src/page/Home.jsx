import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import instance from "../assets/axios";
import ControlBox from "../components/body_components/controlbox/ControlBox";
import Header from "../components/body_components/header/Header";
import Card from "../components/pokecard/Card";
import "./style.scss";
function Home() {
  function NextList() {
    if (StartIndex <= 800) {
      document.getElementById("HomeId").scroll({ top: 0, behavior: "smooth" });
      setStartIndex((StartIndex += IndexModif));
    }
  }
  function BackList() {
    if (!(StartIndex - IndexModif < 0)) {
      document.getElementById("HomeId").scroll({ top: 0, behavior: "smooth" });
      setStartIndex((StartIndex -= IndexModif));
    }
  }
  const [PokemonList, setPokemonList] = useState([]);
  const [IndexModif, setIndexModif] = useState(100);
  var [StartIndex, setStartIndex] = useState(0);
  var ListLimit = 100;
  useEffect(() => {
    instance
      .get(`/pokemon/?limit=${ListLimit}&offset=${StartIndex}`)
      .then((response) => {
        setPokemonList(response.data.results);
        console.dir("Test response List");
      });
  }, [StartIndex]);
  return (
    <div className="Home" id="HomeId">
      <Header />
      <div className="PokeList">
        {PokemonList.map((i) => {
          return <Card PokeId={i.name} />;
        })}
      </div>
      <ControlBox Next={NextList} Back={BackList} />
    </div>
  );
}
export default Home;
