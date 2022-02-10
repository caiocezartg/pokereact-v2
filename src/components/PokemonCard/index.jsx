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
    <Pokemon typeOne={firstTypePokemon} typeTwo={secondTypePokemon}>
      {imgPokemon && <img src={imgPokemon} alt="Pokemon" />}

      {idPokemon < 10 ? (
        <span>{`#00${idPokemon}`}</span>
      ) : (
        <span>{`#0${idPokemon}`}</span>
      )}

      {namePokemon && <h2>{namePokemon}</h2>}

      {firstTypePokemon && <p className="firstType">{firstTypePokemon}</p>}

      {secondTypePokemon && <p className="secondType">{secondTypePokemon}</p>}
    </Pokemon>
  );
};

export default PokemonCard;
