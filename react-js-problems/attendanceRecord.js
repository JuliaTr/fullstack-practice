/*
Create a function `isAwardEligible` that:

1. Takes a string `attendance` representing an attendance record. The string can contain any number of the following three characters, which signify whether the student was absent (`A`), late (`L`), or present (`P`).
2. Returns `true` if the students is eligible for an attendance award, otherwise `false`. To receive an award:
- The student can only be absent once.
- The student can't be late more than two times in a row.
*/

function countAttendance(attendance) {
  const record = { 'A': 0, 'L': 0, 'P': 0 }

  for (char of attendance) {
    if (char === 'A') {
      record['A'] += 1;
    }

    if (char === 'L') {
      record['L'] += 1;
    }

    if (char === 'P') {
      record['P'] += 1;
    }
  }

  return record;
}

function isAwardEligible(attendance) {
  let isEligible = true;
  const attendanceRecord = countAttendance(attendance);
  console.log(attendanceRecord);

  // if (attendanceRecord['A'] < 2 && attendanceRecord['L'])


  return isEligible; 
}

console.log(isAwardEligible('PPLPPAPL')); //true // Both criteria are met
// console.log(isAwardEligible('PPAPLAPPP')); // false // Student was absent more than once
// console.log(isAwardEligible('LLPAPPLLLP'));// false // Student was late for 3 consecutive days



// // Experiments:
// function countAttendance(attendance) {
//   const record = { 'A': 0, 'L': 0, 'P': 0 }

//   for (char of attendance) {
//     if (char === 'A') {
//       record['A'] += 1;
//     }

//     if (char === 'L') {
//       record['L'] += 1;
//     }

//     if (char === 'P') {
//       record['P'] += 1;
//     }
//   }

//   return record;
// }
