function makeSecret(secret, password) {
  let countWrong = 0;
  let ourSecret = secret;
  let correctPassword = password;

  const storage = () => {
    return 'Absolutely not a secret thing';
  };

  storage.getSecret = (gotPassword) => {
    if (countWrong < 3 && gotPassword === correctPassword) {
      countWrong = 0;

      return ourSecret;
    }

    if (countWrong > 2) {
      return null;
    }

    if (gotPassword !== correctPassword) {
      countWrong += 1;

      return 'Wrong password!';
    }
  };

  storage.setSecret = (newSecret, newPassword) => {
    countWrong = 0;

    ourSecret = newSecret;
    correctPassword = newPassword;
  };

  return storage;
}

const storage = makeSecret('Santa exists!', 'qwerty')
console.log(storage()); // 'Absolutely not a secret thing'

console.log(storage.getSecret('qwerty')); // 'Santa exists!'

console.log(storage.getSecret()); // 'Wrong password!'
console.log(storage.getSecret('12345')); // 'Wrong password!'
console.log(storage.getSecret('qwerty')); // 'Santa exists!'

console.log(storage.getSecret(1)); // 'Wrong password!'
console.log(storage.getSecret(2)); // 'Wrong password!'
console.log(storage.getSecret(3)); // 'Wrong password!'
console.log(storage.getSecret(4)); // null
console.log(storage.getSecret('qwerty')); // null

storage.setSecret('Mate academy is awesome!', 'qwe123')

console.log(storage.getSecret('qwerty')); // 'Wrong password!'
console.log(storage.getSecret()); // 'Wrong password!'
console.log(storage.getSecret('qwe123')); // 'Mate academy is awesome!'
