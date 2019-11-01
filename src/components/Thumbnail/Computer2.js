import React, { Component } from "react";
import ReactDOM from "react-dom";
import Thumb from "./Thumbnail.js";
import "./thumb.css";
import "./Thumbnail.stories.js";
import cart from "./Cart.png";
import Heart from "./Heart.png";
import img from "./computerImg.png";

class Computer2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img className="carty" src={cart}></img>
        <img className="hearty" src={Heart}></img>
        <img className="hi" src={img}></img>
      </div>
    );
  }
}
export default Computer2;
