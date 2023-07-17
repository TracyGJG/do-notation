import runTestCases from './testcases.js';

import { DO } from './do-notation.js';

import { specificOperations } from './operations.js';

const { add32, div5, mul9, div9, mul5, sub32 } = specificOperations;

// Conversion functions
const celsiusToFahrenheit = DO(mul9, div5, add32);

const fahrenheitToCelsiusOperations = [sub32, mul5, div9];
const fahrenheitToCelsius = DO(fahrenheitToCelsiusOperations);

runTestCases(celsiusToFahrenheit, fahrenheitToCelsius);
