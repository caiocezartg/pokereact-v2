import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  PokemonAbilities,
  PokemonBasicInfo,
  PokemonInfoWrapper,
  PokemonListStats,
  PokemonStatsWrapper,
} from "./styles";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import Loading from "../../components/Loading";

const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState({});
  const [pokemonGender, setPokemonGender] = useState({
    male: [],
    female: [],
  });
  const [loading, setLoading] = useState(false);

  const { pokemon } = useParams();

  const getPokemonData = useCallback(async () => {
    try {
      setLoading(true);
      const [
        { data: dataInfo },
        { data: dataDescription },
        { data: dataFemale },
        { data: dataMale },
      ] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`),
        axios.get("https://pokeapi.co/api/v2/gender/1/"),
        axios.get("https://pokeapi.co/api/v2/gender/2/"),
      ]);
      setPokemonData(dataInfo);
      setPokemonDescription(dataDescription);
      const arrayFemale = dataFemale.pokemon_species_details.map((pokemon) => {
        return pokemon.pokemon_species.name;
      });
      setPokemonGender((pokemonGender) => ({
        ...pokemonGender,
        female: arrayFemale,
      }));
      const arrayMale = dataMale.pokemon_species_details.map((pokemon) => {
        return pokemon.pokemon_species.name;
      });
      setPokemonGender((pokemonGender) => ({
        ...pokemonGender,
        male: arrayMale,
      }));
      const pokemonNameTitle =
        dataInfo.name.charAt(0).toUpperCase() + dataInfo.name.slice(1);
      document.title = `PokeReact - ${pokemonNameTitle}`;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [pokemon]);

  useEffect(() => {
    getPokemonData();
  }, [pokemon, getPokemonData]);

  if (loading) return <Loading />;
  if (pokemonData && pokemonDescription && pokemonGender)
    return (
      <Container>
        <PokemonInfoWrapper
          typeOne={pokemonData.types && pokemonData.types[0].type.name}
          typeTwo={
            pokemonData.types &&
            pokemonData.types[1] &&
            pokemonData.types[1].type.name
          }
        >
          {/* Pokémon Image */}
          {pokemonData.sprites && (
            <img
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt="Pokémon"
            />
          )}

          {/* Pokémon ID */}
          {pokemonData.id < 10 ? (
            <span>{`#00${pokemonData.id}`}</span>
          ) : (
            <span>{`#0${pokemonData.id}`}</span>
          )}

          {/* Pokémon Name */}
          <h1>{pokemonData.name}</h1>

          {/* Pokémon Type One */}
          {pokemonData.types && pokemonData.types[0] && (
            <p className="firstType">{pokemonData.types[0].type.name}</p>
          )}

          {/* Pokémon Type Two */}
          {pokemonData.types && pokemonData.types[1] && (
            <p className="secondType">{pokemonData.types[1].type.name}</p>
          )}

          {/* Pokémon Entry Description - Removes strange arrow up from API */}
          <div>
            <h2>POKÉDEX ENTRY</h2>
            {pokemonDescription.flavor_text_entries && (
              <h3>
                {pokemonDescription.flavor_text_entries[7].flavor_text.replace(
                  /\f|\n/g,
                  " "
                )}
              </h3>
            )}
          </div>

          <PokemonAbilities>
            <h2>ABILITIES</h2>
            {pokemonData.abilities && pokemonData.abilities[0] && (
              <h4>{pokemonData.abilities[0].ability.name}</h4>
            )}

            {pokemonData.abilities && pokemonData.abilities[1] && (
              <h4>{pokemonData.abilities[1].ability.name}</h4>
            )}
          </PokemonAbilities>

          <PokemonBasicInfo>
            <div>
              <h2>HEIGHT</h2>
              <h4>{`${pokemonData.height / 10}m`}</h4>
            </div>

            <div>
              <h2>WEIGHT</h2>
              <h4>{`${pokemonData.weight / 10}kg`}</h4>
            </div>

            <div>
              <h2>BASE EXP</h2>
              <h4>{`${pokemonData.base_experience}xp`}</h4>
            </div>
          </PokemonBasicInfo>
        </PokemonInfoWrapper>

        <PokemonStatsWrapper>
          <h2>POKÉMON GENDER</h2>
          <div>
            <span
              className={
                pokemonGender.male.includes(pokemonData.name) ? "active" : null
              }
            >
              <BsGenderMale />
            </span>
            <span
              className={
                pokemonGender.female.includes(pokemonData.name)
                  ? "active"
                  : null
              }
            >
              <BsGenderFemale />
            </span>
          </div>

          <h2>POKÉMON STATS</h2>
          <PokemonListStats>
            <li>
              <span>HP</span>
              {pokemonData.stats && pokemonData.stats[0].base_stat}
            </li>
            <li>
              <span>ATK</span>
              {pokemonData.stats && pokemonData.stats[1].base_stat}
            </li>
            <li>
              <span>DEF</span>
              {pokemonData.stats && pokemonData.stats[2].base_stat}
            </li>
            <li>
              <span>SpA</span>
              {pokemonData.stats && pokemonData.stats[3].base_stat}
            </li>
            <li>
              <span>SpD</span>
              {pokemonData.stats && pokemonData.stats[4].base_stat}
            </li>
            <li>
              <span>SPE</span>
              {pokemonData.stats && pokemonData.stats[5].base_stat}
            </li>
            <li>
              <span>TOT</span>
              {pokemonData.stats &&
                pokemonData.stats.reduce((acc, value) => {
                  return acc + value.base_stat;
                }, 0)}
            </li>
          </PokemonListStats>
        </PokemonStatsWrapper>
      </Container>
    );
};

export default PokemonInfo;
