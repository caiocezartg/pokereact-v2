import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonHome from "./pages/PokemonHome";
import PokemonInfo from "./pages/PokemonInfo";
import PokemonFavorites from "./pages/PokemonFavorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonHome />} />
        <Route path="pokemon/:pokemon" element={<PokemonInfo />} />
        <Route path="pokemon/favorites" element={<PokemonFavorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
