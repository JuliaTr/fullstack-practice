function makeSpyListener() {
  let words = [];

  const listener = (str) => {
    if (str === undefined) {
      return words;
    }

    words.push(str);

    return words;
  };

  listener.clear = () => {
    words = [];

    return 'Transferring data... Deleting data... Clear!';
  };

  return listener;
}

const listener = makeSpyListener();

console.log(listener()); // []
console.log(listener(`Mate Robot Factory is weird`));
console.log(listener(`It’s a spy robot!!! Catch him!`));

console.log(listener()); // [`Mate Robot Factory is weird`, `It’s a spy robot!!! Catch him!`]
console.log(listener.clear()); // `Transferring data... Deleting data... Clear!`
console.log(listener()); // []
