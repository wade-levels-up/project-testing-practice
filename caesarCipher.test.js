import caesarCipher from "./caesarCipher.js";

test("function returns something", () => {
  expect(caesarCipher("mango")).toBeTruthy();
});

test("input is a string", () => {
  expect(() => caesarCipher(1)).toThrow(Error);
});

test("shifts letters forward by 3 by default with lowercase letters", () => {
  expect(caesarCipher("abc")).toBe("def");
  expect(caesarCipher("def")).toBe("ghi");
});

test("loops when shift factor passes over end of alphabet", () => {
  expect(caesarCipher("xyz")).toBe("abc");
});

test("takes shift factor other than default", () => {
  expect(caesarCipher("god", 10)).toBe("qyn");
});

test("works on longer words that loop", () => {
  expect(caesarCipher("goat", 10)).toBe("qykd");
});

test("handles spaces in the input", () => {
  expect(caesarCipher("go at", 10)).toBe("qy kd");
});

test("handles symbols in the input", () => {
  expect(caesarCipher("!abc$%")).toBe("!def$%");
});

test("handles uppercase and lowercase letters", () => {
  expect(caesarCipher("aBc")).toBe("dEf");
});

test("handles complex strings", () => {
  expect(caesarCipher("32mA-NgO $%#W", 6)).toBe("32sG-TmU $%#C");
});

test("Throws an error if shift isn't a whole number", () => {
  expect(() => caesarCipher("abc", 4.2)).toThrow(Error);
  expect(() => caesarCipher("abc", "Definitely not a number")).toThrow(Error);
});
