import React from 'react'

class Gato extends React.Component {

  state = {
    text: '',
    evento: ''
  }
  manejador= (event)=> {
    this.setState(() => ({
      text: event.target.value,
      evento: event.type,
   }));
  };
  render(props) {
    return (
      <>
      <div>
        <h1>Gato</h1>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </div>
        <div>
          <h2>Manejando eventos</h2>
          <label>Nombre</label>
          <input type="text"
            onChange={this.manejador}
            onCopy={this.manejador}></input>
          <h3>{ this.state.text }</h3>
          <h3>{ this.state.evento }</h3>
      </div>
      </>
    );

  }
}

export default Gato;