import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import axios from "axios";
import { ChangePageButtons, Container, PokemonList } from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const PokemonHome = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Função para puxar o objeto de Pokémons da API, caso resolva, chama getPokemonList passando como parametro uma array.
    async function getPokemonData() {
      try {
        setLoading(true);
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        setNextUrl(data.next);
        setPrevUrl(data.prev);
        getPokemonList(data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }

    getPokemonData();
  }, []);

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
    setLoading(true);
    let { data } = await axios.get(prevUrl);
    getPokemonList(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  async function nextPokemon() {
    if (!nextUrl) return;
    setLoading(true);
    let { data } = await axios.get(nextUrl);
    getPokemonList(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  return (
    <Container>
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
        <button onClick={prevPokemon}>
          <IoIosArrowBack /> Anterior
        </button>
        <button onClick={nextPokemon}>
          Próximo <IoIosArrowForward />{" "}
        </button>
      </ChangePageButtons>
    </Container>
  );
};

export default PokemonHome;
