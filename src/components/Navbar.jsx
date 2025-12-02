import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 bg-gray-900 text-white flex justify-evenly items-center gap-40">
      <div>
        <h1 className="font-bold italic text-4xl hover:text-red-200 cursor-pointer">
          <Link to="/">Logo</Link>
        </h1>
      </div>
      <div className="flex gap-28 font-semibold">
        <Link to="/" className="hover:underline hover:text-red-200">
          Home
        </Link>
        <Link to="/about" className="hover:underline hover:text-red-200">
          About
        </Link>
        <Link to="/contact" className="hover:underline hover:text-red-200">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
