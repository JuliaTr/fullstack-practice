function getPeopleWithParents(people) {
  return people.map((person) => {
    const fatherFound = people.find((personSearch) => {
      return personSearch.name === person.father;
    });

    if (fatherFound) {
      person.father = fatherFound;
    }

    const motherFound = people.find((personSearch) => {
      return personSearch.name === person.mother;
    });

    if (motherFound) {
      person.father = fatherFound;
    }

    return person;
  });
}

const people = [
  {
    'name': 'Carolus Haverbeke',
    'father': 'Carel Haverbeke',
    'mother': 'Maria van Brussel',
    'sex': 'm',
    'born': 1832,
    'died': 1905,
  },
  {
    'name': 'Emma de Milliano',
    'father': 'Carolus Haverbeke',
    'mother': 'Sophia van Damme',
    'sex': 'f',
    'born': 1876,
    'died': 1956,
  },
  // ...
];

const peopleWithParents = getPeopleWithParents(people);

console.log(peopleWithParents);
// [
//   {
//     'name': 'Carolus Haverbeke',
//     'father': 'Carel Haverbeke',
//     'mother': 'Maria van Brussel',
//     'sex': 'm',
//     'born': 1832,
//     'died': 1905,
//   },
//   {
//     'name': 'Emma de Milliano',
//     'father': peopleWithParents[0], // a link to the object representing Carolus Haverbeke
//     'mother': 'Sophia van Damme', // if Sophia van Damme isn't in the people array
//     'sex': 'f',
//     'born': 1876,
//     'died': 1956,
//   },
//   // ...
// ]

