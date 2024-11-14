import capitalize from "./capitalize.js";

test("function returns something", () => {
  expect(capitalize("a")).toBeTruthy();
});

test("function returns error with no input", () => {
  expect(() => capitalize()).toThrow(Error);
});

test("error message for no input explains issue", () => {
  expect(() => capitalize()).toThrow("Error: function requires a value");
});

test("input is a string", () => {
  expect(() => capitalize(123)).toThrow(
    "Error: function requires value to be a string"
  );
});

test("first letter is a letter", () => {
  expect(() => capitalize("1donkey")).toThrow(Error);
  expect(() => capitalize("2donkey")).toThrow(Error);
});

test("first letter becomes uppercase", () => {
  expect(capitalize("donkey")).toBe("Donkey");
});

test("cannot input a sentence", () => {
  expect(() => capitalize("mango iguana pirahna")).toThrow(Error);
});
