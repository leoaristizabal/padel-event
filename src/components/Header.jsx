import React from 'react';
import Menu from './Menu';

//import Link
import {Link} from 'react-router-dom';
//import Logo
import Logo from '../assets/img/PadelEvent1.svg';

const Header = () => {
  return(
    
    <header className='py-6 mb-6 border-b '>
      <div className='relative container mx-auto flex justify-between items-center'>
        {/**/}
        <Link className='w-36' to='/'>
          <img src={Logo} alt='' />
        </Link>
        
      {/*Botones de Inicio de Sesion y Sign Up */}
  
        <div className='hidden lg:flex items-center gap-8'>
          
          <Link className=' hover:text-secondary transition' to='/'> Home</Link>
          <Link className=' hover:text-secondary transition' to='{/*OJO AQUIII BACKEND*/}'> Crear Torneo</Link>
          <Link className=' hover:text-secondary transition' to='{/*OJO AQUIII BACKEND*/}'> Buscar</Link>
          <Link className=' hover:text-secondary transition' to='Contact'> Contact</Link>

          </div>

          <div className='hidden lg:flex items-center gap-6'>
          <Link className=' hover:text-secondary transition' to='{/*OJO AQUIII BACKEND*/}'> Iniciar Sesion</Link>
          <Link className=' bg-secondary text-white px-4 py-3 rounded-lg transition' to='{/*OJO AQUIII BACKEND*/}'>Registrarse</Link>
        </div>
      <Menu/>
      </div>
    </header>
    
    ); 

};

export default Header;
