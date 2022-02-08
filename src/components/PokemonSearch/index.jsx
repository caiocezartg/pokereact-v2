import axios from "axios";
import React, { useState } from "react";
import { InputSearch } from "./styles";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { toast } from "react-toastify";

const PokemonSearch = ({ setPokemons, pokemons, setReloadPokemons }) => {
  const [inputText, setInputText] = useState("");

  async function searchPokemon(event) {
    event.preventDefault();
    const namePokemon = inputText.toLowerCase().replace(/\b0+/g, "");

    try {
      if (!inputText.length) {
        setReloadPokemons(true);
      } else {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${namePokemon}/`
        );
        pokemons.length = 0;
        setPokemons((pokemons) => [...pokemons, data]);
      }
    } catch (error) {
      toast.error("It was not possible to find this Pokémon. Try again!", {
        position: "top-center",
      });
    } finally {
      setInputText("");
    }
  }

  return (
    <InputSearch onSubmit={searchPokemon}>
      <input
        type="text"
        placeholder="Search your Pokémon by your name (ex: Pidgey) or ID (ex: 16)!"
        onChange={({ target }) => setInputText(target.value)}
        value={inputText}
      />
      <button type="submit">
        <MdOutlineCatchingPokemon />
      </button>
    </InputSearch>
  );
};

export default PokemonSearch;
