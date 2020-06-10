function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	return array.length ? array.reduce((total, current) => total + current) : 0;
}

function multiply(array) {
	return array.length ? array.reduce((total, current) => total * current) : 0;
}

function power(a, b) {
	return a ** b;
}

function factorial(n) {
	if (n == 0) return 1;
	let runningtotal = 1;
	for (i = n; i > 0; i--) {
		runningtotal *= i;
	}
	return runningtotal;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}