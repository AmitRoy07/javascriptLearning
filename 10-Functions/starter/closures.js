'use strict';

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount}`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// re-assign the f function
h();
f();

console.dir(f);

// example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`we are now boardPassengers ${n}`);
    console.log(`there are 3 group, each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
