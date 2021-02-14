import React from 'react';

class ManejoHttp extends React.Component {

  state = {
    users: []
  }

  // This is used when the component is rendered
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json()) // retorna otra promesa con el resultado
      .then((users) => {
        this.setState({ users });
      });
  }
  render() {
    return (
      <>
      <h3>Manejo de Http</h3>
      {
      this.state.users.map((user) => (
        <li key={user.id}>{ user.name }</li>
      ))}
      </>
    )
  }
  
}

export default ManejoHttp;