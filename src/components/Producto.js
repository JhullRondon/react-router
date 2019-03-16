import React from 'react';
import {Link} from 'react-router-dom';

const Producto = ({info}) => {
  const {id, imagen, nombre, precio} = info;

  return (
    <li>
      <img src={`img/${imagen}.png`} alt={nombre} />
      <p>{nombre} <span> $ {precio}</span></p>
      <Link to={`/producto/${id}`}>Más informacion</Link>
    </li>
  );
};

export default Producto;