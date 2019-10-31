import React from "react";
import "./Button.css";
import logo from "../../../public/logo.svg";

const Button = props => {
  let classList = "";
  let types = [
    "primary",
    "danger",
    "success",
    "warning",
    "weewoo",
    "cart",
    "email"
  ];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.hollow) {
    classList += ` button-${props.type}-hollow`;
  }
  if (props.opacity) {
    classList += ` button-${props.type}-opacity`;
  }
  if (props.cart) {
    return (
      <button className={classList}>
        {props.label}
        <img className="cart" src={logo}></img>
      </button>
    );
  }
  //    if(props.heart){
  //     return <button className={classList}>
  //     {props.label}
  //     <img className="cart"src={logo}></img>
  // </button>    }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
