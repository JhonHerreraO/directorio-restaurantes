import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 shadow-lg p-4 text-white">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          🍽️ Restaurantes
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>
        <ul className="hidden sm:flex gap-6 font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-white/80 transition duration-300"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/buscar"
              className="hover:text-white/80 transition duration-300"
            >
              Buscar
            </Link>
          </li>
          <li>
            <Link
              to="/nuevo"
              className="hover:text-white/80 transition duration-300"
            >
              Nuevo Restaurante
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="sm:hidden mt-4 space-y-2 text-lg font-medium bg-white text-gray-800 p-4 rounded-lg shadow-md">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/buscar" onClick={() => setIsOpen(false)}>
              Buscar
            </Link>
          </li>
          <li>
            <Link to="/nuevo" onClick={() => setIsOpen(false)}>
              Nuevo Restaurante
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;