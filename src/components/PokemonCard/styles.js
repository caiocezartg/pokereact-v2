import styled from "styled-components";
import pokeballIcon from "../../assets/pokeball.png";

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
  rock: "#8B3E21",
  steel: "#42BD94",
  water: "#86A8FC",
};

export const Pokemon = styled.li`
  flex: 0 0 calc(33.333% - 30px);
  margin: 0 15px 90px;
  padding: 1.5rem;
  box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.1);
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
    transform: scale(1.08);
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
    color: #111;
    margin: 0 0.5rem;
    padding: 0.275rem 0.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }

  .firstType {
    background-color: ${(props) => typeColors[props.typeOne]};
  }

  .secondType {
    background-color: ${(props) => typeColors[props.typeTwo]};
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex: 0 0 calc(50% - 30px);
  }

  @media (max-width: 425px) {
    flex: 0 0 calc(100% - 30px);
  }
`;
