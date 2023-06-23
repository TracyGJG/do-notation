import runTestCases from './testcases.js';

import { DO } from './do-notation.js';

import { genericOperations } from './operations.js';

const { addM, subM, mulM, divM } = genericOperations;

// Conversion functions
const celsiusToFahrenheit = DO(mulM(9), divM(5), addM(32));

const fahrenheitToCelsius_Operations = [subM(32), mulM(5), divM(9)];
const fahrenheitToCelsius = DO(fahrenheitToCelsius_Operations);

runTestCases(celsiusToFahrenheit, fahrenheitToCelsius);
