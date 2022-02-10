import React from "react";
import pokeballBlack from "../../assets/pokeball_black.png";
import { LoadingScreen } from "./styles";

const Loading = () => {
  return (
    <LoadingScreen>
      <img src={pokeballBlack} alt="Pokeball" />
    </LoadingScreen>
  );
};

export default Loading;
