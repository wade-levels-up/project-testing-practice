import reverseString from "./reverseString.js";

test("function returns something", () => {
  expect(reverseString("meh")).toBeTruthy();
});

test("returns error if input not a string", () => {
  expect(() => reverseString(1)).toThrow("Error: parameter must be a string");
});

test("returns string reversed", () => {
  expect(reverseString("dog")).toBe("god");
  expect(reverseString("goat")).toBe("taog");
});

test("handles spaces", () => {
  expect(reverseString("liquid melon cheese")).toBe("eseehc nolem diuqil");
});
