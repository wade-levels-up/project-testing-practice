import capitalize from "./capitalize.js";

test("function returns something", () => {
  expect(capitalize("a")).toBeTruthy();
});

test("function returns error with no input", () => {
  expect(() => capitalize()).toThrow(Error);
});
