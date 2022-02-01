import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import axios from "axios";
import { ChangePageButtons, Container, PokemonList } from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import PokemonSearch from "../../components/PokemonSearch";

const PokemonHome = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [reloadPokemons, setReloadPokemons] = useState(false);

  useEffect(() => {
    //Função para puxar o objeto de Pokémons da API, caso resolva, chama getPokemonList passando como parametro uma array.
    async function getPokemonData() {
      try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        setNextUrl(data.next);
        setPrevUrl(data.prev);
        getPokemonList(data.results);
        setReloadPokemons(false);
      } catch (error) {
        console.log(error);
      }
    }

    getPokemonData();
  }, [reloadPokemons]);

  //Função para resolver todas as promises de cada url de seu respectivo Pokémon, retornando uma array e sendo adicionada ao estado.
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
    let { data } = await axios.get(prevUrl);
    getPokemonList(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }

  async function nextPokemon() {
    if (!nextUrl) return;
    let { data } = await axios.get(nextUrl);
    getPokemonList(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }

  return (
    <Container>
      <PokemonSearch
        setPokemons={setPokemons}
        pokemons={pokemons}
        setReloadPokemons={setReloadPokemons}
      />
      <PokemonList>
        {pokemons &&
          pokemons.map((pokemon, index) => {
            return (
              <PokemonCard
                key={index}
                idPokemon={pokemon.id}
                namePokemon={pokemon.name}
                firstTypePokemon={pokemon.types[0]}
                secondTypePokemon={pokemon.types[1]}
                imgPokemon={
                  pokemon.sprites.other["official-artwork"].front_default
                }
              />
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
