import React from "react";

class InputControlado extends React.Component {
  state = {
    text: "",
    technology: "",
    hasError: false,
    termsAccepted: false,
  };
  onUpdate = (event) => {
    const text = event.target.value;
    const hasError = text.length > 5;
    this.setState({ text, hasError });
  };
  handleSelect = (event) => {
    this.setState({ technology: event.target.value });
  };
  handleCheck = (event) => {
    this.setState({ termsAccepted: event.target.checked });
  }
  render() {
    const inputStyles = {
      border: this.state.hasError ? "1px solid red" : "1px solid #E8E8E8",
      padding: "0.5 rem",
    };
    return (
      <>
        <div>
          <h3>Inputs controlados</h3>
        </div>
        <input
          type="text"
          value={this.state.text}
          style={inputStyles}
          onChange={this.onUpdate}
        />
        <select value={this.state.technology} onChange={this.handleSelect}>
          <option value="Angular">Angular</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </select>
        <input
          type="checkbox"
          checked={this.state.termsAccepted}
          onChange={this.handleCheck}
          value="terms"
          id="checkTerms"
        />
        <label htmlFor="checkTerms">Aceptar Términos</label>
      </>
    );
  }
}

export default InputControlado;
