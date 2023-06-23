import runTestCases from './testcases.js';

import { specificOperations } from './operations.js';

const { add32, div5, mul9, div9, mul5, sub32 } = specificOperations;

// Conversion functions
function celsiusToFahrenheit(c) {
	return add32(div5(mul9(c)));
}
function fahrenheitToCelsius(f) {
	return div9(mul5(sub32(f)));
}

runTestCases(celsiusToFahrenheit, fahrenheitToCelsius);
