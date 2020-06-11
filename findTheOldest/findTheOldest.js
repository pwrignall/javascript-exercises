let findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();
    people.map(person => {
        if (person.yearOfDeath) {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        } else {
            person['age'] = currentYear - person.yearOfBirth;
        }
    });
    const sortedPeople = people.sort((a, b) => a.age > b.age ? -1 : 1);
    return sortedPeople[0];
}

module.exports = findTheOldest
