import React from "react";
class BuscadorHttp extends React.Component {
  state = {
    user: {},
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target[0].value;
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(`${apiUrl}/?username=${userInput}`)
      .then((res) => res.json())
      .then((users) => {
        this.setState({ user: users[0] });
      });
  }

  render() {
    return (
      <>
        <h2>Buscador de Usuario</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Buscar Usuario"
          ></input>
          <button>
            Buscar
          </button>
          <div>
            <h3>Usuario</h3>
            <label>{this.state.user.name}</label>
            <p>{this.state.user.email}</p>
          </div>
        </form>
      </>
    );
  }
}

export default BuscadorHttp;
