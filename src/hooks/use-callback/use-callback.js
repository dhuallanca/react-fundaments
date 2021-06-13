import React, { useCallback, useMemo, useState } from 'react';
import Header from '../../header/header';

// eslint-disable-next-line react-hooks/rules-of-hooks
const ButtonCallBack = React.memo(({onClickCallback, children}) => {
 const getRamdomColor = () => '#' + Math.random().toString(16).slice(2, 8);
  const styleButton = {
    padding: '1rem',
    fontSize: '20px',
    background: getRamdomColor()
  }
  return (
    <button style={styleButton} onClick={onClickCallback}>
      {children}
    </button>
  );
}, [])
const ComponentUseCallback = () => {

  const [contador, setContador] = useState(0);
  const [contadorB, setContadorB] = useState(0);
  const incrementar = useCallback(() => {
    setContador((state) => state +1);
  }, [])

  // el callback solo se usa cuando se actualiza la propiedad contador
  const incrementarB = useCallback(() => {
    setContadorB((state) => state + contador);
  }, [contador]);

  return (
    <div>
      <Header>Use Callback and use Memo</Header>
      <ButtonCallBack onClickCallback={incrementar}>
        contenido Children
      </ButtonCallBack>
      <ButtonCallBack onClickCallback={incrementarB}>
        Incrementar B
      </ButtonCallBack>
      <h2>Contador: {contador}  ContadorB: {contadorB}</h2>
    </div>
  );
}

export default ComponentUseCallback;