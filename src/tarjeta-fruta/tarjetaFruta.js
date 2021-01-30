import React from 'react';
import './tarjetaFruta.css';

class TarjetaFruta extends React.Component {
  constructor() {
    super();
    this.state = {
      cantidad: 0,
    }

  }
  agregar = () => {
    this.setState({ cantidad: this.state.cantidad + 1 })
  };
  restar() {
    this.setState({ cantidad: this.state.cantidad - 1 })
  };
  render() {
    const hasItems = this.state.cantidad > 0;
    const classes = `tarjetaFruta ${hasItems ? 'activa' : ''}`
    return (
      <div className={classes}>
        <h3> {this.props.name}</h3>
        <p>cantidad: {this.state.cantidad}</p>
        <button onClick={this.agregar}>Agregar</button>
        <button onClick={this.restar.bind(this)}>Quitar</button>
        <hr></hr>
        <p>Precio: ${this.props.price}</p>
      </div>
    );
  }
}

export default TarjetaFruta;