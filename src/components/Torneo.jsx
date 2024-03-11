import React from "react";

//iconos
import { BiAlarm, BiCalendar, BiMoney } from "react-icons/bi";

const Torneo = ({ torneo }) => {
  const { image, categoria, club, fecha, inscipcion, premio, name, hora } =
    torneo;
  return (
    <div className="bg-wthie shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-xs">
        <div className="bg-green-500 rounded-full text-white px-3 ">
          {categoria}
        </div>
        <div className="bg-orange-500 rounded-full px-3 text-white">{club}</div>
        <div className="bg-blue-500 rounded-full px-3 text-white">
          {inscipcion}
        </div>
      </div>

      <div className="font-semibold"> {name}</div>

      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiCalendar />
          </div>
          <div className="text-xs">{fecha}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiAlarm />
          </div>
          <div className="text-xs">{hora}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiMoney />
          </div>
          <div className="text-xs">{premio}</div>
        </div>
      </div>
    </div>
  );
};

export default Torneo;
