// Create the makeStorage function

function makeStorage() {
  const data = {};

  const updateStorage = {
    // `setValue` has access to `data` through a closure;
    // property is stored in `data`, not in `updateStorage`;
    // remains intact; still a function
    setValue(key, value) {
      return data[key] = value;
    },

    // remains intact; still a function
    getValue(key) {
      return data[key];
    },
  };

  return updateStorage;
}

// `storage` refers to `updateStorage`
const storage = makeStorage();

storage.setValue('name', 'Peter');
// we're reaaly calling `storage.setValue('name', 'Peter')`

storage.setValue('age', 30);

console.log(storage.getValue('name')); // Peter
console.log(storage.getValue('age')); // 30

storage.setValue('age', 31);
console.log(storage.getValue('age')); // 31

console.log(storage.getValue('occupation')); // undefined

// storage must work with ANY string keys as well as getValue and setValue keys:

console.log(storage.getValue('getValue')); // undefined
storage.setValue('getValue', 42);
console.log(storage.getValue('getValue')); // 42

storage.setValue('setValue', 'hello');
storage.setValue('x', 10);
console.log(storage.getValue('x')); // 10
console.log(storage.getValue('setValue')); // 'hello'

// Works as expected

/*
storage (private data)
├── name: "Peter"
├── age: 31
├── getValue: 42
└── setValue: "hello"

updateStorage (public API)
├── getValue()  ← still a function
└── setValue()  ← still a function
*/




// Experiments:
// Doesn't work; properties and methods are in the same object
function makeStorage() {
  const storage = {};

  // keys with the same name as methods overwrite methods
  storage.setValue = (key, value) => storage[key] = value;
  storage.getValue = (key) => storage[key];

  return storage;
}

/*
storage
├── getValue: 42        ← method destroyed
├── setValue: "hello"   ← method destroyed
├── name: "Peter"
└── age: 31
*/
