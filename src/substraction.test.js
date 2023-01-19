const substraction = require("./substraction");

test("adds 1 - 2 to equal -1", () => {
  expect(substraction(1, 2)).toBe(-1);
});
