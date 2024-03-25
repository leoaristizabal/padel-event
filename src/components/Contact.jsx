import React, { useState } from "react";
import Mapa from "./Mapa";

import { RiMailAddFill, RiPhoneFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
  // Estado para almacenar los valores de los campos del formulario y los errores de validación
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  // Funciones de validacion
  const validateNombre = (value) => {
    return value.trim() ? "" : "Nombre requerido";
  };

  const validateCorreo = (value) => {
    return /\S+@\S+\.\S+/.test(value) ? "" : "Correo electrónico inválido";
  };

  const validateTelefono = (value) => {
    return /\d{10}/.test(value) ? "" : "Teléfono inválido";
  };

  const validateMensaje = (value) => {
    return value.trim() ? "" : "Mensaje requerido";
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    const error =
      name === "nombre"
        ? validateNombre(value)
        : name === "correo"
        ? validateCorreo(value)
        : name === "telefono"
        ? validateTelefono(value)
        : validateMensaje(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui debbe ir la logica para enviar el formulario si no hay errores (emailjs????)
  };

  return (
    <>
      <div>
        <h2 className="text-4xl text-center mb-10 font-semibold">
          <span className="text-secondary">Contáctanos</span>
        </h2>
      </div>

      <div className="lg:flex items-stretch gap-x-8 px-6 lg:px-32">
        <div className="mb-6 flex flex-col lg:w-[36%]">
          <span className="text-xl text-center font-semibold leading-none mb-6">
            ¿Cómo podemos ayudarte?
          </span>

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 ">
            <input
              className={`border border-gray-300 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm ${
                errors.nombre && "border-red-500"
              }`}
              type="text"
              placeholder="Nombre*"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre}</p>
            )}
            <input
              className={`border border-gray-300 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm ${
                errors.correo && "border-red-500"
              }`}
              type="text"
              placeholder="Correo*"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
            {errors.correo && (
              <p className="text-red-500 text-sm">{errors.correo}</p>
            )}
            <input
              className={`border border-gray-300 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm ${
                errors.telefono && "border-red-500"
              }`}
              type="text"
              placeholder="Telefono*"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm">{errors.telefono}</p>
            )}
            <textarea
              className={`border border-gray-300 focus:border-green-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400 ${
                errors.mensaje && "border-red-500"
              }`}
              placeholder="Mensaje*"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            {errors.mensaje && (
              <p className="text-red-500 text-sm">{errors.mensaje}</p>
            )}
            <div className="flex gap-x-2 ">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white rounded p-4 text-sm w-full transition"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        <div className="lg:flex flex-col flex-grow">
          <Mapa />
        </div>
      </div>

      <div className="flex flex-col m-6 lg:px-32">
        <h2 className="flex gap-x-1 text-2xl text-secondary font-semibold leading-none mb-2">
          Contacto:
        </h2>
        <Link
          to="mailto:leonardo.aristizabal.m@gmail.com"
          className="flex flex-1 gap-x-1 text-gray-500"
        >
          <RiMailAddFill className="text-lg" />
          leonardo.aristizabal.m@gmail.com
        </Link>
        <a
          href="https://wa.link/5lv8kt"
          className="flex flex-1 gap-x-1 text-gray-500"
        >
          <RiPhoneFill className="text-lg" />
          +58-0424-5989755
        </a>
      </div>
    </>
  );
};

export default Contact;
