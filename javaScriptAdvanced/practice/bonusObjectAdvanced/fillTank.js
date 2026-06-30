/*
Create the function `fillTank` that:

- Takes the `customer` object, `fuelPrice` per gallon, and 
  the `amount` of fuel the customer wants to buy.
- Refills the fuel and withdraws money from the customer's 
  account, where:

-x If the amount isn't given, fill the whole tank.
-x If the amount is greater than the tank can accommodate, 
  adjust the number of gallons to prevent overfilling.
  (Note: contradicts with test case)

- Fill up ONLY as much as the customer can afford.
-x Round the amount by removing the decimal part.
-x If the ordered amount is less than 2 gallons, DON'T 
  pour at all.
-x Round the price of the purchased fuel to the nearest cent.

To round the amount of fuel, use 
`Math.floor(value * 10) / 10`.

To round the price, use `Math.round(value * 100) / 100`
*/

const MIN_AMOUNT_GALLONS = 2;

function fillTank(customer, fuelPrice, amount) {
  let toFill = amount;

  if (customer.money === 0) {
    console.log('print1')
    return customer;
  }

  // Decline if the ordered amount is less than 2 gallons
  if (toFill < MIN_AMOUNT_GALLONS) {
    console.log('print2')
    return customer;
  }

  let amountToPay = Math.round((toFill * fuelPrice) * 100) / 100;
  
  // Decline if the customer can buy less than 2 liters to fuel
  const amountToPayFor2Liters = fuelPrice * MIN_AMOUNT_GALLONS;

  if (customer.money < amountToPayFor2Liters) {
    console.log('print3')
    return customer;
  }
  
  // Decline if tank capacity is < 2 liters
  const customerFuelRemains = customer.vehicle.fuelRemains;
  const tankCapacity = customer.vehicle.maxTankCapacity;
  const capacity = tankCapacity - customerFuelRemains;
  
  if (capacity < MIN_AMOUNT_GALLONS) {
    console.log('print4')
    return customer;
  }

  // Pour not more than client can buy
  if (amountToPay > customer.money) {
    console.log('print5');

    const canBuyLiters = (customer.money * toFill) / amountToPay;

    customer.vehicle.fuelRemains = customerFuelRemains + canBuyLiters;
    customer.money = 0;

    return customer;
  }

  // If amount isn't defined
  if (toFill === undefined) {
    console.log('print6');

    toFill = capacity;

    customer.vehicle.fuelRemains = customerFuelRemains + capacity;
    amountToPay = Math.round((toFill * fuelPrice) * 100) / 100;
    customer.money = customer.money - amountToPay;

    return customer;
  }

  // If tank capacity is enough
  toFill = Math.floor(amount * 10) / 10;
  const totalFuelRemains = toFill + customerFuelRemains;
  
  if (totalFuelRemains <= capacity) {
    console.log('print7');
    customer.vehicle.fuelRemains = totalFuelRemains;
  }
  
  // Fill the tank fully if the customer wants to buy more 
  // fuel than his vehicle can accommodate
  if (toFill > capacity) {
    console.log('print8');

    toFill = capacity;
    customer.vehicle.fuelRemains = tankCapacity;
  }
  
  amountToPay = Math.round((toFill * fuelPrice) * 100) / 100;
  customer.money = customer.money - amountToPay;

  return customer;
}

let customer = {
  money: 3000,
  vehicle: {
    maxTankCapacity: 40,
    fuelRemains: 8,
  },
};

console.log(fillTank(customer, 10, 20));
/*
{
  money: 2800,
  vehicle: {
    maxTankCapacity: 40,
    fuelRemains: 28,
  },
}
*/

customer = {
  money: 1000,
  vehicle: {
    maxTankCapacity: 65,
    fuelRemains: 2,
  },
};

console.log(fillTank(customer, 10));
/*
{
  money: 370,
  vehicle: {
    maxTankCapacity: 65,
    fuelRemains: 65,
  },
}
*/


// decline an operation if the tank can accomodate less 
// then 2 liters of fuel
customer = {
  money: 810,
  vehicle: {
    maxTankCapacity: 45,
    fuelRemains: 44,
  },
};

console.log(fillTank(customer, 10, 20));
/*
{
  money: 810,
  vehicle: {
    maxTankCapacity: 45,
    fuelRemains: 44,
  },
}
*/


// decline an operation if the customer can buy less than 2 
// liters of fuel
customer = {
  money: 19,
  vehicle: {
    maxTankCapacity: 45,
    fuelRemains: 30,
  },
};

console.log(fillTank(customer, 10, 20));
/*
{
  money: 19,
  vehicle: {
    maxTankCapacity: 45,
    fuelRemains: 30,
  },
}
// */


// pour not more fuel than client can buy
customer = {
  money: 360,
  vehicle: {
    maxTankCapacity: 45,
    fuelRemains: 2,
  },
};

console.log(fillTank(customer, 10, 43));
/*
{
  money: 0,
  vehicle: {
    maxTankCapacity: 45,
    fuelRemains: 38,
  },
}
*/

// fill the tank fully if the customer wants to buy more 
// fuel than his vehicle can accommodate
customer = {
  money: 2000,
  vehicle: {
    maxTankCapacity: 40,
    fuelRemains: 32,
  },
};

console.log(fillTank(customer, 8, 23));
/*
{
  money: 1936,
  vehicle: {
    maxTankCapacity: 40,
    fuelRemains: 40,
  },
};
*/



// Experiment:
/*
// If tank capacity isn't enough, 
// adjust the number of gallons to prevent overfilling.
  if (toFill > capacity) {
    customer.vehicle.fuelRemains = toFill - capacity;
  }
*/
