import React from "react";
import renderer from "react-test-renderer";
// npm install --save-dev react-test-renderer
import App from "../App";
import Counter from "../Counter";

// Compares html of rendered React to saved html
/* 
describe("Jest snapshot testing suite", () => {
  test("Matches DOM Snapshot for App component", () => {
    const domTree = renderer.create(<App />).toJSON();
    expect(domTree).toMatchSnapshot();
  });

  test("Should render 3 after 3 increments", () => {
    const component = renderer.create(<Counter />);
    component.getInstance().increment();
    component.getInstance().increment();
    component.getInstance().increment();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
 */

const sum = require("../math/sum");

describe("Testing multiple cases", () => {
  const testValues = [
    [2345, 1, 2346],
    [100000, -100000, 0],
    [-2, 1, -1],
    [-1, -342956, -342957],
    [0, 0, 0],
  ];
  test.each(testValues)("add %s and %s to equal %s", (numA, numB, result) => {
    expect(sum(numA, numB)).toBe(result);
  });

  test("add 1 and 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Testing error messages", () => {
  const testValues = [
    ["", "Error: sum() value A is not a number"],
    ["hi", "Error: sum() value A is not a number"],
    [, "Error: sum() value A is not a number"],
    ["2", "Error: sum() value A is not a number"],
    ["*", "Error: sum() value A is not a number"],
  ];

  test.each(testValues)(
    "sum() value A '%s' throws the error '%s'",
    (numA, result) => {
      // assertion so that the error gets caught
      expect(() => new sum(numA, 4)).toThrow(result);
    }
  );
});
