import React, { Component } from 'react';
import '../css/Nosotros.css';

class Nosotros extends Component {
  render() {
    return (
      <div className='contenedor-nosotros'>
        <div className='imagen'>
          <img src='/img/camisa_1.png' alt='imagen nosotros' />
        </div>

        <div>
          <h2>Sobre Nosotros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend, nisl et dapibus porttitor, eros dolor ornare nisi, sed malesuada dolor ex vitae nisi. Praesent euismod quam eu augue finibus dapibus ut fermentum dolor. Ut congue, turpis in pretium viverra, orci lacus maximus diam, a egestas turpis est sit amet ante. Sed pulvinar nibh nec risus auctor, sit amet dapibus leo finibus. Mauris in neque erat. Donec rhoncus ipsum non commodo dictum. Mauris eget consequat ex. Pellentesque efficitur ipsum ut dapibus fermentum. In posuere neque vitae lectus placerat, id porttitor justo mollis. Nam quis malesuada diam. Nulla nec rutrum tellus. Aenean auctor eget nulla quis congue. Sed sodales est odio, ac auctor est tincidunt eu. Maecenas id interdum sapien. Nam pretium massa eget elit dapibus, ac ultrices est commodo.</p>
        </div>
      </div>
    );
  }
}

export default Nosotros;