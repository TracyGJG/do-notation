import runTestCases from './testcases.js';
import { DO } from './do-notation.js';

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
	return parseInt(tempStr, 10);
}

// Conversion functions
const cToF = DO(extractTemp, mulM(9), divM(5), addM(32));

const fToC_Operations = [extractTemp, subM(32), mulM(5), divM(9)];
const fToC = DO(fToC_Operations);

runTestCases(cToF, fToC, 1);
