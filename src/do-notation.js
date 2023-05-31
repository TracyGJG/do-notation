export function DO(...fns) {
	return data => fns.flat().reduce((output, fn) => fn(output), data);
}

export function IF(condition, doTrue, doFalse) {
	return data => (condition(data) ? doTrue(data) : doFalse(data));
}

export function DO_IF(condition) {
	return {
		THEN_DO: doTrue => ({
			ELSE_DO: doFalse => data => DO(condition(data) ? doTrue : doFalse)(data),
		}),
	};
}

export function DO_WITH(forAll, ...fns) {
	return data =>
		forAll(data).reduce((_data, datum) => [..._data, DO(fns)(datum)], []);
}

export function IDENTITY(data) {
	return data;
}
