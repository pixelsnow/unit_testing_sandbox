import { getQueriesForElement } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

import App from './App';

test("renders the correct content", () => {
  // renders a React component to the DOM
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  const { getByText, getByLabelText } = getQueriesForElement(root);

  // Before we had expect(root.querySelector("h1").textContent).toBe("TODOs");
  // Users don't look for "h1", they look for the text
  // examples: testing from the user's perspective
  expect(getByText("TODOs")).not.toBeNull;
  expect(getByLabelText("What needs to be done?")).not.toBeNull;
  expect(getByText("Add #1")).not.toBeNull;

  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");

});


