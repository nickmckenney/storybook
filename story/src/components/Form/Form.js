import "./Form.css";
import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.inputEmail) {
      return (
        <form>
          <h2>Email:</h2>
          <input type="input" value="Email" placeholder="Email" />
        </form>
      );
    }
    if (this.props.select) {
      return (
        <form>
          <select
            className="minimal"
            type="input"
            value="Select"
            placeholder="Select"
          >
            <option>Select</option>
          </select>
        </form>
      );
    }
    if (this.props.opacity) {
      return (
        <form>
          <select
            className="opacity minimal"
            type="input"
            value="Select"
            placeholder="Select"
          >
            <option>Select</option>
          </select>
        </form>
      );
    }
    if (this.props.opacitysmall) {
      return (
        <form>
          <select
            className="opacity small"
            type="input"
            value="Select"
            placeholder="Select"
          >
            <option>Select</option>
          </select>
        </form>
      );
    }
    if (this.props.opacitymed) {
      return (
        <form>
          <select
            className="opacity med"
            type="input"
            value="Select"
            placeholder="Select"
          >
            <option>Select</option>
          </select>
        </form>
      );
    }
    if (this.props.selectsmall) {
      return (
        <form>
          <select
            className="small"
            type="input"
            value="Select"
            placeholder="Select"
          >
            <option>Select</option>
          </select>
        </form>
      );
    }
    if (this.props.selectmed) {
      return (
        <form>
          <select
            className="med"
            type="input"
            value="Select"
            placeholder="Select"
          >
            {" "}
            <option>Select</option>
          </select>
        </form>
      );
    }
  }
}

export default Form;
