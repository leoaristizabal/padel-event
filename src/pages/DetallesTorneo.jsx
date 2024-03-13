import React from 'react';

//importr Data
import { torneosData } from '../data';

//import use params para manejar las rutas de la pagina para cada torneo

import { useParams } from 'react-router-dom';

//iconos
import { BiAlarm, BiCalendar, BiMap,  BiTennisBall } from "react-icons/bi";

//importar Link
import {Link} from 'react-router-dom';


const DetallesTorneo = () => {
  //obtener el id del torneo
  const {id} = useParams();
  
  //obtener el torneo por el id
  const torneo = torneosData.find(torneo => {
    return torneo.id === parseInt(id);

  });

  return <section>
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{torneo.name}</h2>
          <div className='flex'>
          <BiMap className='text-xl text-gray-500'/>
          <h3 className='text-lg mb-4 '>{torneo.club}</h3>
          </div>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 text-white px-3 rounded-full'>{torneo.categoria}</div>
          <div className='bg-blue-500 px-3 text-white rounded-full'>{torneo.inscipcion}</div>
        </div>
        <div className="text-3xl font-semibold text-green-700">Premio: {torneo.premio}</div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={torneo.imageLg} alt="" />
          </div>
          <div className=' flex gap-x-6 text-green-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
            <BiCalendar className='text-2xl'/>
            <div>{torneo.fecha}</div>
            </div>
            <div className='flex gap-x-2 items-center'> 
            <BiAlarm className='text-2xl'/>
            <div>{torneo.hora}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
            <BiTennisBall className='text-2xl'/>
            <div>{torneo.duplas} Duplas</div>
            </div>
          </div>
          <div >{torneo.description}</div>
        </div>
        <div className=' flex-1 bg-white w-full mb-8 border border-x-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={torneo.organizador.image} alt="" />
            </div>
            <div className='font-bold text-lg'>
              <div>{torneo.organizador.name}</div>
              <Link to='' className='text-green-700 text-sm'> Ver torneos del organizador</Link>
            </div>
          </div>

          {/* FORM */}
        </div>
      </div>
    </div>
  </section>;
};

export default DetallesTorneo;

