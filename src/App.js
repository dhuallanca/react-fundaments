import React from 'react';
import './App.css';
import TarjetaFruta from './tarjeta-fruta/tarjetaFruta'

class App extends React.Component {
  render() {
    return (
      <TarjetaFruta name={'Dennis'} price={50.5}/>
    )
  }
}

export default App;
