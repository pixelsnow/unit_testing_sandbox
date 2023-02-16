import React from "react";
import ReactDOM from "react-dom";

import App from './App';

test("renders the correct content", () => {
  // renders a React component to the DOM
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  // Use DOM APIs (querySelector) to make testable statements
  expect(root.querySelector("h1").textContent).toBe("TODOs");
  expect(root.querySelector("label").textContent).toBe("What needs to be done?");
  expect(root.querySelector("button").textContent).toBe("Add #1");

  

});


