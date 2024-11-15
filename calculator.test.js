import { calculator1 } from "./calculator.js";

test("add, subtract, divide and multiply methods exist", () => {
  expect(calculator1.add).toBeDefined();
  expect(calculator1.subtract).toBeDefined();
  expect(calculator1.divide).toBeDefined();
  expect(calculator1.multiply).toBeDefined();
});

test("no inputs returns error", () => {
  expect(() => calculator1.add()).toThrow(Error);
  expect(() => calculator1.subtract()).toThrow(Error);
  expect(() => calculator1.divide()).toThrow(Error);
  expect(() => calculator1.multiply()).toThrow(Error);
});

test("inputs are both numbers", () => {
  expect(() => calculator1.add("chicken", "mango")).toThrow(Error);
  expect(() => calculator1.subtract("melon", "nectar")).toThrow(Error);
  expect(() => calculator1.divide("long", "pig")).toThrow(Error);
  expect(() => calculator1.multiply("white", "hawk")).toThrow(Error);
});

test("handles floats with decimal places", () => {
  expect(calculator1.divide(1, 2)).toBeCloseTo(0.5);
  expect(calculator1.add(1.5, 1.5)).toBeCloseTo(3);
  expect(calculator1.multiply(5, 0.5)).toBeCloseTo(2.5);
  expect(calculator1.divide(10, 3)).toBeCloseTo(3.33);
});

test("Throws error with only one number input", () => {
  expect(() => calculator1.add(2)).toThrow(Error);
});

test("Throws error if one input is a number and the other is a string", () => {
  expect(() => calculator1.multiply(69, "iguana")).toThrow(Error);
});

test("Handles long numbers", () => {
  expect(calculator1.divide(12301415, 13)).toBeCloseTo(946262.69);
  expect(calculator1.add(139587, 12456)).toBeCloseTo(152043);
  expect(calculator1.multiply(139587, 12456)).toBeCloseTo(1738695672);
  expect(calculator1.divide(1325346, 13)).toBeCloseTo(101949.69);
});

test("handles floating numbers starting with 0", () => {
  expect(calculator1.multiply(0.2, 5)).toBe(1);
});

test("throw error if dividing by 0", () => {
  expect(() => calculator1.divide(3, 0)).toThrow(Error);
  expect(() => calculator1.divide(0, 56)).toThrow(Error);
});
