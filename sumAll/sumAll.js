const sumAll = function (a, b) {

    if (typeof a == 'number' && typeof b == 'number' &&
        a >= 0 && b >= 0) {
        let m;
        let n;
        if (a < b) {
            m = a;
            n = b;
        } else {
            m = b;
            n = a;
        }
        let sum = m + n;
        for (let i = m + 1; i < n; i++) {
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR';
    }
}

module.exports = sumAll
