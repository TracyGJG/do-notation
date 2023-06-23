import runTestCases from './testcases.js';

const INTERCEPT = 32;
const CELSIUS_DELTA = 5;
const FAHRENHEIT_DELTA = 9;
const SLOPE = CELSIUS_DELTA / FAHRENHEIT_DELTA;

function celsiusToFahrenheit(c) {
	return c / SLOPE + INTERCEPT;
}
function fahrenheitToCelsius(f) {
	return (f - INTERCEPT) * SLOPE;
}

runTestCases(celsiusToFahrenheit, fahrenheitToCelsius);
