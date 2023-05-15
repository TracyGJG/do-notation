export default function runTestCases(cToF, fToC, testSet = 0) {
    const testCases = [[
        { name: "cToF", func: cToF, input: 100, expected: 212 },
        { name: "cToF", func: cToF, input: 0, expected: 32 },
        { name: "cToF", func: cToF, input: -40, expected: -40 },
        { name: "fToC", func: fToC, input: 212, expected: 100 },
        { name: "fToC", func: fToC, input: 32, expected: 0 },
        { name: "fToC", func: fToC, input: -40, expected: -40 },
      ],
      [
        { name: "cToF", func: cToF, input: '100C', expected: 212 },
        { name: "cToF", func: cToF, input: '0C', expected: 32 },
        { name: "cToF", func: cToF, input: '-40C', expected: -40 },
        { name: "fToC", func: fToC, input: '212F', expected: 100 },
        { name: "fToC", func: fToC, input: '32F', expected: 0 },
        { name: "fToC", func: fToC, input: '-40F', expected: -40 },
      ],
    ];
      
    console.table(
    testCases[testSet].map(({ name, func, input, expected }) => {
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
}