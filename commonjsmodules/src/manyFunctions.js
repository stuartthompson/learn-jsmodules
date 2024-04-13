// manyFunctions.js
// Exports multiple functions from a single file using CommonJS modules syntax.

const multiplyNumbers = (a, b) => {
    return a * b;
}

const divideNumbers = (a, b) => {
    return a / b;
}

// Exports two functions as an object.
module.exports = { multiplyNumbers, divideNumbers };