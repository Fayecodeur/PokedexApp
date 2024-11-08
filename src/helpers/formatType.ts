const formatType = (type: string): string => {
  let color: string;

  switch (type) {
    case "Feu":
      color = "bg-red-500"; // Rouge pour Feu
      break;
    case "Eau":
      color = "bg-blue-500"; // Bleu pour Eau
      break;
    case "Plante":
      color = "bg-green-500"; // Vert pour Plante
      break;
    case "Insecte":
      color = "bg-yellow-500"; // Jaune pour Insecte
      break;
    case "Normal":
      color = "bg-gray-600"; // Gris foncé pour Normal (meilleure visibilité du texte)
      break;
    case "Vol":
      color = "bg-blue-300"; // Bleu clair pour Vol
      break;
    case "Poison":
      color = "bg-purple-500"; // Violet pour Poison
      break;
    case "Fée":
      color = "bg-pink-300"; // Rose pour Fée
      break;
    case "Psy":
      color = "bg-purple-700"; // Violet foncé pour Psy
      break;
    case "Electrik":
      color = "bg-yellow-400"; // Jaune pour Electrik
      break;
    case "Combat":
      color = "bg-orange-500"; // Orange pour Combat
      break;
    default:
      color = "bg-gray-400"; // Gris  pour les types inconnus
      break;
  }

  return `text-white ${color} px-2 py-1 rounded-full`; // Style des badges
};

export default formatType;
