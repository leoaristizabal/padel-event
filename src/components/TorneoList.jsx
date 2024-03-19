import React, {useContext} from 'react';

//import contexto
import {TorneoContext} from './TorneoContext'


import Torneo from './Torneo'

//import llink

import {Link} from 'react-router-dom';

//icons
import {ImSpinner2} from 'react-icons/im';



const TorneoList = () => {
  const { torneos, loading} = useContext(TorneoContext);
  
  //si loading es true

  if (loading) {
    return(<ImSpinner2 className='mx-auto animate-spin text-secondary text-4xl mt-[200px]'/>)
  }

  if (torneos.length < 1) {
    return <div className='text-center text-2xl text-gray-400 mt-48'>No se encontraron torneos...</div>
  }

  return <section className='mb-20'>
      <div className="container mx-auto">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {torneos.map((torneo, index) => {
            return (
              <Link to={`/categoria/${torneo.id}`} key={index}>
                <Torneo torneo = {torneo}/>
              </Link>
            );
          })}
        </div>
      </div>
    </section>;
};

export default TorneoList;
