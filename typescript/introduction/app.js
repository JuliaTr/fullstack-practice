// function print(value) {
//   console.log(`Value is ${value}`);
// }

// print(10);
// print('Hello');
// print(true);


function calculate(x, y, z) {
  const result = (x + y) * z;

  console.log(`(${x} + ${y}) * ${z} = ${result}`);
}

calculate(2, 3, 10);
calculate(1, 5, 2);

// Everything we read from the page is always strings. So calculations will be wrong
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const x = form.element.x.value;
  const y = form.element.y.value;
  const z = form.elements.z.value;

  calculate(x, y, z); 
  // wrong calculations here, because `+` will be not addition, but concatenation
});
