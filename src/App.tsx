import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import PokemonsList from "./pages/PokemonsList.tsx";
import PokemonDetail from "./pages/PokemonDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemons" element={<PokemonsList />} />
        <Route path="/pokemons/:id" element={<PokemonDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
