export const testCases = [
	{
		cToF: [
			{ input: 100, expected: 212 },
			{ input: 0, expected: 32 },
			{ input: -40, expected: -40 },
		],
		fToC: [
			{ input: 212, expected: 100 },
			{ input: 32, expected: 0 },
			{ input: -40, expected: -40 },
		],
	},
	{
		cToF: [
			{ input: '100°C', expected: 212 },
			{ input: '0°C', expected: 32 },
			{ input: '-40°C', expected: -40 },
		],
		fToC: [
			{ input: '212°F', expected: 100 },
			{ input: '32°F', expected: 0 },
			{ input: '-40°F', expected: -40 },
		],
	},
	{
		cToF: [
			{ input: '100°C', expected: '212°F' },
			{ input: '0°C', expected: '32°F' },
			{ input: '-40°C', expected: '-40°F' },
		],
		fToC: [
			{ input: '212°F', expected: '100°C' },
			{ input: '32°F', expected: '0°C' },
			{ input: '-40°F', expected: '-40°C' },
		],
	},
	['212°F', '32°F', '-40°F', '100°C', '0°C', '-40°C'],
	{
		'100°C': '212°F',
		'0°C': '32°F',
		'-40°C': '-40°F',
		'212°F': '100°C',
		'32°F': '0°C',
		'-40°F': '-40°C',
	},
];

export default function runTestCases(cToF, fToC, testSet = 0) {
	const testCaseMapping =
		(name, func) =>
		({ input, expected }) => ({ name, func, input, expected });
	const _testCases = [
		...testCases[testSet].cToF.map(testCaseMapping('cToF', cToF)),
		...testCases[testSet].fToC.map(testCaseMapping('fToC', fToC)),
	];
	console.table(
		_testCases.map(({ name, func, input, expected }) => {
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

export function presentTestCases(converter) {
	console.table(
		[...testCases[2].cToF, ...testCases[2].fToC].map(({ input, expected }) => {
			const actual = converter(input);
			return {
				input,
				output: actual,
				result: expected === actual,
			};
		})
	);
}
