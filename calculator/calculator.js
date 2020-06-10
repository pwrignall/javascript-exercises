function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	return array.reduce((total, current) => {
		return total + current;
	}, 0)
}

function multiply(array) {
	return array.reduce((total, current) => {
		return total * current;
	})
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	if (a == 0) {
		return 1;
	} else {
		let runningtotal = a;
		for (i = a - 1; i > 0; i--) {
			runningtotal *= i;
		}
		return runningtotal;
	};
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}