import React, { Component } from "react";
import ReactDOM from "react-dom";
import Thumb from "./Thumbnail.js";
import "./thumb.css";
import img from "./price.png";

class Ratings extends Component {
  render() {
    return <img className="imgPrice" src={img}></img>;
  }
}
export default Ratings;
