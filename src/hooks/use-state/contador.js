import React, { useState } from 'react';
import Header from '../../header/header';

const ContadorUseState = () => {

 const [ clicks, setClicks] = useState(0);

  const addClicks = () => {
    setClicks(clicks + 1);
  }
  return (
    <>
      <Header title="Use State"></Header>
      <button onClick={addClicks}>Clicks { clicks }</button>
    </>

  )
}

export default ContadorUseState;
