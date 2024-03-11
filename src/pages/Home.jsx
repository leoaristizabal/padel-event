import React from 'react';

//importar componentes 
import Banner from '../components/Banner';
import TorneoList from '../components/TorneoList'

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner/>
      <TorneoList/>
    </div>


  );
};

export default Home;
