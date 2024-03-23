'use strict';

/*

function calcAge(birthYear){
    const age = 2037 - birthYear;
    console.log(firstName);

    function printAge(){
        let output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var mil = true;
            const str = `ohh, and you r a millenial, ${firstName}`;
            console.log(str);

            function add(a , b){
                return a + b;
            }

            output = 'new output'
        }
        // console.log(add(4 , 8));
        console.log(mil);
        // console.log(str);
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'jonas';
calcAge(1991);
*/

/*
// hosting with veriable
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = '1991';


// hosting with function
// console.log(addDecl(5,5));
// console.log(addExprs(4,4));
// console.log(addArrow(4,4));


function addDecl (a, b){
    return a + b;
}

var addExprs = function (a, b){
  return a+ b;  
};

const addArrow = (a, b) => a + b;

// example
if(!numProducts) deletShoppingCard();

var numProducts = 10;

function deletShoppingCard(){
    console.log('all products deleted');
}
*/
/*

console.log(this);

const calcAge = function(birthday){
    console.log(2037 - birthday);
    console.log(this);
}
calcAge(1991);

const calcAgeArr = (birthday)=> {
    console.log(2037 - birthday);
    console.log(this);
}
calcAgeArr(1991);


const jonas = {
    year: 1991,
    calcAgeNew: function(){
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAgeNew();
*/


/*
funstion vs arrow 

var firstName = 'Matila'

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calaAge: function(){
        // console.log(this);
        console.log(2037 - this.year);
// solution one
        // const self = this;
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // };

        // solution 2
        const isMillenial = ()=> {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
            // console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () =>{
        console.log(this);
        console.log(`hey ${this.firstName}`)
    } ,
};
jonas.greet();
console.log(this.firstName);
jonas.calaAge();


// arguments Keyword
const addExpr = function (a, b){
    console.log(arguments);
    return a + b;
}
addExpr(2,5);

var addArrow = (a, b) => {
    return a + b;
}
*/

// let age = 30;
// let oldage = age;
// age = 31;
// console.log(age);
// console.log(oldage);

// const me = {
//     name: 'joans',
//     age: 30,
// }

// const friend = me;
// friend.age = 27;
// console.log('friend', friend);
// console.log('me' , me);


// primitives vs objective

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// copying object
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    familly: ['alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2)

jessicaCopy.lastName= 'davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.familly.push('Marry');
jessicaCopy.familly.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);