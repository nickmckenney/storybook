import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";

storiesOf("Form", module)
  .add("emailForm", () => (
    <Form
      placeholder="email"
      type="input"
      label="email"
      value="email"
      inputEmail
    />
  ))
  .add("selectForm", () => (
    <Form
      placeholder="Select"
      //    type="input"
      label="select"
      value="select"
      select
    />
  ))
  .add("selectFormOpacity1", () => (
    <Form
      placeholder="Select"
      //    type="input"
      label="select"
      value="select"
      opacity
    />
  ))

  .add("selectFormOpacityMed", () => (
    <Form
      placeholder="Select"
      //    type="input"
      label="select"
      value="select"
      opacitymed
    />
  ))
  .add("selectFormOpacitySmall", () => (
    <Form
      placeholder="Select"
      //    type="input"
      label="select"
      value="select"
      opacitysmall
    />
  ))
  .add("selectFormsmall", () => (
    <Form
      placeholder="Select"
      //    type="input"
      label="select"
      value="select"
      selectsmall
    />
  ))
  .add("count", () => <Form count />)
  .add("selectFormmed", () => (
    <Form
      placeholder="Select"
      //    type="input"
      label="select"
      value="select"
      selectmed
    />
  ));
