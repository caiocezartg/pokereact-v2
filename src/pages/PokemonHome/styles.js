import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  height: 100%;
`;

export const PokemonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem 0 2rem;
`;

export const ChangePageButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -60px;

  button {
    border: none;
    background-color: #ff5350;
    box-shadow: 0px 3px 10px 3px rgba(255, 83, 80, 0.5);
    color: #fff;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #a3211f;
      box-shadow: 0px 5px 5px 0px rgba(163, 33, 31, 0.5);
    }

    svg {
      margin: 0 5px;
    }
  }
`;
