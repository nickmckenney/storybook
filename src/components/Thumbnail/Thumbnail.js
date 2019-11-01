import "./thumb.css";
import React, { Component } from "react";
import Computer from "./ComputerImg.js";
import Ratings from "./Ratings.js";
import Price from "./Price.js";
import "./thumb.css";
import ProductName from "./ProductName.js";

class Nail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form className="container">
          <div>
            <Computer />
          </div>
          <ProductName />
          <Ratings />
          <Price />
        </form>
      </div>
    );
  }
}
export default Nail;
