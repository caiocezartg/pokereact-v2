import styled from "styled-components";
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

export const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  h3 {
    font-weight: 500;
  }

  h4 {
    font-weight: 500;
    background-color: #f5f5f5;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
  }
`;

export const PokemonInfoWrapper = styled.div`
  flex: 0 0 calc(75% - 30px);
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  margin: 10rem 15px 0;
  padding: 0 2rem 3rem;
  text-align: center;

  @media (max-width: 425px) {
    flex: 0 0 calc(100% - 30px);
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  img {
    width: 350px;
    margin: -20% auto 0;
  }

  span {
    color: #8e9baa;
    font-weight: 600;
    font-size: 1.125rem;
  }

  h1 {
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-size: 2.5rem;
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
    color: ${(props) =>
      props.typeOne && darken(0.3, typeColors[props.typeOne])};
    background-color: ${(props) => typeColors[props.typeOne]};
  }

  .secondType {
    color: ${(props) =>
      props.typeTwo && darken(0.3, typeColors[props.typeTwo])};
    background-color: ${(props) => typeColors[props.typeTwo]};
  }
`;

export const PokemonAbilities = styled.div`
  h4 {
    display: inline-block;
    margin: 0 0.5rem;
  }
`;

export const PokemonBasicInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    flex: 0 0 calc(33% - 30px);
    margin: 0 15px;

    @media (max-width: 425px) {
      flex: 0 0 100%;
      margin: 0;
    }
  }
`;

export const PokemonStatsWrapper = styled.div`
  flex: 0 0 calc(25% - 30px);
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  margin: 10rem 15px 0;
  padding: 0 2rem 3rem;
  text-align: center;

  @media (max-width: 425px) {
    flex: 0 0 calc(100% - 30px);
    margin-top: 0;
    margin-bottom: 5rem;
  }

  span {
    padding: 0.5rem 0.5rem 0.2rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    margin: 0 0.5rem;
    opacity: 0.5;

    &:nth-child(1) {
      color: #85ddff;
      border: solid 1px #85ddff;

      &.active {
        opacity: 1;
        background-color: #85ddff;
        color: ${darken(0.3, "#85ddff")};
        border: none;
      }
    }

    &:nth-child(2) {
      color: #d1435b;
      border: solid 1px #d1435b;

      &.active {
        opacity: 1;
        background-color: #d1435b;
        color: ${darken(0.3, "#d1435b")};
        border: none;
      }
    }
  }
`;

export const PokemonListStats = styled.ul`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    border-radius: 1rem;
    margin-bottom: 2rem;
    padding-right: 25px;
    width: 100%;
    font-weight: 500;

    span {
      flex: 0 0 30%;
      border-radius: 1rem 0 0 1rem;
      border: none !important;
      color: #fff !important;
      font-size: 1.125rem;
      padding: 0.5rem;
      background-color: red;
      margin: 0;
      opacity: 1;
    }

    &:nth-child(1) span {
      background-color: #df2140;
      color: ${darken(0.3, "#DF2140")} !important;
    }

    &:nth-child(2) span {
      background-color: #fd9955;
      color: ${darken(0.3, "#fd9955")} !important;
    }

    &:nth-child(3) span {
      background-color: #ffdc45;
      color: ${darken(0.3, "#ffdc45")} !important;
    }

    &:nth-child(4) span {
      background-color: #00a9eb;
      color: ${darken(0.3, "#00a9eb")} !important;
    }

    &:nth-child(5) span {
      background-color: #3dc200;
      color: ${darken(0.3, "#3dc200")} !important;
    }

    &:nth-child(6) span {
      background-color: #e83f5f;
      color: ${darken(0.3, "#e83f5f")} !important;
    }

    &:nth-child(7) {
      background-color: #89aaff;
      color: #fff;

      span {
        background-color: #7696da;
        color: ${darken(0.3, "#7696da")} !important;
      }
    }
  }
`;
