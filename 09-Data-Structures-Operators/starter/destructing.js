'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const arr = [1, 2, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// ---------- switching variables --------
// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main, secondary);

// ---------- switching variables with destructing --------
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starterItem, mainItem] = restaurant.order(2, 0);
console.log(starterItem, mainItem);

const nested = [2, 4, [5, 6, 7]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [x, y, z = 1] = [0, 9];

console.log(x, y, z);
