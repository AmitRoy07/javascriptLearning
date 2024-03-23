'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [firstWord, ...other] = str.split(' ');
  return [firstWord.toUpperCase(), ...other].join(' ');
};

// higher order function
const transFormer = function (str, fn) {
  console.log(str);
  console.log(fn(str));
  console.log(fn.name);
};

transFormer('javascript is the best!', upperFirstWord);
transFormer('javascript is the best!', oneWord);

// js uses callbacks all the time
['Amit', 'Martha', 'Adam'].forEach(high5 => console.log('A'));
