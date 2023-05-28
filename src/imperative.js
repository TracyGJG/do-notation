import runTestCases from './testcases.js';

function add(m, n) {
	return m + n;
}
function sub(m, n) {
	return m - n;
}
function mul(m, n) {
	return m * n;
}
function div(m, n) {
	return m / n;
}

function cToF(c) {
	return add(div(mul(c, 9), 5), 32);
}
function fToC(f) {
	return div(mul(sub(f, 32), 5), 9);
}

runTestCases(cToF, fToC);
