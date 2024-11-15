export default function caesarCipher(string, shiftFactor = 3) {
  if (!Number.isInteger(shiftFactor))
    throw new Error("Shiftfactor must be a whole number");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabet.split("");
  let alphabetArrUpper = [];
  for (let letter of alphabetArr) {
    alphabetArrUpper.push(letter.toUpperCase());
  }

  // Check that input is a string
  if (typeof string !== "string") {
    throw new Error();
  }

  // Split input string into array and prepare empty array to return
  let splitStringArr = string.split("");
  let cipherStringArr = [];

  // For each character in the input string...
  for (let i = 0; i < splitStringArr.length; i++) {
    if (alphabetArr.includes(splitStringArr[i])) {
      // ...If it's a lowercase letter, adjust it's index accordingly and push it...
      for (let x = 0; x < alphabetArr.length; x++) {
        if (splitStringArr[i] === alphabetArr[x]) {
          cipherStringArr.push(alphabetArr[adjustIndex(x, shiftFactor)]);
        }
      }
    } else if (alphabetArrUpper.includes(splitStringArr[i])) {
      // ...Else, if it's an uppercase letter, adjust it's index accordingly and push it
      for (let x = 0; x < alphabetArrUpper.length; x++) {
        if (splitStringArr[i] === alphabetArrUpper[x]) {
          cipherStringArr.push(alphabetArrUpper[adjustIndex(x, shiftFactor)]);
        }
      }
    } else {
      // If it's not a lowercase or uppercase letter, just push it, push it real good.
      cipherStringArr.push(splitStringArr[i]);
    }
  }

  // When index exceeds indexes, loop back to 0
  function adjustIndex(index, shiftFactor) {
    let curPos = index;
    let sFactorPoints = shiftFactor;
    while (sFactorPoints > 0) {
      if (curPos < 26) {
        curPos += 1;
        sFactorPoints -= 1;
      }
      if (curPos === 26) {
        curPos = 0;
      }
    }
    return curPos;
  }

  return cipherStringArr.join("");
}
