import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default PokemonHome;
