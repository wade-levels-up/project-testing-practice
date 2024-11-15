import capitalize from "./capitalize.js";
import reverseString from "./reverseString.js";
import { calculator1 } from "./calculator.js";
import caesarCipher from "./caesarCipher.js";
import analyzeArray from "./analyzeArray.js";

console.log(capitalize("a23124")); // A23124

console.log(reverseString("melon")); // nolem
console.log(reverseString("1203870124.123980124     97123.")); // .32179     421089321.4210783021

console.log(calculator1.add(5, 5)); // 10;
console.log(calculator1.subtract(20, 3)); // 17;
console.log(calculator1.multiply(4.5, 3)); // 13.5
console.log(calculator1.divide(100, 33)); // 3.0303030303030303

console.log(caesarCipher("Long chicken69_SalamiMaster8", 28)); // Nqpi ejkemgp69_UcncokOcuvgt8

console.table(analyzeArray([2, 4, 6, 8, 10]));
