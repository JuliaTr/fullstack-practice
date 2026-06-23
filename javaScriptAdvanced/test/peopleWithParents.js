function getPeopleWithParents(people) {
  const copyPeople = people.map((person) => ({ ...person }));

  copyPeople.forEach((person) => {
    const fatherIndex = people.findIndex((personSearch) => {
      return personSearch.name === person.father;
    });

    if (fatherIndex >= 0) {
      person.father = copyPeople[fatherIndex];
    }
  });

  copyPeople.forEach((person) => {
    const motherIndex = people.findIndex((personSearch) => {
      return personSearch.name === person.mother;
    });

    if (motherIndex >= 0) {
      person.mother = copyPeople[motherIndex];
    }
  });

  return copyPeople;
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

console.log(people);
/*
[
  {
    name: 'Carolus Haverbeke',
    father: 'Carel Haverbeke',
    mother: 'Maria van Brussel',
    sex: 'm',
    born: 1832,
    died: 1905
  },
  {
    name: 'Emma de Milliano',
    father: 'Carolus Haverbeke',
    mother: 'Sophia van Damme',
    sex: 'f',
    born: 1876,
    died: 1956
  }
]
*/

// Works as expected



// Experiments:
// doesn't update with object from RESULTING array
function getPeopleWithParents(people) {
  return people.map((person) => {
    const copyPerson = { ...person };

    const fatherIndex = people.findIndex((personSearch) => {
      return personSearch.name === person.father;
    });

    if (fatherIndex >= 0) {
      copyPerson.father = people[fatherIndex];
    }

    const motherIndex = people.findIndex((personSearch) => {
      return personSearch.name === person.mother;
    });

    if (motherIndex >= 0) {
      copyPerson.mother = people[motherIndex];
    }

    return copyPerson;
  });
}
