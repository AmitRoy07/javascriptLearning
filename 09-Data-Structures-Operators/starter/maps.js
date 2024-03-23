'use strict';

const rest = new Map();

rest.set('name', 'Classico Italino');
rest.set(1, 'london');
rest.set(2, 'paris');

console.log(rest);

rest
  .set('catagories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :D');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 28;
// const timing = rest.get(time > rest.get('open') && time < rest.get('close'));

// console.log(timing);

// console.log(rest.has('categories'));
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.delete(2);
// console.log(rest);

// console.log(rest.get(arr));

///////////////// maps_Iterator /////////////////////
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'try again'],
]);

console.log(question);

// convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('your AN answer'));
// console.log(answer);
// console.log(
//   `${
//     answer === question.get('correct')
//       ? `your answer is ${question.get(true)}`
//       : `your answer is ${question.get(false)}`
//   }`
// );

// convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
