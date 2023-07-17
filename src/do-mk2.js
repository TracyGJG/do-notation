import runTestCases from './testcases.js';

import { DO } from './do-notation.js';

import { genericOperations } from './operations.js';

const { addM, subM, mulM, divM } = genericOperations;

// Conversion functions
const celsiusToFahrenheit = DO(mulM(9), divM(5), addM(32));

const fahrenheitToCelsiusOperations = [subM(32), mulM(5), divM(9)];
const fahrenheitToCelsius = DO(fahrenheitToCelsiusOperations);

runTestCases(celsiusToFahrenheit, fahrenheitToCelsius);
