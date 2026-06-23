const people = [
  {
    "name": "Bernardus de Causmaecker",
    "sex": "m",
    "born": 1721,
    "died": 1789,
    "father": "Lieven de Causmaecker",
    "mother": "Livina Haverbeke"
  },
  {
    "name": "Lieven de Causmaecker",
    "sex": "m",
    "born": 1696,
    "died": 1724,
    "father": "Carel de Causmaecker",
    "mother": "Joanna Claes"
  },
  // ...
]

function createIsMyParentFilter(name) {
  return (person, _, people) => {
    // Find person by `name`
    const personFound = people.find((personSearch) => {
      return personSearch.name === name;
    });

    if (personFound === undefined) {
      return;
    }

    // Return condition to filter to remain only parents
    return personFound.mother === person.name
              || personFound.father === person.name;
  };
}

const callback = createIsMyParentFilter('Carolus Haverbeke');
const parents = people.filter(callback); // only parents of 'Carolus Haverbeke'
console.log(parents);

const callback2 = createIsMyParentFilter('Someone Unknown');
const parents2 = people.filter(callback2); // [], no person with such a name
console.log(parents2);
