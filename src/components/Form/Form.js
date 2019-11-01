import "./Form.css";
import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  add = evt => {
    evt.preventDefault();
    if (this.state.value < this.props.max) {
      return this.setState({ value: this.state.value + this.props.step });
    }
  };
  minus = evt => {
    evt.preventDefault();
    if (this.state.value > this.props.min) {
      return this.setState({ value: this.state.value - this.props.step });
    }
  };
  render() {
    if (this.props.inputEmail) {
      return (
        <form>
          <h2>Email:</h2>
          <input value={this.props.label} />
        </form>
      );
    }
    if (this.props.select) {
      return (
        <form>
          <select className={this.props.className}>
            <option>Select</option>
          </select>
        </form>
      );
    }
    if (this.props.opacity) {
      return (
        <form>
          <select className={this.props.className}>
            <option>Select</option>
            {/* https://codepen.io/mckenney/pen/rNNYKRO?editors=1000 */}
          </select>
        </form>
      );
    }
    if (this.props.counter) {
      return (
        <form>
          <button onClick={this.minus}></button>
          <h2>{this.state.value}</h2>
          <button onClick={this.add}></button>
        </form>
      );
    }
    if (this.props.volucher) {
      return (
        <form>
          <input className="volutchF" placeholder={this.props.placeholder} />
          <button className="voluchBtn">Redeme</button>
        </form>
      );
    }
  }
}

export default Form;
