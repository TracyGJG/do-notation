import runTestCases from './testcases.js';

import { specificOperations } from './operations.js';

const { add32, div5, mul9, div9, mul5, sub32 } = specificOperations;

// Conversion functions
function cToF(c) {
	return add32(div5(mul9(c)));
}
function fToC(f) {
	return div9(mul5(sub32(f)));
}

runTestCases(cToF, fToC);
