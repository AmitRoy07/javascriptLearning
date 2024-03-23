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
lufthansa.book(123, 'amit');
lufthansa.book(123, 'amit');

console.log(lufthansa);

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
console.log(euroWIngs);

book.call(lufthansa, 238, 'Amimarryt Roy');

// ------------ apply method -----------
// difference call and apply
// apply method not receive list of arguments instate it receive array of arguments

// Apply data
const flightData = [586, 'George'];

book.apply(euroWIngs, flightData);

// people do
book.call(lufthansa, ...flightData);
