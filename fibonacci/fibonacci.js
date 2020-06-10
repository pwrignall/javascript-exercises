const fibonacci = function (n) {
    // const phi = ((1 + Math.sqrt(5)) / 2)
    // if (n >= 0) {
    //     return Math.floor((phi ** n / Math.sqrt(5)) + (1 / 2));
    // } else {
    //     return "OOPS";
    // }

    if (n < 0) return 'OOPS';
    if (n == 0) return 0;
    let i = 1;
    let a = 0;
    let b = 1;
    let fib;
    do {
        fib = a + b;
        a = b;
        b = fib;
        i++;
    } while (i < n)
    return fib;
}

module.exports = fibonacci
