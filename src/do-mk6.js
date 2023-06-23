import { testCases } from './testcases.js';

import { DO_IF, DO_WITH, IDENTITY } from './do-notation.js';

import { genericOperations } from './operations.js';

const { addM, subM, mulM, divM } = genericOperations;

function extractTemp(tempStr) {
	return parseInt(tempStr);
}
function isCelsius(tempStr) {
	return tempStr.at(-1).toUpperCase() === 'C';
}
function convertToString(scale) {
	return n => `${n}°${scale.toUpperCase()}`;
}

// Conversion functions
const celsiusToFahrenheit = [
	extractTemp,
	mulM(9),
	divM(5),
	addM(32),
	convertToString('F'),
];
const fahrenheitToCelsius = [
	extractTemp,
	subM(32),
	mulM(5),
	divM(9),
	convertToString('C'),
];

const convertTemporature = DO_IF(isCelsius)
	.THEN_DO(celsiusToFahrenheit)
	.ELSE_DO(fahrenheitToCelsius);

const extractInputs = _ =>
	Object.entries(_).map(([input, expected]) => ({
		input,
		expected,
	}));
const convertInput = _ => ({ ..._, actual: convertTemporature(_.input) });
const evaluateResult = _ => ({ ..._, result: _.expected === _.actual });
console.table(
	DO_WITH(extractInputs, convertInput, IDENTITY, evaluateResult)(testCases[4])
);
