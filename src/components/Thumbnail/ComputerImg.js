import React, { Component } from "react";
import ReactDOM from "react-dom";
import Thumb from "./Thumbnail.js";
import "./thumb.css";
import img from "./computerImg.png";

class ComputerImg extends Component {
  render() {
    return <img className="img" src={img}></img>;
  }
}
export default ComputerImg;
