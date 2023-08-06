import { presentTestCases } from './testcases.js';

import { DO, IF } from './do-notation.js';

import { genericOperations } from './operations.js';

const { addM, subM, mulM, divM } = genericOperations;

function extractTemp(tempStr) {
	const [temp, scale] = tempStr.split(/°/);
	return { num: +temp, scale };
}
function isCelsius(tempObj) {
	return tempObj.scale.toUpperCase() === 'C';
}
function processObject(func) {
	return tempObj => ({
		num: func(tempObj.num),
		scale: tempObj.scale,
	});
}
function convertToString(tempObj) {
	const newScale = isCelsius(tempObj) ? 'F' : 'C';
	return `${tempObj.num}°${newScale}`;
}

// Conversion functions
const celsiusToFahrenheit = DO(
	processObject(mulM(9)),
	processObject(divM(5)),
	processObject(addM(32))
);
const fahrenheitToCelsius = DO(
	processObject(subM(32)),
	processObject(mulM(5)),
	processObject(divM(9))
);

const convertTemperature = DO(
	extractTemp,
	IF(isCelsius, celsiusToFahrenheit, fahrenheitToCelsius),
	convertToString
);

presentTestCases(convertTemperature);
