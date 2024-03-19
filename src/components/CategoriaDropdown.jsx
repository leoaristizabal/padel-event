// Importaciones necesarias
import React, { useState, useEffect, useContext } from "react";
import { RiMedalLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { TorneoContext } from "./TorneoContext";

const CategoriaDropdown = () => {
  // Extraer valores del contexto
  const { categoria, setCategoria, categorias } = useContext(TorneoContext);
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
        <RiMedalLine className="dropdown-icon-primary text-secondary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{categoria}</div>
          <div className="text-[13px]">Seleccionar Categoria</div>
        </div>
        {/* Icono de flecha que indica si el menú está abierto o cerrado */}
        {estaAbierto ? (
          <RiArrowUpSLine className="dropdown-icon-secondary text-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary text-secondary" />
        )}
      </Menu.Button>

      {/* Lista de opciones del menú, define el area donde apareceran */}
      <Menu.Items className="dropdown-menu">
        {/* Mapear sobre las categorias que existen en los objetos del torneo y mostrar cada opción */}
        {categorias.map((categoria, index) => {
          return (
            <Menu.Item //representa cada elemento de la lista del menu desplegable
              onClick={() => setCategoria(categoria)} //evento y funcion manejador de eventos
              className="cursor-pointer hover:text-green-700 transition"
              as="li"
              key={index}
            >
              {categoria}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CategoriaDropdown;
