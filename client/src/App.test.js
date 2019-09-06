import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("My App renders withut crashing", () => {
  render(<App />);
});

test("Dark Mode Working", () => {
  const workingDark = render(<App />);
  workingDark.getByText(/mode/i);
  workingDark.getByTestId("darkmode");
});

test("render a single players data", async () => {
  const { findByText } = await render(<App />);
  findByText(/Megan Rapinoe/i);
});