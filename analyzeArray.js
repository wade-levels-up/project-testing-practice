export default function analyzeArray(array) {
  // Input error handling
  if (!Array.isArray(array)) throw new Error();
  for (let element of array) {
    if (typeof element !== "number") {
      throw new Error("Error: Array may only consist of numbers");
    }
  }

  // Hoisted function to calculate average later on
  function calculateAverage(array) {
    let average = 0;
    let divisionFactor = 0;
    for (let i = 0; i < array.length; i++) {
      average += array[i];
      divisionFactor += 1;
    }
    return average / divisionFactor;
  }

  // The actual object we'll return when all is said and done
  let object = {
    average: calculateAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return object;
}
