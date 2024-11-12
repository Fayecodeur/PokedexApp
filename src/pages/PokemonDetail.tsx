import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import POKEMONS from "../models/mock-pokemon"; // Liste de Pokémon
import Pokemon from "../models/pokemons.ts";
import formatDate from "../helpers/formatDate"; // Format pour la date
import formatType from "../helpers/formatType"; // Fonction pour formater les types

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>(); // Récupère l'ID du Pokémon depuis l'URL
  const [pokemon, setPokemon] = useState<Pokemon | null>(null); // État pour stocker le Pokémon trouvé
  const navigate = useNavigate();
  useEffect(() => {
    // Recherche du Pokémon par son ID
    const foundPokemon = POKEMONS.find(
      (pokemon) => pokemon.id.toString() === id
    );

    setPokemon(foundPokemon || null); // Met à jour l'état avec le Pokémon trouvé ou null si non trouvé
  }, [id]);

  // Si aucun Pokémon n'est trouvé, afficher un message
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
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full">
          <div className="card">
            <div className="card-image flex justify-center items-center py-4">
              {/* Image du Pokémon */}
              <img
                src={pokemon.picture}
                alt={pokemon.name}
                className="w-64 h-64 object-contain rounded-lg"
              />
            </div>
            <div className="card-content p-4">
              <h2 className="text-3xl font-bold text-center py-4">
                {pokemon.name}
              </h2>
              <table className="min-w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="font-semibold py-2 px-4">Nom</td>
                    <td className="py-2 px-4 flex items-center">
                      {pokemon.name}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2 px-4">Points de vie</td>
                    <td className="py-2 px-4">{pokemon.hp}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2 px-4">Dégâts</td>
                    <td className="py-2 px-4">{pokemon.cp}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2 px-4">Types</td>
                    <td className="py-2 px-4">
                      {pokemon.types.map((type) => (
                        <span key={type} className={`${formatType(type)} mr-2`}>
                          {type}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2 px-4">
                      Date de création
                    </td>
                    <td className="py-2 px-4">{formatDate(pokemon.created)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-action p-4">
              <button
                onClick={() => navigate("/")}
                className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
              >
                Retour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
