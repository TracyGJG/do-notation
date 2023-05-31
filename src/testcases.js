export const testCases = [
	[
		{ name: 'cToF', func: cToF, input: 100, expected: 212 },
		{ name: 'cToF', func: cToF, input: 0, expected: 32 },
		{ name: 'cToF', func: cToF, input: -40, expected: -40 },
		{ name: 'fToC', func: fToC, input: 212, expected: 100 },
		{ name: 'fToC', func: fToC, input: 32, expected: 0 },
		{ name: 'fToC', func: fToC, input: -40, expected: -40 },
	],
	[
		{ name: 'cToF', func: cToF, input: '100°C', expected: 212 },
		{ name: 'cToF', func: cToF, input: '0°C', expected: 32 },
		{ name: 'cToF', func: cToF, input: '-40°C', expected: -40 },
		{ name: 'fToC', func: fToC, input: '212°F', expected: 100 },
		{ name: 'fToC', func: fToC, input: '32°F', expected: 0 },
		{ name: 'fToC', func: fToC, input: '-40°F', expected: -40 },
	],
	[
		{ name: 'cToF', func: cToF, input: '100°C', expected: '212°F' },
		{ name: 'cToF', func: cToF, input: '0°C', expected: '32°F' },
		{ name: 'cToF', func: cToF, input: '-40°C', expected: '-40°F' },
		{ name: 'fToC', func: fToC, input: '212°F', expected: '100°C' },
		{ name: 'fToC', func: fToC, input: '32°F', expected: '0°C' },
		{ name: 'fToC', func: fToC, input: '-40°F', expected: '-40°C' },
	],
];

export default function runTestCases(cToF, fToC, testSet = 0) {
	console.table(
		testCases[testSet].map(({ name, func, input, expected }) => {
			const actual = func(input);
			const result = actual === expected;
			return {
				'Test case': `${name} of ${input}`,
				expected,
				actual,
				result,
			};
		})
	);
}
