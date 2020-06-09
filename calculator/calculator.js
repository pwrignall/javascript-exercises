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

function multiply() {

}

function power() {

}

function factorial() {

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}