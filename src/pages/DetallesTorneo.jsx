import React from "react";

//importr Data
import { torneosData } from "../data";

//import use params para manejar las rutas de la pagina para cada torneo

import { useParams } from "react-router-dom";

//iconos
import { BiAlarm, BiCalendar, BiMap, BiTennisBall } from "react-icons/bi";

//importar Link
import { Link } from "react-router-dom";

const DetallesTorneo = () => {
  //obtener el id del torneo
  const { id } = useParams();

  //obtener el torneo por el id
  const torneo = torneosData.find((torneo) => {
    return torneo.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="">
            <h2 className="text-2xl font-semibold mb-2">{torneo.name}</h2>
            <div className="flex">
              <BiMap className="text-2xl text-gray-700" />
              <h3 className="text-lg mb-4 ">{torneo.club}</h3>
            </div>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {torneo.categoria}
            </div>
            <div className="bg-blue-500 px-3 text-white rounded-full">
              {torneo.inscipcion}
            </div>
          </div>
          <div className="text-2xl font-semibold text-green-700 mb-2">
            Premio: {torneo.premio}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-6">
              <img src={torneo.imageLg} alt="Banner del Torneo" />
            </div>
            <div className=" flex gap-x-4 text-green-700 mb-4">
              <div className="flex gap-x-2 items-center">
                <BiCalendar className="text-xl" />
                <div>{torneo.fecha}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiAlarm className="text-xl" />
                <div>{torneo.hora}</div>
              </div>
              <div className="flex gap-x-1 items-center">
                <BiTennisBall className="text-xl" />
                <div>{torneo.duplas} Duplas</div>
              </div>
            </div>
            <div>{torneo.description}</div>

            <div className="mt-8">
              <button className="bg-green-700 hover:bg-green-800 text-white rounded p-4 text-sm w-full transition">
                Inscribirme
              </button>              
            </div>
          </div>

          {/*Organizador Datos */}
          <div className=" flex-1 bg-white w-full mb-8 border border-x-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={torneo.organizador.image} alt="" />
              </div>
              <div className="font-bold text-lg">
                <div>{torneo.organizador.name}</div>
                <Link to="" className="text-green-700 text-sm">
                  {" "}
                  Ver lista de torneos
                </Link>
              </div>
            </div>

            {/* FORM */}
            <form className="flex flex-col gap-y-3">
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
                <button className="border border-green-700 text-green-700 hover:border-green-500 hover:text-green-500 rounded p-4 text-sm w-full transition">
                  Llamar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetallesTorneo;
