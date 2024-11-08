import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col text-center py-8">
      <img
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
        alt="Page non trouvée"
        className="w-64 h-64"
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">
        Oops! Cette page n'existe pas !
      </h1>
      <p className="text-gray-600 mb-6">
        Il semble que vous vous soyez perdu. Mais pas d'inquiétude, vous pouvez
        revenir à l'accueil !
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Retourner à l'accueil
      </Link>
    </div>
  );
}
