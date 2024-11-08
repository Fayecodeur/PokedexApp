import Pokemon from "../models/pokemons.ts";
import formatDate from "../helpers/formatDate.ts";
import formatType from "../helpers/formatType.ts";
import { useNavigate } from "react-router-dom";
type Props = {
  pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: Props) {
  const navigate = useNavigate();
  const goToPokemon = (id: number) => {
    navigate(`/pokemons/${id}`);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl">
      <img
        src={pokemon.picture}
        className="object-contain h-32 w-full"
        alt={pokemon.name}
      />
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 mb-2">{pokemon.name}</h5>
        <p className="text-sm text-gray-500 mb-1">
          Créé le: {formatDate(pokemon.created)}
        </p>
        <div className="flex flex-wrap gap-2">
          {pokemon.types.map((type) => (
            <small className={formatType(type)} key={type}>
              {type}
            </small>
          ))}
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-600 hover:cursor-pointer"
            onClick={() => goToPokemon(pokemon.id)}
          >
            Voir les détails
          </button>
        </div>
      </div>
    </div>
  );
}
