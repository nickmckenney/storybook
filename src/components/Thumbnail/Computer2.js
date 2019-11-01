import React, { Component } from "react";
import ReactDOM from "react-dom";
import Thumb from "./Thumbnail.js";
import "./thumb.css";
import cart from "./Cart.png";
import Heart from "./Heart.png";

class Computer2 extends Component {
  render() {
    return (
      <div>
        <img className="carty" src={cart}></img>
        <img className="Hearty" src={Heart}></img>
      </div>
    );
  }
}
export default Computer2;
