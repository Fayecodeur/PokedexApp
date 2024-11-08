import Pokemon from "../models/pokemons.ts";
import POKEMONS from "../models/mock-pokemon.ts";
import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard.tsx";

export default function PokemonsList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
}
