import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center">
        <Link
          to="/"
          className="text-white text-2xl font-semibold hover:text-gray-300"
        >
          Pokedex
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
