import React from 'react';
import './eventos.css';

class Hijo extends React.Component {

  onClickHandler = () => {
    this.props.onSaludar('Dennis');
  }
  render(props) {
    return (
      <div className="box blue">
        <h3>Hijo</h3>
        <button onClick={this.onClickHandler}>
        Enviar saludo
        </button>
      </div>
    )
  }
}

class Eventos extends React.Component {

  state = {
    saludo : ''
  }
  onSaludar = (saludoDelHijo) => {
    this.setState(() => ({
      saludo: saludoDelHijo
    }))
  }
  render() {
    return (
      <div className='box red'>
        <h2>Padre</h2>
        <Hijo onSaludar={this.onSaludar}></Hijo>
        <hr></hr>
        <h3>{ this.state.saludo }</h3>
      </div>
    );
  }
}

export default Eventos;