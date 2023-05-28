import runTestCases from './testcases.js';

function cToF(c) {
	return (c * 9) / 5 + 32;
}
function fToC(f) {
	return ((f - 32) * 5) / 9;
}

runTestCases(cToF, fToC);
