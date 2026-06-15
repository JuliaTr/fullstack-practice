function makePackage(connectionsLimit) {
  let connections = connectionsLimit;

  return function connect() {
    if (connections > 0) {
      connections--;
      return `${connections} connections left`;
    }

    return 'You reached the connections limit!';
  };
}

const connect = makePackage(3);

console.log(connect()); // '2 connections left'
console.log(connect()); // '1 connections left'
console.log(connect()); // '0 connections left'
console.log(connect()); // 'You reached the connections limit!'
console.log(connect()); // 'You reached the connections limit!'
