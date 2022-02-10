import styled from "styled-components";

export const LoadingScreen = styled.div`
  z-index: 999999999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 170px;
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
