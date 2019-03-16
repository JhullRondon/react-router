import React, { Component } from 'react';
import '../css/Buscador.css';

class Search extends Component {

  leerDatos = e => {
    const termino = e.target.value;

    this.props.busqueda(termino);
  }
  render() {
    return (
      <form className='buscador'>
        <input type='text' placeholder='buscar' onChange={this.leerDatos} />
      </form>
    );
  }
}

export default Search;