// function print(value) {
//   console.log(`Value is ${value}`);
// }

// print(10);
// print('Hello');
// print(true);


function calculate(x, y, z) {
  if (typeof x !== 'number' 
      && typeof  y !== 'number' 
      && typeof z !== 'number'
  ) {
    throw new Error('Values are not valid');
  }

  const result = (x + y) * z;

  console.log(`(${x} + ${y}) * ${z} = ${result}`);
}

calculate(2, 3, 10);
calculate(1, 5, 2);

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const x = form.elements.x.value;
  const y = form.elements.y.value;
  const z = form.elements.z.value;

  calculate(x, y, z); 
  // throws error
});
