import runTestCases from './testcases.js';

// Generic operations
function addM(m) {
    return (n) => n + m;
}
function subM(m) {
    return (n) => n - m;
}
function mulM(m) {
    return (n) => n * m;
}
function divM(m) {
    return (n) => n / m;
}

// Conversion functions
const cToF = DO(
    mulM(9),
    divM(5),
    addM(32),
);

const fToC = DO(
    subM(32),
    mulM(5),
    divM(9),
);

runTestCases(cToF, fToC);

function DO(...fns) {
    return (input) => fns.reduce(
        (output, fn) => fn(output),
        input
    );
}
