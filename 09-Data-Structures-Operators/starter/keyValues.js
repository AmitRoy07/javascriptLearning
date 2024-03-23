'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 2, time = '22:00', address }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPrize(ing1, ing2, ing3) {
    console.log(`You have order prize with ${ing1} and ${ing2} and ${ing3}`);
  },

  orderPaste: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

console.log('[[[[[[[[[[[]]]]]]]]]]]]');

// for (const k of Object.keys(restaurant)) {
//   console.log(k);
// }

// property Names
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

console.log(`we are open on ${properties.length} days`);

let openStr = `we are open on ${properties.length} days: `;

for (const days of properties) {
  openStr += ` ${days},`;
}

console.log(openStr);

// properties values
const values = Object.values(restaurant.openingHours);
console.log(values);

// objects entries

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  //   console.log(el.open);
  console.log(`On ${day} we open on ${open}`);
}
