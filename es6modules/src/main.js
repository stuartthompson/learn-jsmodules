import addNumbers from './oneFunction.js';
import { multiplyNumbers, divideNumbers } from './manyFunctions.js';

const sum = addNumbers(3, 4);
console.log(`[oneFunction.addNumbers]: (3,4) = ${sum}`);

const product = multiplyNumbers(3, 4);
console.log(`[manyFunctions.multiplyNumbers]: (3, 4) = ${product}`);

const quotient = divideNumbers(12, 2);
console.log(`[manyFunctions.divideNumbers]: (12, 2) = ${quotient}`);