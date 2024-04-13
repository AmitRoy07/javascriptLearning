'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (currency, index, map) {
  console.log(`${index}: ${currency}`);
});

// set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'Pound', 'USD']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (currency, index, map) {
  console.log(`${index}: ${currency}`);
});
