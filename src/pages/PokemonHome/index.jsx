import React, { useCallback, useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import axios from "axios";
import { ChangePageButtons, Container, PokemonList } from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import PokemonSearch from "../../components/PokemonSearch";
import { useNavigate } from "react-router-dom";

const PokemonHome = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [reloadPokemons, setReloadPokemons] = useState(false);
  const navigate = useNavigate();

  const getPokemonData = useCallback(async () => {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setNextUrl(data.next);
      setPrevUrl(data.prev);
      getPokemonList(data.results);
      setReloadPokemons(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPokemonData();
    document.title = "PokeReact - A Pokédex created with ReactJS!";
  }, [reloadPokemons, getPokemonData]);

  async function getPokemonList(results) {
    const pokemonArray = await Promise.all(
      results.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url);
        return data;
      })
    );

    setPokemons(pokemonArray);
  }

  async function prevPokemon() {
    if (!prevUrl) return;
    setLoading(true);
    let { data } = await axios.get(prevUrl);
    getPokemonList(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    window.scrollTo(0, 0);
    setLoading(false);
  }

  async function nextPokemon() {
    if (!nextUrl) return;
    setLoading(true);
    let { data } = await axios.get(nextUrl);
    getPokemonList(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    window.scrollTo(0, 0);
    setLoading(false);
  }

  if (pokemons)
    return (
      <Container>
        <PokemonSearch
          setPokemons={setPokemons}
          pokemons={pokemons}
          setReloadPokemons={setReloadPokemons}
        />

        <PokemonList>
          {pokemons.map((pokemon, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
              >
                <PokemonCard
                  idPokemon={pokemon.id}
                  namePokemon={pokemon.name}
                  firstTypePokemon={
                    pokemon.types[0] && pokemon.types[0].type.name
                  }
                  secondTypePokemon={
                    pokemon.types[1] && pokemon.types[1].type.name
                  }
                  imgPokemon={
                    pokemon.sprites.other["official-artwork"].front_default
                  }
                />
              </li>
            );
          })}
        </PokemonList>

        <ChangePageButtons>
          {prevUrl && (
            <button onClick={prevPokemon}>
              <IoIosArrowBack /> Previous
            </button>
          )}
          {nextUrl && (
            <button onClick={nextPokemon}>
              Next <IoIosArrowForward />
            </button>
          )}
        </ChangePageButtons>
      </Container>
    );
};

export default PokemonHome;
