import React from 'react';
import './App.css';
import TarjetaFruta from './tarjeta-fruta'
import Contador from './contador'
import Gato from './gato'
import Eventos from './evento-padre-hijo'
import InputControlado from './input-controlado'
import { ManejoHttp, BuscadorHttp, ManejoAxios } from './peticion-http';
import Header from './comunicacion-instancia';
import ContadorUseState from './hooks/use-state/contador'
import ContadorUseEffect from './hooks/use-effect/ContadorUseEffect'
import ContadorUseContext from './hooks/use-context/contador-useContext';
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
            <li>
              <Link to="/inputsControlados">Uso de inputs controlados</Link>
            </li>
            <li>
              <Link to="/manejoHtpp">Peticiones http</Link>
              <br></br>
              <Link to="/buscadorHtpp">Buscador http</Link>
              <br></br>
              <Link to="/buscadorAxiosHtpp">Buscador con Axios</Link>
            </li>
            <li>
              <Link to="/comunicacionInstancia">
                Comunicación entre componentes con instancia
              </Link>
            </li>
            <li>
              hooks
              <ol>
                <Link to="/useState">Use State</Link>
              </ol>
              <ol>
                <Link to="/useEffect">Use Effect (componentDidMount)</Link>
              </ol>
              <ol>
                <Link to="/useContext">
                  Use Context (pass data between components)
                </Link>
              </ol>
            </li>
          </ul>
        </nav>

        {/* Route components are rendered if the path prop matches the current URL */}
        <Route exact path="/">
          <TarjetaFruta name={"Dennis"} price={50.5}></TarjetaFruta>
        </Route>
        <Route path="/contador">
          <Contador />
        </Route>
        <Route path="/props">
          <Gato name={"Garfield"} edad="2 años" {...OtrosDatos}></Gato>
        </Route>
        <Route path="/eventos">
          <Eventos />
        </Route>
        <Route path="/inputsControlados">
          <InputControlado />
        </Route>
        <Route path="/manejoHtpp">
          <ManejoHttp></ManejoHttp>
        </Route>
        <Route path="/buscadorHtpp">
          <BuscadorHttp></BuscadorHttp>
        </Route>
        <Route path="/buscadorAxiosHtpp">
          <ManejoAxios></ManejoAxios>
        </Route>
        <Route path="/comunicacionInstancia">
          <Header></Header>
        </Route>
        <Route path="/useState">
          <ContadorUseState></ContadorUseState>
        </Route>
        <Route path="/useEffect">
          <ContadorUseEffect></ContadorUseEffect>
        </Route>
        <Route path="/useContext">
          <ContadorUseContext></ContadorUseContext>
        </Route>
      </div>
    );
  }
}

export default App;
