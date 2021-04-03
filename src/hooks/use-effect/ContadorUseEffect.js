import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../../header/header";

// hook personalizado we must add "use" as prefix
// const useHook = () => {
//   const [clicks, setClicks] = useState(0);
// }

const ContadorUseEffect = () => {
  const [clicks, setClicks] = useState(0);
  const [isActive, setActivated] = useState(false);
  const [contador, setContador] = useState({
    clicks: 0,
    title: "",
  });

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [emoji, setEmoji] = useState('\uD83D\uDE00');


  const handleMouse = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  const toogleEmoji = () => {
    const nextEmoji = emoji === '\uD83D\uDE00' ? '\uD83D\uDE02' : '\uD83D\uDE00';
    setEmoji(nextEmoji);
  }

  //use Effect has two parameter callback, and []
  // [] means that useEffect is only executed once time or when variables in array are updated
  useEffect(() => {
    //componentDidMount
    //componentDidUpdate
    window.addEventListener("mousemove", handleMouse);
    console.log("after render, click:s", clicks);
    console.log("%c-----------------", "color:green");

    return () => {
      //componentWillUnMount
      // se ejecuta después de actualizar el renders
      console.log("return de use effect, clicks:", clicks);
      // to unSubscribe from event
      window.removeEventListener("mousemove", handleMouse);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    console.log('use layout effect es sincrono y se ejecuta antes de renderizar el dom');
  })

  const addClicks = () => {
    setClicks(clicks + 1);
  };
  const activate = () => {
    setActivated(!isActive);
  };
  const addContador = () => {
    //only update clicks attribute, title is not sending
    setContador({
      clicks: contador.clicks + 1,
    });
  };
  const addTitle = (e) => {
    // update all the object contador
    setContador({
      ...contador,
      title: e.target.value,
    });
  };
  return (
    <>
      <Header title="Use Effect"> </Header>
      <h2>X: {mouseX}  Y: {mouseY} </h2>
      <button onClick={addClicks}> Clicks {clicks} </button>
      <button onClick={activate}>
        {isActive ? "Desactivar" : "Activar"}
      </button>
      <br></br> <input onChange={addTitle}></input>
      <button onClick={addContador}> Contador {contador.clicks} </button>
      <h3> {contador.title} </h3>
      <br></br>
      <button onClick={toogleEmoji}>Change Emoji</button>
      {emoji}
    </>
  );
};

export default ContadorUseEffect;
