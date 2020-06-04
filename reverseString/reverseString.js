const reverseString = function(string) {
    let originalString = string;
    let stringArray = string.split('');
    let reversedArray = stringArray.reverse();
    return reversedArray.join('');
}

module.exports = reverseString
