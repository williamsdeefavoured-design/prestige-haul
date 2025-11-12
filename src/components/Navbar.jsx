import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold">
            Prestige<span className="text-green-700">Haul</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/rides" className="hover:text-green-700">Our Rides</Link>
          <Link to="/order" className="hover:text-green-700">Book Us</Link>
          <Link to="/about" className="hover:text-green-700">About</Link>

          <div className="flex gap-5">
            <Link to="/signup">
              <button className="hover:bg-green-700 hover:text-white bg-gray-400 px-4 py-2 rounded-xl transition-all duration-300">
                Register for free
              </button>
            </Link>
            <Link to="/signin">
              <button className="bg-green-700 text-white px-5 py-2 rounded-xl hover:bg-transparent hover:text-gray-900 hover:outline transition-all duration-300">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-center">
          <Link to="/rides" className="block hover:text-green-700" onClick={() => setMenuOpen(false)}>Our Rides</Link>
          <Link to="/order" className="block hover:text-green-700" onClick={() => setMenuOpen(false)}>Book Us</Link>
          <Link to="/about" className="block hover:text-green-700" onClick={() => setMenuOpen(false)}>About</Link>
          <div className="flex flex-col gap-3 mt-3">
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <button className="w-full hover:bg-green-700 hover:text-white bg-gray-400 px-4 py-2 rounded-xl transition-all duration-300">
                Register for free
              </button>
            </Link>
            <Link to="/signin" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-green-700 text-white px-5 py-2 rounded-xl hover:bg-transparent hover:text-gray-900 hover:outline transition-all duration-300">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
