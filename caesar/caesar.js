const caesar = function (string, n) {
    const stringArray = [...string];
    n = n % 26;

    function caesarifyLetter(character) {
        const regExpAlpha = /[A-Za-z]/
        const lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const upperAlphabet = lowerAlphabet.map(letter => letter.toUpperCase());

        function convertLetter(character, n, alphabet) {
            const index = alphabet.findIndex(someLetter => someLetter === character);
            let newIndex;
            if (index + n > 25) {
                newIndex = index + n - 26;
            } else if (index + n < 0) {
                newIndex = index + n + 26;
            } else {
                newIndex = index + n;
            };
            return alphabet[newIndex];
        };

        if (!regExpAlpha.test(character)) return character;

        if (character === character.toUpperCase()) {
            return convertLetter(character, n, upperAlphabet);
        } else {
            return convertLetter(character, n, lowerAlphabet);
        }
    };

    const convertedArray = stringArray.map((character) => caesarifyLetter(character));
    return convertedArray.join('');
}

module.exports = caesar
