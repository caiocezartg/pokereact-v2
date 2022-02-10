import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, PokemonList } from "./styles";
import PokemonCard from "../../components/PokemonCard";

const PokemonFavorites = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  const getPokemonsStorage = useCallback(() => {
    const pokemonLocalStorage = JSON.parse(
      localStorage.getItem("pokemons") || "[]"
    );

    if (!pokemonLocalStorage.length) {
      localStorage.removeItem("pokemons");
    }

    setPokemons(pokemonLocalStorage);
  }, []);

  useEffect(() => {
    getPokemonsStorage();
  }, [getPokemonsStorage]);

  return (
    <Container>
      {pokemons.length ? (
        <PokemonList>
          {pokemons.map((pokemon, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
              >
                <PokemonCard
                  idPokemon={pokemon.id}
                  namePokemon={pokemon && pokemon.name}
                  firstTypePokemon={pokemon.typeOne}
                  secondTypePokemon={pokemon.typeTwo}
                  imgPokemon={pokemon.image}
                />
              </li>
            );
          })}
        </PokemonList>
      ) : (
        <p>You don't have any favorited Pokémon!</p>
      )}
    </Container>
  );
};

export default PokemonFavorites;
