import "./thumb.css";
import React, { Component } from "react";
import Computer from "./ComputerImg.js";
import Computer2 from "./Computer2.js";

import Ratings from "./Ratings.js";
import Price from "./Price.js";
import "./thumb.css";
import ProductName from "./ProductName.js";

class Nail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseEnter: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  mouseEnter = () => {
    this.setState({ mouseEnter: true });
  };
  mouseLeave = () => {
    this.setState({ mouseEnter: false });
  };
  render() {
    return (
      <div>
        <form
          className="container"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <div>{this.state.mouseEnter ? <Computer2 /> : <Computer />}</div>
          <ProductName />
          <Ratings />
          <Price />
        </form>
      </div>
    );
  }
}
export default Nail;
