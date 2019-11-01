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
      opacity
    />
  ))
  .add("selectFormOpacitySmall", () => (
    <Form
      placeholder="Select"
      className="opacity small"
      label="select"
      type="input"
      value="select"
      opacity
    />
  ))
  .add("selectFormsmall", () => (
    <Form
      className="small"
      placeholder="Select"
      label="select"
      value="select"
      select
    />
  ))
  .add("Counter", () => (
    <Form
      type="button"
      value={2}
      plus="+"
      minus="-"
      max={10}
      min={0}
      step={2}
      counter
    />
  ))

  .add("selectFormmed", () => (
    <Form
      placeholder="Select"
      label="select"
      type="input"
      value="select"
      className="med"
      select
    />
  ));
