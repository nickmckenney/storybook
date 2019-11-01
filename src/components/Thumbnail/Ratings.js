import React, { Component } from "react";
import ReactDOM from "react-dom";
import Thumb from "./Thumbnail.js";
import "./thumb.css";
import img from "./rateings.png";

class Ratings extends Component {
  render() {
    return <img className="imgRating" src={img}></img>;
  }
}
export default Ratings;
