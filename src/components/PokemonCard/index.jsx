import React from "react";
import { Pokemon } from "./styles";

const PokemonCard = ({
  idPokemon,
  namePokemon,
  firstTypePokemon,
  secondTypePokemon,
  imgPokemon,
}) => {
  return (
    <Pokemon
      typeOne={firstTypePokemon.type.name}
      typeTwo={secondTypePokemon && secondTypePokemon.type.name}
    >
      <img src={imgPokemon} alt="Pokemon" />

      {idPokemon < 10 ? (
        <span>{`#00${idPokemon}`}</span>
      ) : (
        <span>{`#0${idPokemon}`}</span>
      )}

      <h2>{namePokemon}</h2>

      <p className="firstType">{firstTypePokemon.type.name}</p>

      {secondTypePokemon && (
        <p className="secondType">{secondTypePokemon.type.name}</p>
      )}
    </Pokemon>
  );
};

export default PokemonCard;
