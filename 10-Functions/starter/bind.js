'use strict';

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};

lufthansa.book('123', 'amit');

const euroWIngs = {
  airline: 'EuroWings',
  iataCode: 'EN',
  bookings: [],
};

const book = lufthansa.book;

// dose not work
// book(23, 'bb');

// call method

book.call(euroWIngs, 23, 'Amit Roy');

// ------------ apply method -----------
// difference call and apply
// apply method not receive list of arguments instate it receive array of arguments

// Apply data
const flightData = [586, 'George'];

book.apply(euroWIngs, flightData);

// people do
book.call(lufthansa, ...flightData);

// bind method ------------

const bookEW = book.bind(euroWIngs);
const bookLH = book.bind(lufthansa);

bookEW(125, 'Steven Willson');

const bookEW23 = book.bind(euroWIngs, 23);
bookEW23('Steven Willson');
bookEW23('Totan Willson');

// with Event Listeners --------
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//   partial Application ---------------
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAt = addTax.bind(null, 0.1);

console.log(addVAt(100));
console.log(addVAt(23));

const addTax2 = rate => {
  return value => {
    return value + value * rate;
  };
};
const addVAt2 = addTax2(0.1);
console.log(addVAt2(100));
