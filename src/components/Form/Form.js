import "./Form.css";
import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

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
    if (this.props.opacitysmall) {
      return (
        <form>
          <select className={this.props.className}>
            <option>Select</option>
            {/* https://codepen.io/mckenney/pen/rNNYKRO?editors=1000 */}
          </select>
        </form>
      );
    }
    if (this.props.opacitymed) {
      return (
        <form>
          <select className={this.props.className}>
            <option>Select</option>
            {/* https://codepen.io/mckenney/pen/rNNYKRO?editors=1000 */}
          </select>
        </form>
      );
    }
    if (this.props.selectsmall) {
      return (
        <form>
          <select className={this.props.className}>
            <option>Select</option>
          </select>
        </form>
      );
    }
    if (this.props.selectmed) {
      return (
        <form>
          <select className={this.props.className}>
            <option>Select</option>
          </select>
        </form>
      );
    }
    if (this.props.count) {
      return (
        <form>
          <h2>a</h2>
        </form>
      );
    }
  }
}
export default Form;
