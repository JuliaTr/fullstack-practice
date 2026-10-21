/*
Create a function `sortStudents` that:

1. Takes an array `students`, a sorting order `sortBy` of type `SortType`, and an `order` (`'asc'` by default or `'desc'`).
2. Returns a new array sorted accordingly. **Don't modify the original array.**

Types:

- `interface Student` — representing students:
{
  name: 'Jessica',
  surname: 'Buxton',
  age: 26,
  married: true,
  grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
}

- enum `SortType` — representing sorted type:
`Name`
`Surname`
`Age`
`Married`
`AverageGrade`

- type `SortOrder` with values `'asc'` and `'desc'`.

For sorting descendingly, don't use the `reverse` method. Instead, multiply comparison function's result in the `sort` method by `-1`.
*/

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

const students: object = [
  {
    name: 'Diana',
    surname: 'Dorsey',
    age: 24,
    married: false,
    grades: [3, 3, 4, 5, 4, 3, 5, 5],
  },
  {
    name: 'Christina',
    surname: 'Branscome',
    age: 23,
    married: true,
    grades: [4, 4, 4, 5, 5, 5, 5, 5],
  },
  {
    name: 'Willie',
    surname: 'Barrera',
    age: 22,
    married: false,
    grades: [3, 5, 5, 3, 3, 5, 4, 4],
  },
  {
    name: 'Douglas',
    surname: 'Paez',
    age: 23,
    married: true,
    grades: [5, 5, 5, 4, 5, 5, 5, 5],
  },
  {
    name: 'Richard',
    surname: 'Hall',
    age: 23,
    married: false,
    grades: [3, 2, 4, 5, 4, 3, 3, 3],
  },
  {
    name: 'Dale',
    surname: 'Gandy',
    age: 23,
    married: false,
    grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
  },
  {
    name: 'Lillian',
    surname: 'Quinn',
    age: 23,
    married: false,
    grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
  },
  {
    name: 'Jessica',
    surname: 'Buxton',
    age: 26,
    married: true,
    grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
  },
  {
    name: 'Pamela',
    surname: 'Casillas',
    age: 24,
    married: false,
    grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
  },
  {
    name: 'Glenn',
    surname: 'Thompson',
    age: 22,
    married: false,
    grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
  },
];


function sortStudents(students, SortType, Age): string[] {

}

// from youngest to oldest
const studentsByAge = sortStudents(students, SortType.Age, 'asc');

// // from oldest to youngest
// const studentsByAge = sortStudents(students, SortType.Age, 'desc');

// // from lowest average grade to highest
// const studentsByGrade = sortStudents(students, SortType.AverageGrade, 'asc');

// // Surnames from Z to A
// const studentsBySurnameDesc = sortStudents(students, SortType.Surname, 'desc');
