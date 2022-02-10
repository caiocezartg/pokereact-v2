import React, { useState } from "react";
import { Container, HeaderLink, MenuMobile } from "./styles";
import logoPoke from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { CgPokemon } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <Container>
      <header>
        <img src={logoPoke} alt="Logo PokeReact" />
        <nav className={menuMobile ? "active" : null}>
          <ul>
            <li>
              <HeaderLink to="/">
                <AiOutlineHome /> Home
              </HeaderLink>
            </li>
            <li>
              <HeaderLink to="/pokemon/favorites">
                <CgPokemon /> Favorites
              </HeaderLink>
            </li>
          </ul>
        </nav>
        <MenuMobile onClick={() => setMenuMobile(!menuMobile)}>
          {menuMobile ? <GrClose /> : <GiHamburgerMenu />}
        </MenuMobile>
      </header>
    </Container>
  );
};

export default Header;
