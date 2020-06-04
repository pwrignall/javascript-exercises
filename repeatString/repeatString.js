const repeatString = function (string, n) {
    let repeatedString = '';

    if (n < 0) {
        return 'ERROR'
    } else {
        for (let i = 0; i < n; i++) {
            repeatedString += string;
        }
        return repeatedString;
    }
}

module.exports = repeatString
