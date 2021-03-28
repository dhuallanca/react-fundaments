
import React from 'react';
const Header = () => {

  const hijo = React.createRef();
  const handleClick = () => {
    console.log('hijo', hijo);
    hijo.current.dispatchAlert(null, 'Ejecutado desde el padre');
  }
    return (
     <>
        <header>
          <h1>Comunicación entre componentes</h1>
          <div>
            <b>Métodos instancia</b>
          </div>
        </header>
        <Hijo ref={hijo}>

        </Hijo>
        <button onClick={handleClick}>Padre</button>
      </>
    )
}

class Hijo extends React.Component {

  state = {
    message: 'mensaje desde el hijo'
  }
  dispatchAlert = (event, message = 'Alert desde el hijo') => {
    alert(message);
    this.setState({ message })
  }
  render() {
    return (
      <>
        <h2>Hijo</h2>
        <div>
          <button onClick={this.dispatchAlert}>Hijo</button>
          <h3>Mensaje: {this.state.message}</h3>
        </div>
      </>
    );
  }
}


export  default Header;