import React from "react";

//importar imagen del banner desde el directorio de assets

import Image from "../assets/img/Categorias/suma8/sum82.png";

//importar el componente de busqueda (search)
import Search from "./Search";

const Banner = () => {
  return (
    // Contenedor de la sección del banner con clases de Tailwind
    <section className="h-full max-h-[600px] mb-8 xl:mb-24 lg:mr-8 xl:mr-16">
      {/* Contenedor principal con flexbox para organizar los elementos */}
      <div className="flex flex-col lg:flex-row">
        {/* Sección de texto en el lado izquierdo */}
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          {/* Título del banner con estilos de texto y color específicos */}
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-green-700">Tu Torneo Personalizado</span> con
            Nosotros!
          </h1>
          {/* Párrafo descriptivo con ancho máximo y margen inferior */}
          <p className="max-w-[480px] mb-8">
            Somos una plataforma completa para encontrar, organizar y jugar
            torneos de padel cortos en Caracas. Desde inscripción hasta
            premiación, simplificando la experiencia para organizadores y
            jugadores.
          </p>
        </div>

        {/* Sección de la imagen en el lado derecho (visible en pantallas grandes) */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img className="max-h-[350px] lg:max-h-[470px] h-auto"src={Image} alt="Banner" />
        </div>
      </div>

      {/* Componente de búsqueda al final de la sección del banner */}
      <Search />
    </section>
  );
};

export default Banner;
