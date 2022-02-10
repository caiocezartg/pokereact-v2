import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Container } from "./styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <footer>
        <p>{year} &copy; PokeReact (v2) - Developed by Caio Cezar.</p>
        <ul>
          <li>
            <a
              href="https://github.com/caiocezartg"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/caio-cezar-toledo-gon%C3%A7alves/"
              rel="noreferrer"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </footer>
    </Container>
  );
};

export default Footer;
