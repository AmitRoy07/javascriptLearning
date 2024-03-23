'use strict';
//////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// 1

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

// const underscoreCase = 'amit_roy';

// const camelCase = function (str) {
//   const text = document.querySelector('textarea').value;
//   const newArray = text.split('\n');
//   for (const [i, word] of newArray) {
//     const breakWord = word.toLocaleLowerCase().trim().split('_');
//     // console.log(breakWord);
//     const [first, last] = breakWord;

//     console.log(first + last[0].toUpperCase() + last.slice(1));
//   }
// };

const camelCase = function (str) {
  const text = document.querySelector('textarea').value;
  const newArray = text.split('\n');
  for (const [i, row] of newArray.entries()) {
    const [first, last] = row.toLowerCase().trim().split('_');
    const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
};

document.querySelector('button').addEventListener('click', camelCase);
