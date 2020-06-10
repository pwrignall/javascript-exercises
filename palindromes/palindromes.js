const palindromes = function (string) {
    stringArray = [...string.trim()
        .toLowerCase()];

    const lettersRegExp = /[a-z]/;
    const charArray = stringArray.filter(letter => lettersRegExp.test(letter));
    let revCharArray = [...charArray];
    revCharArray.reverse();

    return charArray.join('') === revCharArray.join('');
}

module.exports = palindromes
