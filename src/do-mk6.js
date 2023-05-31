// import { testCases } from './testcases.js';
import { DO_IF, DO_WITH, IDENTITY } from './do-notation.js';

// Generic operations
function addM(m) {
	return n => n + m;
}
function subM(m) {
	return n => n - m;
}
function mulM(m) {
	return n => n * m;
}
function divM(m) {
	return n => n / m;
}
function extractTemp(tempStr) {
	return parseInt(tempStr);
}
function isCelsius(tempStr) {
	return tempStr.at(-1).toUpperCase() === 'C';
}
function convertToString(scale) {
	return n => `${n}\u00B0${scale.toUpperCase()}`;
}

// Conversion functions
const cToF = [extractTemp, mulM(9), divM(5), addM(32), convertToString('F')];
const fToC = [extractTemp, subM(32), mulM(5), divM(9), convertToString('C')];
const convertTemporature = DO_IF(isCelsius).THEN_DO(cToF).ELSE_DO(fToC);

// console.log(convertTemporature('100°C'));

const testCases = [
	{ name: 'cToF', func: cToF, input: '100°C', expected: '212°F' },
	{ name: 'cToF', func: cToF, input: '0°C', expected: '32°F' },
	{ name: 'cToF', func: cToF, input: '-40°C', expected: '-40°F' },
	{ name: 'fToC', func: fToC, input: '212°F', expected: '100°C' },
	{ name: 'fToC', func: fToC, input: '32°F', expected: '0°C' },
	{ name: 'fToC', func: fToC, input: '-40°F', expected: '-40°C' },
];

console.log(
	DO_WITH(
		_ => _.map(__ => __.input),
		_ => ({ input: _, output: convertTemporature(_) })
	)(testCases)
);
