import React from "react";

//importar rutas y route
import { Routes, Route } from "react-router-dom";

//importar componentes

import Header from "./components/Header";
import Footer from "./components/Footer";

//importar paginas

import Home from "./pages/Home";
import DetallesTorneo from "./pages/DetallesTorneo";

//Definir el componente principal de la app (funcion del componente)

const App = () => {
  //devolver la estructura principal del componente
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        {/* componente Routes para manejar las rutas*/}
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<DetallesTorneo />} />{" "}
        {/**Puede ser un carrito o lo que sea */}
        {/*Ruta para la pagina DetalleTorneo usando el id como parametro de ruta para identificar un torneo especifico*/}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
