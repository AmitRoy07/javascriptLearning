'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUsd2 = movements.map(mov => mov * eurToUsd);

console.log(movementsUsd2);

// for loop

const movUsd = [];
for (let mov of movements) {
  movUsd.push(mov * eurToUsd);
}

console.log(movUsd);

const movementsUsd3 = movements.map((mov, i) => {
  if (mov >= 0) {
    return `mov number ${i + 1} is an adult, and is ${mov} years old`;
  } else {
    return `mov number ${i + 1} is still a puppy 🐶`;
  }
});

console.log(movementsUsd3);
