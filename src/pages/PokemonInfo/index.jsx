import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  InfoButtons,
  PokemonAbilities,
  PokemonBasicInfo,
  PokemonInfoWrapper,
  PokemonListStats,
  PokemonStatsWrapper,
} from "./styles";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import Loading from "../../components/Loading";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";

const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState({});
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonGender, setPokemonGender] = useState({
    male: [],
    female: [],
  });
  const [pokemonFavorited, setPokemonFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { pokemon } = useParams();
  const navigate = useNavigate();

  // Get Ability One in english
  const abilityOneDetails =
    pokemonAbilities[0] &&
    pokemonAbilities[0].effect_entries.find((ability) => {
      return ability.language.name === "en";
    });

  // Get Ability Two in english
  const abilityTwoDetails =
    pokemonAbilities[1] &&
    pokemonAbilities[1].effect_entries.find((ability) => {
      return ability.language.name === "en";
    });

  // Get Description in english
  const descriptionEnglish =
    pokemonDescription &&
    pokemonDescription.flavor_text_entries &&
    pokemonDescription.flavor_text_entries.find((desc) => {
      return desc.language.name === "en";
    });

  // Get all info, entry and gender about the specific Pokémon
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
      getAbilitiesDescription(dataInfo.abilities);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [pokemon]);

  async function getAbilitiesDescription(abilitiesData) {
    let arrayAbilities = await Promise.all(
      abilitiesData.map(async (ability) => {
        const { data } = await axios.get(ability.ability.url);
        return data;
      })
    );

    setPokemonAbilities(arrayAbilities);
  }

  function addFavoritePokemon() {
    let favoritePokemons = JSON.parse(localStorage.getItem("pokemons") || "[]");

    favoritePokemons.push({
      id: pokemonData.id,
      image: pokemonData.sprites.other["official-artwork"].front_default,
      name: pokemonData.name,
      typeOne: pokemonData.types[0].type.name,
      typeTwo: pokemonData.types[1] && pokemonData.types[1].type.name,
    });

    localStorage.setItem("pokemons", JSON.stringify(favoritePokemons));
    setPokemonFavorited(true);
    toast.success(
      `You added ${
        pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
      } to your favorites list!`
    );
  }

  function removeFavoritePokemon() {
    let favoritePokemons = JSON.parse(localStorage.getItem("pokemons") || "[]");

    if (
      favoritePokemons.find((pokemon) => pokemon.id === pokemonData.id) &&
      window.confirm(
        "Do you really want to remove this Pokémon from favorites?"
      )
    ) {
      let newArrayPokemons = favoritePokemons.filter(
        (pokemon) => pokemon.id !== pokemonData.id
      );
      localStorage.setItem("pokemons", JSON.stringify(newArrayPokemons));
      setPokemonFavorited(false);
      toast.warning(
        `You removed ${
          pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
        } from your favorites list.`
      );
    }
  }

  useEffect(() => {
    getPokemonData();

    let pokemonsLocalStorage = JSON.parse(
      localStorage.getItem("pokemons") || "[]"
    );

    if (pokemonsLocalStorage.find((pokemon) => pokemon.id === pokemonData.id)) {
      setPokemonFavorited(true);
    }
  }, [pokemon, getPokemonData, pokemonData.id]);

  if (loading) return <Loading />;
  if (pokemonData && pokemonDescription && pokemonGender && pokemonAbilities)
    return (
      <Container>
        {/* Pokémon Image, ID, Name, Entry and Info */}
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
              <h3>{descriptionEnglish.flavor_text.replace(/\f/g, " ")}</h3>
            )}
          </div>

          {/* Pokémon Abilities with Tooltip */}
          <PokemonAbilities>
            <h2>ABILITIES</h2>
            {pokemonData.abilities && pokemonData.abilities[0] && (
              <h4 data-tip={`${abilityOneDetails && abilityOneDetails.effect}`}>
                {pokemonData.abilities[0].ability.name}
              </h4>
            )}

            {pokemonData.abilities && pokemonData.abilities[1] && (
              <h4 data-tip={`${abilityTwoDetails && abilityTwoDetails.effect}`}>
                {pokemonData.abilities[1].ability.name}
              </h4>
            )}
          </PokemonAbilities>

          {/* Pokémon Height, Weight, BaseExp */}
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

          <InfoButtons>
            <button onClick={() => navigate("/")}>
              <AiFillHome /> Back to Home
            </button>

            {pokemonFavorited ? (
              <button onClick={removeFavoritePokemon} className="active">
                <AiFillHeart />
                Favorited
              </button>
            ) : (
              <button onClick={addFavoritePokemon}>
                <AiFillHeart />
                Favorite Pokémon
              </button>
            )}
          </InfoButtons>
        </PokemonInfoWrapper>

        {/* Pokémon Gender and Stats */}
        <PokemonStatsWrapper>
          <div>
            <h2>POKÉMON GENDER</h2>
            <div>
              <span
                className={
                  pokemonGender.male.includes(pokemonData.name)
                    ? "active"
                    : null
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
          </div>
        </PokemonStatsWrapper>

        {/* React Tooltip - Using at Pokemon Abilities */}
        <ReactTooltip className="tooltip" />
      </Container>
    );
};

export default PokemonInfo;
