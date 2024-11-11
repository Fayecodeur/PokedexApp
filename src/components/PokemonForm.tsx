import Pokemon from "../models/pokemons.ts";
import formatType from "../helpers/formatType.ts";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonForm({ pokemon }: Props) {
  const types: string[] = [
    "Plante",
    "Feu",
    "Eau",
    "Insecte",
    "Normal",
    "Electrik",
    "Poison",
    "Fée",
    "Vol",
    "Combat",
    "Psy",
  ];

  return (
    <form className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg overflow-auto">
      {/* Image du Pokémon */}
      <div className="flex justify-center mb-6">
        <img
          src={pokemon.picture}
          alt={pokemon.name}
          className="w-48 h-48 object-contain rounded-full shadow-lg"
        />
      </div>

      <div className="space-y-6">
        {/* Nom du Pokémon */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            defaultValue={pokemon.name}
          />
        </div>

        {/* Points de vie */}
        <div>
          <label
            htmlFor="hp"
            className="block text-lg font-medium text-gray-700"
          >
            Points de vie
          </label>
          <input
            id="hp"
            type="number"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            defaultValue={pokemon.hp}
          />
        </div>

        {/* Dégâts */}
        <div>
          <label
            htmlFor="cp"
            className="block text-lg font-medium text-gray-700"
          >
            Dégâts
          </label>
          <input
            id="cp"
            type="number"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            defaultValue={pokemon.cp}
          />
        </div>

        {/* Types de Pokémon */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Types
          </label>
          <div className="flex flex-wrap gap-6 mt-2">
            {types.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  id={type}
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={type} className="ml-3 text-base text-gray-700">
                  <p className={formatType(type)}>{type}</p>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bouton de validation */}
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Modifier
        </button>
      </div>
    </form>
  );
}
