import React from 'react'

class Gato extends React.Component {
  render(props) {
    return (
      <div>
        <h1>Gato</h1>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Gato;