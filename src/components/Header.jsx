import React from 'react';

//import Link
import {Link} from 'react-router-dom';
//import Logo
import Logo from '../assets/img/LogoPadelEvent.svg';

const Header = () => {
  return(
    
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/*logo*/}
        <Link className='w-36' to='/'>
          <img src={Logo} alt='' />
        </Link>
  
      {/*Botones de Inicio de Sesion y Sign Up */}
  
        <div className='flex items-center gap-6'>
          <Link className='hover:text-green-900 transition' to='{/*OJO AQUIII BACKEND*/}'> Iniciar Sesion</Link>
          <Link className='bg-green-700 text-white px-4 py-3 rounded-lg transition' to='{/*OJO AQUIII BACKEND*/}'>Registrarse</Link>
        </div>
      </div>
    </header>
    
    ); 

};

export default Header;
