export function DO(...fns) {
	return input => fns.flat().reduce((output, fn) => fn(output), input);
}
