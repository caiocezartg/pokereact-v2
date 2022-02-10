import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  text-align: center;

  footer {
    height: 120px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;

    p {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: #a6a6a6;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      li {
        margin: 0 0.5rem;

        a {
          color: #a6a6a6;
          font-size: 1.5rem;
          transition: 0.3s ease-in-out;

          &:hover {
            color: #ff5350;
          }
        }
      }
    }
  }
`;
