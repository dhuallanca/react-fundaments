import React from 'react';

class Contador extends React.Component {
  state = {
    clicks: 0,
  }
  // basic step
  add = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>Clicks { this.state.clicks }</button>
      </div>
    );
  }

}

export default Contador;