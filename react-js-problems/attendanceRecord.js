/*
Create a function `isAwardEligible` that:

1. Takes a string `attendance` representing an attendance record. The string can contain any number of the following three characters, which signify whether the student was absent (`A`), late (`L`), or present (`P`).
2. Returns `true` if the students is eligible for an attendance award, otherwise `false`. To receive an award:
- The student can only be absent once.
- The student can't be late more than two times in a row.
*/

function isAwardEligible(attendance) {
  let absent = '';
  let late = '';
  
  for (char of attendance) {
    if (char === 'A') {
      absent += 'A';
    }

    if (absent.length > 1) {
      return false;
    }

    if ((char === 'P' || char === 'A') && late != '') {
      late = '';
    }
    
    if (char === 'L') {
      late += 'L';
    }

    if (late.length > 2) {
      return false;
    }
  }

  return true;
}

console.log(isAwardEligible('PPLPPAPL')); //true // Both criteria are met
console.log(isAwardEligible('PPAPLAPPP')); // false // Student was absent more than once
console.log(isAwardEligible('LLPAPPLLLP'));// false // Student was late for 3 consecutive days

// works as expected


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
