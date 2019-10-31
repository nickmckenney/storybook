import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";

storiesOf("Form", module)
  .add("emailForm", () => (
    <Form placeholder="email" type="input" label="Email" value="" inputEmail />
  ))
  .add("selectForm", () => (
    <Form
      placeholder="Select"
      //    type="input"
      label="select"
      value="select"
      className="minimal"
      select
    />
  ))
  .add("selectFormOpacity1", () => (
    <Form
      placeholder="Select"
      label="select"
      value="select"
      type="input"
      className="opacity minimal"
      opacity
    />
  ))

  .add("selectFormOpacityMed", () => (
    <Form
      placeholder="Select"
      className="opacity med"
      label="select"
      type="input"
      value="select"
      opacitymed
    />
  ))
  .add("selectFormOpacitySmall", () => (
    <Form
      placeholder="Select"
      className="opacity small"
      label="select"
      type="input"
      value="select"
      opacitysmall
    />
  ))
  .add("selectFormsmall", () => (
    <Form
      className="small"
      placeholder="Select"
      label="select"
      value="select"
      selectsmall
    />
  ))
  .add("count", () => <Form count />)
  .add("selectFormmed", () => (
    <Form
      placeholder="Select"
      label="select"
      type="input"
      value="select"
      className="med"
      selectmed
    />
  ));
