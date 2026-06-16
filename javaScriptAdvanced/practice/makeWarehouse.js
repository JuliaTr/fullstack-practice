function makeWarehouse(goods) {
  let allStuff = goods;

  return function warehouse(...args) {
    const statistics = {
      totalWeight: 0,
      averageWeight: 0,
    };
    
    if (Array.isArray(allStuff)
        && allStuff.length === 0
        && args.length === 0) {
      return statistics;
    }

    if (allStuff === undefined && args.length > 0) {
      allStuff = [];
    }

    if (allStuff === undefined && args.length === 0) {
      return statistics;
    }
    
    allStuff = [...allStuff, ...args];

    const total = Math.round(
      allStuff.reduce((sum, num) => sum + num, 0),
    );
    const average = Math.round(total / allStuff.length);

    statistics.totalWeight = total;
    statistics.averageWeight = average;

    return statistics;
  };
}

const  firstWarehouse = makeWarehouse([10, 20])
console.log(firstWarehouse()); // { totalWeight: 30, averageWeight: 15 }

firstWarehouse(10, 20, 30, 40, 10, 10);
firstWarehouse(56, 44);
console.log(firstWarehouse()); // { totalWeight: 250, averageWeight: 25 }

const secondWarehouse = makeWarehouse([10])
console.log(secondWarehouse()); // { totalWeight: 10, averageWeight: 10 }
console.log(firstWarehouse()); // { totalWeight: 250, averageWeight: 25 }

const warehouse = makeWarehouse();
warehouse(20, 50, 110);
console.log(warehouse()); // { totalWeight: 180, averageWeight: 60, }

const warehouse2 = makeWarehouse([]);
console.log(warehouse2()); // { totalWeight: 0, averageWeight: 0 }

const warehouse3 = makeWarehouse();
console.log(warehouse3()); // { totalWeight: 0, averageWeight: 0 }

// Works as expected
