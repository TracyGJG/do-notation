import { DO_IF } from './do-notation.js';

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

console.log(convertTemporature('100°C'));
console.log(convertTemporature('32°F'));
