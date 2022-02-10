import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  height: 100%;
  display: flex;

  header {
    flex: 0 0 calc(100% - 30px);
    margin: 4rem 15px 2rem;
    background-color: #fff;
    padding: 0 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      padding: 2.5rem;
      margin: 1rem 15px;

      nav {
        position: fixed;
        background-color: #fff;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
        border-radius: 0.5rem;
        right: -100%;
        top: 100px;
        z-index: 9999;
        transition: 0.3s ease-in-out;
        opacity: 0;
        overflow: hidden;

        ul {
          flex-direction: column;

          li {
            align-self: flex-end;
          }
        }

        &.active {
          position: absolute;
          right: 15px;
          opacity: 1;
        }
      }
    }

    img {
      width: 250px;

      @media (max-width: 768px) {
        width: 200px;
      }

      @media (max-width: 320px) {
        width: 150px;
      }
    }

    nav ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #838681;
  display: flex;
  align-items: center;
  padding: 3rem 1.5rem;
  transition: 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  svg {
    margin-right: 15px;
    font-size: 2rem;
    fill: #838681;
  }

  &:hover {
    color: #ff5350;

    svg {
      fill: #ff5350;
    }
  }

  &.active {
    color: #ff5350;
    border-bottom: 5px solid #ff5350;
    transition: initial;

    svg {
      fill: #ff5350;
    }

    @media (max-width: 768px) {
      border-bottom: none;
    }
  }
`;

export const MenuMobile = styled.span`
  font-size: 1.8rem;

  @media (min-width: 769px) {
    display: none;
  }
`;
