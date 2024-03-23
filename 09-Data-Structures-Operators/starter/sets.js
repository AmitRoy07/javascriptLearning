'use strict';

const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(orderSet);

console.log(orderSet.size);

console.log(orderSet.has('pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

// orderSet.delete('Risotto');
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example

const staff = ['waiter', 'Chef', 'waiter', 'Manager', 'Chef', 'Manager'];

const staffUnique = new Set(staff);
console.log([...staffUnique]);

console.log(new Set(staff).size);
