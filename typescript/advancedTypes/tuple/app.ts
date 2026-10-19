/* 
Tuple is a non-regular array. The order of values maybe changed.

To maintain the necessary order: 
`[string, number, boolean?]`:
- `string` is for the first element
- `number` is for the second element
- `boolean?` is optional for the third element; it may be absolutely absent
*/

// const data: [string, number, boolean?] = ['coach', 39, false];


// Custom type
type UserData = [string, number, boolean?];
const data: UserData = ['coach', 39, false];
