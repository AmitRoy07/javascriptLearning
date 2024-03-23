'use strict';

// let hasDrivesLicense = false;
// const passTest = true;

// if(passTest ) hasDrivesLicense = true;
// if (hasDrivesLicense) console.log('i can drive');

// const interface = 'Audio';

// function logger (){
//     console.log(`my name is jonas`);
// }

// calling , running , invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// fruitProcessor(5 , 0); 
// const applesJuice = fruitProcessor(5 , 0);
// console.log(applesJuice);
// console.log(fruitProcessor(5 , 0));

// const appleOrangesJucie = fruitProcessor(2, 4);
// console.log(appleOrangesJucie);


// function calcAge1(birthYear){
//     const age = 2037 -birthYear;
//     return;
// }

// Function declaration
/*
function calcAge1(birthYear){
    return 2037 -birthYear;
}

// Function expression
const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear){
    return 2037 -birthYear;
}
const age2 = calcAge2(1991)

console.log(calcAge2(1992), age2);
*/


// arrow funtion
//  const calcAge3 = birthYear => 2037 - birthYear;

//  const age3 = calcAge3(1991);
//  console.log(age3);

// const yearUntilRetiret = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearUntilRetiret(1991, "Amit"));
// console.log(yearUntilRetiret(1998, "bob"));

/*
function cutFrruit(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applepices = cutFrruit(apples);
    const orangespices = cutFrruit(oranges);

    const juice = `Juice with ${applepices} apples and ${orangespices} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

// const calaAge = function (birthYear){
//     return 2037 - birthYear;
// }


// const yearUntilRetiret = function (birthYear, firstName) {
//     const age = calaAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }else{
//         console.log(`${firstName} retired`);
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearUntilRetiret(1991 , 'jonas'));
// console.log(yearUntilRetiret(1950 , 'jonas'));

/*

const calcAvarage = (value1, value2, value3) => {
    // const dolphinsAvarages = (value1 + value2 + value3) / 3;
    // const KoalasAvarages = (value1 + value2 + value3) / 3;
    return (value1 + value2 + value3) / 3;
}
// console.log(calcAvarage(3,4,5));

let dolphinsAvarages = calcAvarage(44, 23, 71);
let KoalasAvarages = calcAvarage(65, 54, 49);

// console.log(dolphinsAvarages, KoalasAvarages);

const Checkwinner = function(dolphinsAvarages, KoalasAvarages){
    if(dolphinsAvarages >= 2*KoalasAvarages){
        console.log(`dolphins is the winner 
        (${dolphinsAvarages} vs ${KoalasAvarages})`)
    }else if(dolphinsAvarages*2 <= KoalasAvarages){
        console.log(`koalas is the winner 
        (${dolphinsAvarages} vs ${KoalasAvarages})`);
    }else{
        console.log(`no one's winnes`);
    }
}

console.log(Checkwinner(dolphinsAvarages , KoalasAvarages));
Checkwinner(56, 221);

// test 2
dolphinsAvarages = calcAvarage(85, 54, 41);
KoalasAvarages = calcAvarage(23, 34, 27);

console.log(Checkwinner(dolphinsAvarages , KoalasAvarages));

*/
/*
const friend1 = 'amit';
const friend2 = 'steven';

const friends = ['amit', 'steven', 'petter'];
console.log(friends);

const y = new Array(1991, 19984, 2000, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);

// const amit = ['amit', 'Roy', 1998 -2021, y];
// console.log(amit);

// exercise
const calaAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1991, 1994, 2000, 2020];

const age1 = calaAge(years[1]);
const age2 = calaAge(years[0]);
const age3 = calaAge(years[years.length - 1]);
console.log(age1, age2 , age3);

const agess = [calaAge(years[1]), calaAge(years[0]), calaAge(years[years.length - 1])];
console.log(agess);
*/
/*
const friends = ['amit', 'steven', 'petter'];

// add element 
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove element
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('petter'));
console.log(friends.includes('petter'));
console.log(friends.includes('bob'));

if (friends.includes('bob')){
    console.log(`you have a friend called peter`);
}else{
    console.log('you do not have that name friend');
}
*/
// const mintip = (bill /100) * 15;
// const maxtip = (bill /100) * 20;
// const bill = 275;

/*
const bills =[125, 555, 44];


const calcTip =  (bill) => {
    if(bill <= 300 && bill >= 50){
        return bill *0.15;   
    }else{
        return bill *0.20;
    }
}

const tip =[calcTip(bills[0]),calcTip(bills[1]),
    calcTip(bills[2])];
const total = [tip[0]+ bills[0],tip[1]+ bills[1],
tip[2]+ bills[2]];
console.log(tip);
console.log(total);
*/

