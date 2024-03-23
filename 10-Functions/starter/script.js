'use strict';
// Default Parameters

const bookingArray = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // =---- ES6
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingArray.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', undefined, 200);
