// Create the makeStorage function

function makeStorage() {
  const storage = {};

  const updateStorage = {
    setValue(key, value) {
      return storage[key] = value;
    },

    getValue(key) {
      return storage[key];
    },
  };

  return updateStorage;
}

const storage = makeStorage();

storage.setValue('name', 'Peter');
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