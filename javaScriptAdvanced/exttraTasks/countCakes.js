function countCakes(recipe, available) {
  for (const entry of Object.entries(recipe)) {
    if (!Object.hasOwn(available, entry[0])) {
      return 0;
    }

    if (entry[1] > available[entry[0]]) {
      return 0;
    }
  }

  return Math.floor(available.flour / recipe.flour);
}

console.log(
  countCakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
  ) // === 2
);

console.log(
  countCakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 },
  ) // === 0
);

// Works as expected
