import runTestCases from './testcases.js';

import { DO } from './do-notation.js';

import { specificOperations } from './operations.js';

const { add32, div5, mul9, div9, mul5, sub32 } = specificOperations;

// Conversion functions
const cToF = DO(mul9, div5, add32);

const fToC_Operations = [sub32, mul5, div9];
const fToC = DO(fToC_Operations);

runTestCases(cToF, fToC);
