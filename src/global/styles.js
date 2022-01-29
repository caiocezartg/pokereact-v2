import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        width: 100%;
        background-color: #F6F8FC;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75% // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    a{
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
    img {
        max-width: 100%;
        display: block;
    }
`;
