// Importaciones necesarias
import React, { useState, useEffect, useContext } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { TorneoContext } from "./TorneoContext";

const ClubDropdown = () => {
  // Extraer valores del contexto
  const { club, setClub, clubes } = useContext(TorneoContext);
  // Estado para controlar si el menú está abierto o cerrado
  const [estaAbierto, setEstaAbierto] = useState(false);

  return (
    // Componente Menu de Headless UI para el menú desplegable
    <Menu as="div" className="dropdown relative">
      {/* Botón del menú */}
      <Menu.Button
        onClick={() => setEstaAbierto(!estaAbierto)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{club}</div>
          <div className="text-[13px]">Seleccionar Club</div>
        </div>
        {/* Icono de flecha que indica si el menú está abierto o cerrado */}
        {estaAbierto ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      {/* Lista de opciones del menú, define el area donde apareceran */}
      <Menu.Items className="dropdown-menu">
        {/* Mapear sobre los clubes que existen en los objetos del torneo y mostrar cada opción */}
        {clubes.map((club, index) => {
          return (
            <Menu.Item //representa cada elemento de la lista del menu desplegable
              onClick={() => setClub(club)}
              className="cursor-pointer hover:text-green-700 transition"
              as="li"
              key={index}
            >
              {club}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default ClubDropdown;
