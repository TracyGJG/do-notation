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

// Specific operations
const add32 = addM(32);
const div5 = divM(5);
const mul9 = mulM(9);
const div9 = divM(9);
const mul5 = mulM(5);
const sub32 = subM(32);

// Conversion functions
const cToF = DO(mul9, div5, add32);

const fToC_Operations = [sub32, mul5, div9];
const fToC = DO(fToC_Operations);

runTestCases(cToF, fToC);
