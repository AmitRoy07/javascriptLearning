'use strict';

const greet = function (greeting) {
  return function (message) {
    console.log(`${greeting} ${message}`);
  };
};

const greeterHey = greet('hello');

// console.log(greet('hello'));
// console.log(greeterHey('amit'));

// greet('hello')('amit');

const greet2 = greeting => {
  return message => {
    console.log(`${greeting} ${message}`);
  };
};

greet2('hello')('amit');
greet('hello')('jdj');
