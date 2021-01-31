import React from 'react';
import './App.css';
import TarjetaFruta from './tarjeta-fruta'
import Contador from './contador'
import {
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Tarjeta Fruta</Link>
            </li>
            <li>
              <Link to="/contador">Contador</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        { /* Route components are rendered if the path prop matches the current URL */}
        <Route exact path="/"><TarjetaFruta name={'Dennis'} price={50.5}></TarjetaFruta></Route>
        <Route path="/contador"><Contador /></Route>
        <Route path="/products"></Route>
      </div>
    );
  }
}

export default App;
