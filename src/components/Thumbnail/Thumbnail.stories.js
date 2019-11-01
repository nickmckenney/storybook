import React from "react";
import { storiesOf } from "@storybook/react";
import Nail from "./Thumbnail.js";

storiesOf("Nail", module).add("computer", () => <Nail notColor />);
storiesOf("Nail", module).add("computer2", () => <Nail color />);
