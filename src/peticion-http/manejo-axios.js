import React from 'react';
import axios from 'axios';

class ManejoAxios extends React.Component {

  state = {
    user: {},
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target[0].value;
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    axios.get(`${apiUrl}/`, {
      params: {
        username: userInput
      }
    })
      .then((res) => {
        this.setState({ user: res.data[0] });
      });
  }

  handleSubmitAsync = async (event) => {
    event.preventDefault();
    const userInput = event.target[0].value;
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const res = await axios.get(`${apiUrl}/`, {
      params: {
        username: userInput
      }
    });
    this.setState({ user: res.data[0] });
  }
  render() {
    return (
      <>
        <h2>Manejo http con axios</h2>
        <form onSubmit={this.handleSubmitAsync}>
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

export default ManejoAxios;