'use strict';

const flight = 'Lh123';
const passenger = {
  name: 'John Smith',
  passport: 'passport',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh476';
  passenger.name = 'Mr.' + 'John Smith';
  if (passenger.passport === 'passport') {
    alert('checkin');
  } else {
    alert('wrong');
  }
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(passenger);
checkIn(flight, passenger);
