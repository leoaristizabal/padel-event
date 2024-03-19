// Menu.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden absolute top-4 right-0 transition">

    <button
        className=" text-green-500
         hover:text-green-700
          focus:text-green-700 
          focus:outline-none
          transition absolute right-4"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
            />
          )}
        </svg>
      </button>      


      {isOpen && (
        <div className="flex-row border rounded bg-green-500">

          <Link
            className="block px-4 py-2 text-white hover:bg-green-500"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block px-4 py-2 text-white hover:bg-green-500"
            to="{/*OJO AQUIII BACKEND*/}"
          >
            About
          </Link>
          <Link
            className="block px-4 py-2 text-white hover:bg-green-500"
            to="{/*OJO AQUIII BACKEND*/}"
          >
            Contact
          </Link>

          <Link
            className="block px-4 py-2 text-white hover:bg-green-500"
            to="{/*OJO AQUIII BACKEND*/}"
          >
            Iniciar Sesion
          </Link>
          <Link
            className="block px-4 py-2 text-white hover:bg-green-500"
            to="{/*OJO AQUIII BACKEND*/}"
          >
            Registrarse
          </Link>
        </div>
      )}

      
    </div>
  );
};

export default Menu;
