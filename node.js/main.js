const { sum, divide, multiply, subtract } = require("./math/math");

const a = 20;
const b = 20;

console.log(`The sum of ${a} and ${b} is ${sum(a, b)}`);
console.log(`The divide of ${a} and ${b} is ${divide(a, b)}`);
console.log(`The subtract of ${a} and ${b} is ${subtract(a, b)}`);
console.log(`The multiply of ${a} and ${b} is ${multiply(a, b)}`);
