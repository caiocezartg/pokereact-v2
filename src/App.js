import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonHome from "./pages/PokemonHome";
import PokemonInfo from "./pages/PokemonInfo";
import PokemonFavorites from "./pages/PokemonFavorites";
import { GlobalStyle } from "./global/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonHome />} />
          <Route path="pokemon/:pokemon" element={<PokemonInfo />} />
          <Route path="pokemon/favorites" element={<PokemonFavorites />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
