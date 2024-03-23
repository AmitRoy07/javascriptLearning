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

  orderPaste: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Use any data type, return Any data type, short-Circuited
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello world!' || 23 || null);

// restaurant.numGus = 21;
// const guest1 = restaurant.numGus ? restaurant.numGus : 10;
// console.log(guest1);

// const guest2 = restaurant.numGus || 10;
// console.log(guest2);

// console.log('========And----------');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');
// console.log(7 && 'jonas' && 'null' && 23);

// if (restaurant.orderPaste) {
//   restaurant.orderPaste('hhhhh', 'rlsrf');
// }

// =============== Nullish Coalescing ============

restaurant.numGus = 0;
// const guest1 = restaurant.numGus ? restaurant.numGus : 10;
// console.log(guest1);

const guest2 = restaurant.numGus || 10;
console.log(guest2);

const guest3 = restaurant.numGus ?? 10;
console.log(guest3);
