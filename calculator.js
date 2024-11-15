class Calculator {
  hasCorrectInputs(a, b) {
    if (typeof a === "number" && typeof b === "number") return true;
    return false;
  }
  add(a, b) {
    if (this.hasCorrectInputs(a, b)) {
      return a + b;
    } else {
      throw new Error("Error: Must input two numbers");
    }
  }
  subtract(a, b) {
    if (this.hasCorrectInputs(a, b)) {
      return a - b;
    } else {
      throw new Error("Error: Must input two numbers");
    }
  }
  divide(a, b) {
    if (a === 0 || b === 0) {
      throw new Error("Error: Can't divide by zero");
    }
    if (this.hasCorrectInputs(a, b)) {
      return a / b;
    } else {
      throw new Error("Error: Must input two numbers");
    }
  }
  multiply(a, b) {
    if (this.hasCorrectInputs(a, b)) {
      return a * b;
    } else {
      throw new Error("Error: Must input two numbers");
    }
  }
}

export const calculator1 = new Calculator();
