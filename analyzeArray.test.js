import analyzeArray from "./analyzeArray.js";

test("returns something", () => {
  expect(analyzeArray([])).toBeTruthy();
});

test("throws error if input is not array", () => {
  expect(() => analyzeArray("I am not an array, mate")).toThrow(Error);
});

test("average, min, max and length properties are defined", () => {
  expect(analyzeArray([]).average).toBeDefined();
  expect(analyzeArray([]).min).toBeDefined();
  expect(analyzeArray([]).max).toBeDefined();
  expect(analyzeArray([]).length).toBeDefined();
});

test("calculate and return average", () => {
  expect(analyzeArray([10, 2, 38, 23, 38, 23, 21]).average).toBeCloseTo(22.14);
});

test("returns length of array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
});

test("returns the minimum number of the array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
});

test("returns the maximum number of the array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
});

test("Throws an error if the array is not all numbers", () => {
  expect(() =>
    analyzeArray([1, "Donkey", 3, 4, "500 Stubborn Mooses"])
  ).toThrow(Error);
});

test("Throws an error if array is empty", () => {
  expect(() => analyzeArray()).toThrow(Error);
});

test("Returns complete object with all properties", () => {
  expect(analyzeArray([2, 4, 6, 8, 10])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});
