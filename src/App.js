import React from 'react';
import './App.css';
import TarjetaFruta from './tarjeta-fruta'
import Contador from './contador'
import Gato from './gato'
import Eventos from './evento-padre-hijo'
import {
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  
  render() {
    const OtrosDatos = {
      raza: 'Tropical',
      peso: '10kg'
    }
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Tarjeta Fruta</Link>
            </li>
            <li>
              <Link to="/contador">Manejar Estados</Link>
            </li>
            <li>
              <Link to="/props">Uso de Props</Link>
            </li>
             <li>
              <Link to="/eventos">Uso de eventos entre componentes</Link>
            </li>
          </ul>
        </nav>

        { /* Route components are rendered if the path prop matches the current URL */}
        <Route exact path="/"><TarjetaFruta name={'Dennis'} price={50.5}></TarjetaFruta></Route>
        <Route path="/contador"><Contador /></Route>
        <Route path="/props"><Gato name={'Garfield'} edad='2 años' {...OtrosDatos}></Gato></Route>
        <Route path="/eventos"><Eventos /></Route>
      </div>
    );
  }
}

export default App;
