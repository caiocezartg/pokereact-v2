import styled from "styled-components";

export const InputSearch = styled.form`
  position: relative;
  display: flex;
  margin: 1.875rem 0;

  @media (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }

  input {
    flex: 0 0 calc(100% - 30px);
    margin: 0 15px;
    border: none;
    outline: none;
    background-color: #fff;
    padding: 2.5rem 5.5rem 2.5rem 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);

    &[placeholder] {
      font-size: 1.125rem;
    }

    @media (max-width: 425px) {
      padding-right: 2rem;
    }
  }

  button {
    background-color: #ff5350;
    box-shadow: 0px 3px 10px 3px rgba(255, 83, 80, 0.5);
    border: none;
    outline: none;
    width: 60px;
    height: 60px;

    border-radius: 0.5rem;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);

    svg {
      font-size: 50px;
      fill: #fff;
    }

    @media (max-width: 425px) {
      position: initial;
      top: 0;
      right: 0;
      flex: 0 0 calc(100% - 30px);
      width: calc(100% - 30px);
      margin: 3.75rem 1rem 0;
    }
  }
`;
