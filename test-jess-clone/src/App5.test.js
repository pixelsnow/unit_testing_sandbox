import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";

import App from './App';
import api from './api';

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  // examples: testing from the user's perspective
  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");

});

// Normally you can mock the entire module using jest.mock('./api')
// This tutorial was made using codesandbox.io
// which isn't compatible with that for some reason
// https://jestjs.io/docs/mock-functions#mocking-modules
const mockCreateItem = (api.createItem = jest.fn());

// to use api.js, un-comment lines 27-31 and comment lines 24-25 in App.js

// simulating api interaction
test("allows users to add items to their list", async () => {
  const todoText = "Feed dogs";
  mockCreateItem.mockResolvedValueOnce({ id: 123, text: todoText });
  
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");

  fireEvent.change(input, { target: { value: todoText } });
  fireEvent.click(button);
  
  await waitFor(() => getByText(todoText) );

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    "/items",
    expect.objectContaining({ text: todoText })
  );

  getByText("Add #2");
});


