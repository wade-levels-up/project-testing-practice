export default function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Error: parameter must be a string");
  }
  let splitString = string.slice().split("");
  let reversedString = [];
  for (let i = splitString.length - 1; i >= 0; i--) {
    reversedString.push(splitString[i]);
  }

  return reversedString.join("");
}
