import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import POKEMONS from "../models/mock-pokemon"; // Liste de Pokémon
import Pokemon from "../models/pokemons.ts";
import PokemonForm from "../components/PokemonForm.tsx";

const PokemonEdit = () => {
  const { id } = useParams<{ id: string }>(); // Récupère l'ID du Pokémon depuis l'URL
  const [pokemon, setPokemon] = useState<Pokemon | null>(null); // État pour stocker le Pokémon trouvé
  const navigate = useNavigate();

  useEffect(() => {
    // Recherche du Pokémon par son ID
    const foundPokemon = POKEMONS.find(
      (pokemon) => pokemon.id.toString() === id
    );

    if (!foundPokemon) {
      navigate("/404"); // Redirige vers une page 404 si le Pokémon n'est pas trouvé
    } else {
      setPokemon(foundPokemon); // Met à jour l'état avec le Pokémon trouvé
    }
  }, [id, navigate]);

  // Si aucun Pokémon n'est trouvé, afficher un message (cette partie est facultative avec la redirection)
  if (!pokemon) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h4 className="text-center text-xl font-medium text-red-600">
          Pokémon non trouvé
        </h4>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center my-4">
        Éditer {pokemon.name}
      </h2>
      <PokemonForm pokemon={pokemon} />
    </div>
  );
};

export default PokemonEdit;
