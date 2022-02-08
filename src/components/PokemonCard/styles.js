import styled from "styled-components";
import pokeballIcon from "../../assets/pokeball.png";
import { darken } from "polished";

const typeColors = {
  bug: "#3B9950",
  dark: "#5A5979",
  dragon: "#61CAD9",
  electric: "#FDD853",
  fairy: "#EA1369",
  fighting: "#EF6138",
  fire: "#FD4C5A",
  flying: "#93B2C7",
  ghost: "#906790",
  grass: "#27CB4F",
  ground: "#6E491F",
  ice: "#D8F0FA",
  normal: "#CA98A7",
  poison: "#9B69D9",
  psychic: "#F81C91",
  rock: "#B9A157",
  steel: "#42BD94",
  water: "#86A8FC",
};

export const Pokemon = styled.div`
  padding: 1.5rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  text-align: center;

  background-color: #fff;
  background-image: url(${pokeballIcon});
  background-size: 75%;
  background-position: -50% -50%;
  background-repeat: no-repeat;

  border-radius: 1rem;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 10rem;
    margin: -25% auto 0;
  }

  span {
    color: #8e9baa;
    font-weight: 500;
  }

  h2 {
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    display: inline-block;
    text-transform: uppercase;
    margin: 0 0.5rem;
    padding: 0.275rem 0.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }

  .firstType {
    color: ${(props) => darken(0.3, typeColors[props.typeOne])};
    background-color: ${(props) => typeColors[props.typeOne]};
  }

  .secondType {
    color: ${(props) =>
      props.typeTwo && darken(0.3, typeColors[props.typeTwo])};
    background-color: ${(props) => typeColors[props.typeTwo]};
  }
`;
