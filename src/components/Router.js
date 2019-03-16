import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nosotros from './Nosotros';
import Err from './Err';
import infoProductos from '../datos/datos.json';
import Productos from './Productos';
import Header from './Header';
import SingleProducto from './SingleProducto';
import Nav from './Nav';
import Contacto from './Contacto';

class Router extends Component {

  state = {
    productos: []
  }

  componentWillMount() {
    this.setState({
      productos: infoProductos
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Nav />      
        <Switch>
          <Route exact path='/' render={()=> (
            <Productos productos={this.state.productos} />
          )} />
          <Route exact path='/productos' render={()=> (
            <Productos productos={this.state.productos} />
          )} />
          <Route exact path='/nosotros' component={Nosotros} />
          <Route exact path='/contacto' component={Contacto} />
          <Route exact path='/producto/:id' render={(props) => {
            let productoId = props.location.pathname.replace('/producto/', '');
            return (
              <SingleProducto producto={this.state.productos[productoId]} />
            )
          }} />
          <Route component={Err} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default Router;