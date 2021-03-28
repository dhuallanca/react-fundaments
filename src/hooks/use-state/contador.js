import React, { useState } from 'react';
import Header from '../../header/header';

const ContadorUseState = () => {

  const [clicks, setClicks] = useState(0);
  const [isActive, setActivated] = useState(false);
  const [contador, setContador] = useState({
    clicks: 0,
    title: ''
  });

  const addClicks = () => {
    setClicks(clicks + 1);
  }
  const activate = () => {
    setActivated(!isActive);
  }
  const addContador = () => {
    //only update clicks attribute, title is not sending
    setContador({
      clicks: contador.clicks +1
    })
  }
  const addTitle = (e) => {
    // update all the object contador
    setContador({
       ...contador,
      title: e.target.value
    })
  }
  return (
    <>
      <Header title="Use State"></Header>
      <button onClick={addClicks}>Clicks { clicks }</button>
      <button onClick={activate}>{isActive ? 'Desactivar' : 'Activar'}</button>
      <br></br>
      <input onChange={addTitle}></input>
      <button onClick={addContador}>Contador {contador.clicks}</button>
      <h3>{contador.title}</h3>
    </>

  )
}

export default ContadorUseState;
