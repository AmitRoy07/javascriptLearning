'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPrize: function (ing1, ing2, ing3) {
    console.log(`You have order prize with ${ing1} and ${ing2} and ${ing3}`);
  },
};

const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'biriyani'];
console.log(newMenu);

// copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays together
const menuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuCopy);

// Iterables: array, strings, maps, sets, NOT objects

const str = 'Amit';
const letters = [...str, '', 'c'];
console.log(letters);

// const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt('ing2'),
//   prompt('ingredient3'),
// ];
// console.log(ingredients);
// restaurant.orderPrize(...ingredients);

// object
const newRestaurant = { ...restaurant, founder: 'amit Roy' };

console.log(newRestaurant);
