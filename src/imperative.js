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

const testCases = [
  { name: "cToF", func: cToF, input: 100, expected: 212 },
  { name: "cToF", func: cToF, input: 0, expected: 32 },
  { name: "cToF", func: cToF, input: -40, expected: -40 },
  { name: "fToC", func: fToC, input: 212, expected: 100 },
  { name: "fToC", func: fToC, input: 32, expected: 0 },
  { name: "fToC", func: fToC, input: -40, expected: -40 },
];

console.table(
  testCases.map(({ name, func, input, expected }) => {
    const actual = func(input);
    const result = actual === expected;
    return {
      "Test case": `${name} of ${input}`,
      expected,
      actual,
      result,
    };
  })
);
