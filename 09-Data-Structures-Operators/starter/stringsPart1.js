'use strict';

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);

// console.log('b25600'[0]);
// console.log(airline.length);

// console.log(airline.indexOf('a'));
// console.log(airline.lastIndexOf('a'));
// console.log(airline.lastIndexOf('Port'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got a middle seat');
  } else console.log('you got lucky');
};

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCapitalized =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCapitalized);

// comparing emails
const email = 'test@example.com';
const logEmail = '  test@example.com';

// replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');

// console.log(priceUS);

const announcement = 'All passenger come to barding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replaceAll(/door/g, 'gate'));

// booleans
const planes = 'Air 320neo';
// console.log(planes.includes('A'));
// console.log(planes.startsWith('Air'));

if (planes.startsWith('Air') && planes.endsWith('neo')) {
  console.log('part of the new Air bus');
}

// Practice exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('welcome aboard');
  }
};

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Sock and camera');
// checkBaggage('Got some snacks and a gun for protection');

// ----------- splitter & join--------

console.log('a+very+string'.split('+'));
console.log('Amit Roy'.split(' '));

const [firstName, lastName] = 'jonas Schmedtmann'.split(' ');

console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const passengers = 'jessica ann smith davis';

const capitalize = function (string) {
  console.log(
    string
      .split(' ')
      .map(capitalize => capitalize[0].toUpperCase() + capitalize.slice(1))
      .join(' ')
  );
};
capitalize(passengers);
// console.log(passengers.indexOf('a'));

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const lastFour = str.slice(-4);
  console.log(lastFour.padStart(str.length, '*'));
};

maskCreditCard(415578964523);
maskCreditCard('25846168415133516');

// repeat
const message2 = 'Bad weather... All Departures Delayed..';

console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'p'.repeat(5)}`);
};

planesInline(5);
