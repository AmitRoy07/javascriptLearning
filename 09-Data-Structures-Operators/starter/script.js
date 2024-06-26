'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

  order: function(starterIndex, mainIndxs){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndxs]];
  },

  orderDelivery: function({
    time = '20.20', 
    address, 
    starterIndex = 1,
    mainIndex = 0,
  }){
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
      );
  },

  orderPasta: function(ing1, ings2, ing3){
    console.log(`Here is your declicious pasta with ${ing1}, ${ings2} and ${ing3}`);
  }

};

/*

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole. 21',
  starterIndex: 1,
})


// Object destructing

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a,b);

//nested object

// const {fri: {open: o, close: c}}= openingHours;
// console.log(open, close);
// console.log(o,c);

/*

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;

// console.log(x , y, z);


let [main , , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

[main, secondary] = [secondary, main];

console.log(main , secondary);


console.log(restaurant.order(2, 0));

// receive 2 return values from a function
const [starter1, main1] = restaurant.order(2,0);
console.log(starter1 , main1);

const nessted = [2,5,6, [7,8]];

// const [i, , ,j] = nessted;
// console.log(i, j);

const [ i, , ,[j, k]] = nessted;
console.log(i,j,k);
 
// defult values
const[p=1,q=1,r=1] = [8, 9];
console.log(p,q,r);

*/

/*
const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];

console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
*/


// copy array

const mainMainCopy = [...restaurant.mainMenu];

// join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables arrays, strings, maps, sets, Not object
/*
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
*/

//real world example

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')]

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// object


const newResturant = {...restaurant, founder: 'Guiseppe', foundingYr: 1998,}

console.log(newResturant);

const resturantCopy = {...restaurant};
resturantCopy.name = 'Ristorante Roma';

console.log(restaurant.name)
console.log(resturantCopy.name);




// rest pattern and parameters

// SPREAD, because on Right side of = 
const arr2 = [1,2, ...[3,4]];

// rest, because on left side of =
const [a,b, ...other] = [1,2,3,4,5];

console.log( a, b, other);

const [Pizza, , Risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(Pizza, Risotto, otherfood);