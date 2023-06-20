// Generic operations
function addM(m) {
	return n => n + m;
}
function subM(m) {
	return n => n - m;
}
function mulM(m) {
	return n => n * m;
}
function divM(m) {
	return n => n / m;
}

export const genericOperations = {
	addM,
	subM,
	mulM,
	divM,
};

// Specific operations
const add32 = addM(32);
const div5 = divM(5);
const mul9 = mulM(9);
const div9 = divM(9);
const mul5 = mulM(5);
const sub32 = subM(32);

export const specificOperations = {
	add32,
	div5,
	mul9,
	div9,
	mul5,
	sub32,
};
