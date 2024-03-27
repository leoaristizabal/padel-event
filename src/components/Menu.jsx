import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden absolute top-4 right-0 transition">

      <motion.button
        className="text-green-500 hover:text-green-700 focus:text-green-700 focus:outline-none transition absolute right-4"
        onClick={toggleMenu}
        initial={false}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.1 }}
          />
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 6h18v2H3V6zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            style={{ display: isOpen ? "none" : "block" }}
          />
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.646 4.354a.5.5 0 01.708 0l4.95 4.95 4.95-4.95a.5.5 0 11.708.708l-5.25 5.25a.5.5 0 01-.708 0l-5.25-5.25a.5.5 0 01.708-.708l4.95 4.95-4.95-4.95a.5.5 0 010-.708z"
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            style={{ display: isOpen ? "block" : "none", scale: 0.5 }}
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex justify-end bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="flex flex-col items-end"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <Link
                className="block px-4 py-2 text-white hover:bg-green-500"
                to="/"
              >
                Home
              </Link>
              <Link
                className="block px-4 py-2 text-white hover:bg-green-500"
                to="/about"
              >
                About
              </Link>
              <Link
                className="block px-4 py-2 text-white hover:bg-green-500"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="block px-4 py-2 text-white hover:bg-green-500"
                to="/login"
              >
                Iniciar Sesion
              </Link>
              <Link
                className="block px-4 py-2 text-white hover:bg-green-500"
                to="/register"
              >
                Registrarse
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
