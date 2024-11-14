export default function capitalize(string) {
  let splitString;
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let validCharacters = alphabet.split("");

  if (!string) {
    throw new Error("Error: function requires a value");
  } else if (typeof string !== "string") {
    throw new Error("Error: function requires value to be a string");
  } else {
    splitString = string.split("");
    if (!validCharacters.includes(splitString[0])) {
      throw new Error("Error: First letter is not a letter");
    }
    for (let letter of splitString) {
      if (letter === " ") {
        throw new Error(
          "Error: Cannot input sentences, input must be a single word"
        );
      }
    }
    splitString[0] = splitString[0].toUpperCase();
    return splitString.join("");
  }
}
