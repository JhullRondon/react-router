import React from 'react';
import '../css/Navegacion.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navegacion'>
      <NavLink to={'/nosotros'} activeClassName='activo'>Nosotros</NavLink>
      <NavLink to={'/productos'} activeClassName='activo'>Productos</NavLink>
      <NavLink to={'/contacto'} activeClassName='activo'>Contacto</NavLink>
    </nav>
  );
};

export default Nav;