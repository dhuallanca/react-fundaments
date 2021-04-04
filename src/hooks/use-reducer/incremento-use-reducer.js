import React, { useReducer } from "react";
import Header from '../../header/header';

const IncrementarUseReducer = () => {
  // reemplazar useState para usar Reducer
  // const [contador, setContador] = useReducer(0);
  // const [title, setTitle] = useReducer(0);

  //action: dispatch({type:'string', payload: 'object'})
  const reducer = (stateInitial, action) => {
    switch (action.type) {
      case "INCREMENTAR":
        return {
          ...stateInitial,
          contador: stateInitial.contador + 1,
        };
      case "DISMINUIR":
        return {
          ...stateInitial,
          contador: stateInitial.contador - 1,
        };
      case "SETTITLE":
        return {
          ...stateInitial,
          title: action.payload,
        };
      default:
        return stateInitial;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    contador: 0,
    title: 'Hola'
  })

  const incrementar = () => {
    //setContador(contador + 1);
    dispatch({ type: 'INCREMENTAR' });
  };
  const disminuir = () => {
    //setContador(contador - 1);
    dispatch({ type: "DISMINUIR" });
  };
  const handleTitle = (event) => {
    //setTitle(event.target.value)
    dispatch({ type: "SETTITLE", payload: event.target.value });
  }

  return (
    <>
      <Header title="Use Reducer"></Header>
      <input type="text" onChange={handleTitle} value={state.title}/>
      <button onClick={incrementar}> Incrementar {state.contador} </button>
      <button onClick={disminuir}> Disminuir {state.contador} </button>
      <br></br>
      <h3>{state.title}</h3>
      <strong>contador: {state.contador}</strong>
    </>
  );
}

export default IncrementarUseReducer;
