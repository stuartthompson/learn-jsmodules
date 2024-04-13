// imports a function called addNumbers that was exported from oneFunction.js using CommonJS syntax
// require is a CommonJS keyword
const addNumbers = require('./oneFunction.js');

const sum = addNumbers(3, 4);
console.log(`[oneFunction.addNumbers]: (3,4) = ${sum}`);

const { multiplyNumbers, divideNumbers } = require('./manyFunctions.js');

const product = multiplyNumbers(2, 3);
console.log(`[manyFunctions.multiplyNumbers]: (2,3) = ${product}`);

const quotient = divideNumbers(12, 2);
console.log(`[manyFunctions.divideNumbers]: (12,2) = ${quotient}`);