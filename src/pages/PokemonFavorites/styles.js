import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;

  > p {
    text-align: center;
    font-size: 2rem;
  }
`;

export const PokemonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem 0 2rem;

  li {
    flex: 0 0 calc(33.333% - 30px);
    margin: 0 15px 90px;

    @media (min-width: 426px) and (max-width: 768px) {
      flex: 0 0 calc(50% - 30px);
    }

    @media (max-width: 425px) {
      flex: 0 0 calc(100% - 30px);
    }
  }
`;
