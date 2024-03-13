import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className='bg-black py-8 text-center text-white'>
    <div className='container mx-auto'>
      Copyright &copy; 2024 <Link to="https://github.com/leoaristizabal">Leoaristizabal</Link>. All rights reserved. 
    </div>
  </footer>;
};

export default Footer;