/*
const jonas = {
    firstName: 'Amit',
    lastName: 'Roy',
    age: 23,
    job: 'UI/Ux designer',
    friends: ['michael', 'joan', 'peter']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
*/


// const interested = prompt(`What do you want to know?`);
// if(jonas[interested]){
//     console.log(jonas[interested]);
// }else{
//     console.log('wrong request');
// }

// jonas.location ="India";
// jonas['twitter'] = '@amitRoy'
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

/*
const jonas = {
    firstName: 'Amit',
    lastName: 'Roy',
    age: 1991,
    job: 'UI/Ux designer',
    friends: ['michael', 'joan', 'peter'],
    driverLicense: true,

    // calvAge: function(birthYear){
    //     return 2097 - birthYear;
    // }

    // calvAge: function(){
    //     console.log(this);
    //     return 2097 - this.age;
    // }

    calvAge: function(){
        this.age = 2037 - this.age;
        return this.age;
    },

    // getSummary: function(){
    //     if(this.driverLicense){
    //         console.log(`${jonas.firstName} is a ${jonas.age}-year old Teacher , and he has a driver's license`);

    //     }else{
    //         console.log(`${jonas.firstName} is a ${jonas.age}-year old Teacher , and he has no driver's license`);
    //     }
    // }

    getSummary : function(){
        return `${jonas.firstName} is a ${jonas.calvAge()}-year old Teacher , and he has ${this.driverLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calvAge());

console.log(jonas.age);
console.log(jonas.getSummary());*/
// challenge

/*
const mark ={
    fullName: 'mark',
    height: 1.69,
    weight: 78,

    bmiCalc: function(){
        debugger
        this.bmi = this.weight / this.height**2;
        return this.bmi;
    }
}

console.log(mark.bmiCalc()); // value right
console.log(mark.bmiCalc());
const john ={
    fullName: 'john',
    height: 1.95,
    weight: 92,
    bmiCalc: function(){
        debugger
        this.bmi = this.weight / this.height**2;
        return this.bmi;
    }
}


console.log(mark.bmiCalc()); // value wrong
console.log(john.bmiCalc());

console.log(`${mark.fullName} bmi ${mark.bmiCalc()} ${mark.bmiCalc() > john.bmiCalc() ? 'is' : 'is not'} higher than ${john.fullName} ${john.bmiCalc()}.`)
*/


// console.log('Lifting weight repetation 1');
// console.log('Lifting weight repetation 2');
// console.log('Lifting weight repetation 3');
// console.log('Lifting weight repetation 4');

// for loop keeps running while condition is true
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weight repetation ${rep}`);
// }

// const jonas = [
//      'Amit',
//      'Roy',
//      23,
//     'UI/Ux designer',
//      ['michael', 'joan', 'peter']
// ];

//
/*
for(let i = jonas.length - 1 ; i >=0; i-- ){
    console.log(`${jonas[i]}`);
    // console.log(jonas.length);
}

for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`------------- start ${exercise}`);
    for(let rep = 1 ; rep < 6; rep++){
        console.log(`lefting weight ${rep}`);
    }
}
*/

// whille


// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weight repetation ${rep}`);
// }


// let rep = 1;

// while(rep <= 10){
//     console.log(`while weight repetation ${rep}`);
//     rep++;
// }

/*
let dice = Math.trunc( Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc( Math.random() * 6) + 1;
    if(dice === 6){
        console.log(`loop is about to end...`);
    }
}
*/
/*
const bills =[
    22,295,176,440,37,105,10,1100,86,52
];
const tips = [];
const totals = [];

const calcTip =  (bill) => {

    if(bill <= 300 && bill >= 50){
        return bill *0.15;   
    }else{
        return bill *0.20;
    }
}

// console.log(tip);
// console.log(total);
console.log(calcTip(bills[1]));

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAvarage = function(arr){
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

calcAvarage([2,3,5]);
console.log(calcAvarage(totals));
*/

/*
const bills =[
    22,295,176,440,37,105,10,1100,86,52
];
const tips = [];
const totals = [];

const calcTip =  (bill) => {
    if(bill <= 300 && bill >= 50){
        return bill *0.15;   
    }else{
        return bill *0.20;
    }
}

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills, tips, totals);

const calcAerage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++ ){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAerage(tips));
console.log(calcAerage(totals));
*/


