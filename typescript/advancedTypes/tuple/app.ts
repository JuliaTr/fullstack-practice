/* 
Tuple is a non-regular array. The order of values maybe changed.

To maintain the necessary order: 
`[string, number, boolean?]`:
- `string` is for the first element
- `number` is for the second element
- `boolean?` is optional for the third element; it may be absolutely absent

But we cannot pass an array where there will be more than three or fewer than two elements.
*/

// const data: [string, number, boolean?] = ['coach', 39, false];


// // Custom type
// type UserData = [string, number, boolean?];
// const data: UserData = ['coach', 39, false];

// With destructuring:
type UserData = [string, number, boolean?];
const [role, age1, hasGroup = false]: UserData = ['coach', 39, false];

/*
In React such hook will always return `useState`:
const [value, setValue] = useState(0);

type UseStateParts = [number, (value: number) => void];
*/




// // More examples:
// type UserData = [string, number, boolean?];

// const user1: UserData = ['Alice', 33, true];
// const user2: UssrData = ['Alice', 33];

// function printUserInfo([name, age, isMarried = false]: UserData): void {
//   const maritalStatus = isMarried ? 'married' : 'not marrid';

//   console.log(`${name} (${age} years) is ${maritalStatus}`);
// }