import { getQueriesForElement } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

import App from './App';

// import { render } from "@testing-library/react";
const render = (component) => {
  // renders a React component to the DOM
  const root = document.createElement("div");
  ReactDOM.render(component, root);
  return getQueriesForElement(root);
};


test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  // examples: testing from the user's perspective
  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");

});


