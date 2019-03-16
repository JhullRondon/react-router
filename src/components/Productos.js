import React, { Component } from 'react';
import Producto from './Producto';
import '../css/Productos.css';
import Search from './Search';

class Productos extends Component {

  state = {
    termino :''
  }

  busqueda = (termino) => {
    if (termino.length > 2) {
      this.setState({
        termino
      })
    }else {
      this.setState({
        termino: ''
      })
    }
  }
  render() {

    const productos = [...this.props.productos];
    const busqueda = this.state.termino;
    let resultado;

    if (busqueda !== ''){
      resultado = productos.filter( producto => (
        producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase()) !== -1
      ));
    } else {
      resultado = productos;
    }

    return (
      <div className='productos'>
        <h2>Nuestros Productos</h2>
        <Search busqueda={this.busqueda} />
        <ul className='lista-productos'>
          {Object.keys(resultado).map(key => (
            <Producto key={key} info={resultado[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Productos;