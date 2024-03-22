import React from "react";
import Mapa from "./Mapa";

const Contact = () => {
  return (
    <>
      <div>
        <h2 className="text-4xl text-center font-semibold leading-none mb-6">
          <span className="text-secondary">Contáctanos</span>
        </h2>
      </div>

      <div className="lg:flex items-stretch gap-x-8 p-8">

      <div className="mb-8 flex flex-col flex-grow">
          <span className="text-xl text-center font-semibold leading-none mb-6">
            ¿Cómo podemos ayudarte?
          </span>

          <form className="flex flex-grow flex-col gap-y-4 ">
            <input
              className="border border-gray-300 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm"
              type="text"
              placeholder="Nombre*"
            />
            <input
              className="border border-gray-300 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm"
              type="text"
              placeholder="Correo*"
            />
            <input
              className="border border-gray-300 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm"
              type="text"
              placeholder="Telefono*"
            />

            <textarea
              className="border border-gray-300 focus:border-green-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
              placeholder="Mensaje*"
            ></textarea>

            <div className="flex gap-x-2 ">
              <button className="bg-green-700 hover:bg-green-800 text-white rounded p-4 text-sm w-full transition">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        <div className="lg:flex flex-col flex-grow ">
          <Mapa  />
        </div>

        
      </div>

      <div className="flex flex-col flex-grow border-green-500 rounded">
        <span>Correo: leonardo.aristizabal.m@gmail.com</span>
        <span>Tlf: +58-0424-5989755</span>
      </div>
    </>
  );
};

export default Contact;
