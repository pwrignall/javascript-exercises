const removeFromArray = function (array) {

    let elementsToRemove = [...arguments];
    elementsToRemove.shift();

    for (let i = 0; i < elementsToRemove.length; i++) {
        let elementPosition = array.indexOf(elementsToRemove[i]);
        if (elementPosition == -1) continue;
        array.splice(elementPosition, 1);
    }
    return array;
}

module.exports = removeFromArray