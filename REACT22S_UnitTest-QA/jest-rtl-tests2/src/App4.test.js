import { fireEvent, render } from "@testing-library/react";
import React from "react";

import App from './App';

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  // examples: testing from the user's perspective
  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");

});

// simulating user interaction
test("allows users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");

  fireEvent.change(input, { target: { value: "Feed cats" } });
  fireEvent.click(button);
  // look at @testing-library/user-event for more interactions
  // https://testing-library.com/docs/user-event/intro

  getByText("Feed cats");
  getByText("Add #2");
});


