// let js = 'amazing';
// console.log(40+8+23-10);

// console.log('jonus');
// console.log(23);

// let firstName = 'bob';

// console.log(firstName);

// let PI = 3.1415;

// let myFirstJob = 'programmer';
// let myCurrentJob = 'teacher'; 

true;

let javascrpyIsFun = true;
// console.log(true);

// console.log(typeof true);
// console.log(typeof 99);
// console.log(typeof javascrpyIsFun);
// console.log(typeof 'jonas');

// javascrpyIsFun = 'yes!';
// console.log(typeof javascrpyIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);


// console.log(typeof null);
 

// let age = 30;
// age = 40;


// const birthYear = 1991;
// birthYear = 1990;

// const job;
// var job = 'programmer';
// job = 'teacher';

// lastName = 'Schmedtman';
// console.log(lastName); 

// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2**3);
// 2** 3 means to the power of 3 = 2 * 2 * 2 

// const firatName = 'Amit';
// const lastName = 'Roy';
// console.log(firatName + ' ' + lastName);

//  let x = 10 + 5; // 15 
//  x += 10; // x=x + = 25
//  x *= 4;
//  x++;
//  x--;
//  x--;
//  console.log(x)

//  console.log(ageJonas > ageSarah);
//  console.log(ageSarah >= 18);

//  const isFullAge = ageSarah >= 18;

//  console.log(now - 1991 > now -2018);

// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2020;

// console.log(now - 1991 > now -2018);

// console.log(25 - 10 -5);

// let x, y; 
// x = y =25-10-5;
// console.log(x, y);

// const avarageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, avarageAge);

// test2
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBmi = markWeight / (markHeight * markHeight);
const johnkBmi = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBmi > johnkBmi;
console.log(markBmi + " mark" , johnkBmi + " john");
console.log(markHigherBMI);

// test2
// const markWeight2 = 95;
// const markHeight2 = 1.88;

// const johnWeight2 = 85;
// const johnHeight2 = 1.75;

// const markBmi2 = markWeight2 / (markHeight2 * markHeight2);
// const johnkBmi2 = johnWeight2 / (johnHeight2 * johnHeight2);

// const markHigherBMI2 = markBmi2 > johnkBmi2;
// console.log(markBmi2 + " mark" , johnkBmi2 + " john");
// console.log(markHigherBMI2);


/*
const firstName = 'jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year -birthYear) + ' years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);

console.log('String with \n\ multiple \n\ lines');
console.log(`String
multiple
lines`);
*/


// const age = 15;

// if(age >= 18) {
//     console.log('sarah can start driving license❤️❤️')
// }else{
//     const yearsleft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsleft} years 👍`)
// }

// const birthYear = 2200;
// let century;

// if( birthYear <= 2000 ){
//      century = 20;
// }else {
//      century = 21;
// }
// console.log(century);


/*
const markWeight2 = 95;
const markHeight2 = 1.88;

const johnWeight2 = 75;
const johnHeight2 = 1.75;

const markBmi2 = markWeight2 / (markHeight2 * markHeight2);
const johnkBmi2 = johnWeight2 / (johnHeight2 * johnHeight2);

if(markBmi2 > johnkBmi2){
    console.log(`"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    "Mark's BMI ${markBmi2} is higher than John's ${johnkBmi2}!"`)
}else{
    console.log(`mark bmi is less`);
}
*/

// type convertion

/*
const inputYesr = '1991';
console.log(Number(inputYesr));
console.log(Number(inputYesr) + 18);
 
console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23)
*/
// type coercion
/*
console.log('I am ' + 23 + ' year old');
console.log('I am ' + '23' + ' year old');

console.log('23' - '10' - 3);
console.log('23' / 2);

let n = '1' + 1;
n = n -1;
console.log(n);
*/

// 5 falsy valus: 
// 0
//  ""
//  undefined
//  null
//  NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(0));

// const money = 100;

// if (money){
//     console.log(`Don't spend it all`);
// }else{
//     console.log('you Should get a job');
// }


// let height = 0;
// if(height >= 0){
//     console.log(`Yay height is defined`);
// }else{
//     console.log("height is undefined");
// }


/*
const age = 23;

if(age === 18) console.log('you r adult');

const favourite = Number(prompt('what is your favourite number'));
console.log(favourite);

if(favourite === 23){
    console.log('cool number')
}else if (favourite === 7){
    console.log(`7 is also a cool number`);
}else{
    console.log('nuber is not cool');
}
if(favourite !== 23) console.log('why not 23');
*/

// boolean logic

// const hasDriverLicense = false;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(!hasDriverLicense);
// console.log(hasDriverLicense || hasGoodVision);

// const shouldDrives = hasDriverLicense && hasGoodVision;

// if(shouldDrives){
//     console.log('should drive');
// }else{
//     console.log('someone eles drive');
// }

// const isTired = false;
// console.log(hasDriverLicense || hasGoodVision || isTired);

// if(hasDriverLicense && hasGoodVision && !isTired){
//     console.log('should drive');
// }else{
//     console.log('someone eles drive'); 
// }

// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// const dolphins = (96 + 108 + 129) / 3;
// const koalas = (88 + 91 + 140) / 3;

// bonus 1
// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 123) / 3;
// // bonus 2
// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 106) / 3;

// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (96 + 108 + 89) / 3;

// console.log(`dolphine avg (${dolphins})
// koales avg (${koalas})`)

// if(dolphins && koalas <= 100){
//     console.log(`no winner`);
// }else if(dolphins >= 100 && koalas >= 100){
//     if(dolphins > koalas){
//         console.log(`dolphins wins the races`);
//     }else if(dolphins < koalas){
//         console.log('koalas wins the races');
//     }else if(dolphins === koalas){
//         console.log(`it is a draw`);
//     }
// }

// if(dolphins > koalas && dolphins >= 100){
//     console.log(`dolphins wins the races`);
// }else if(dolphins < koalas && koalas >= 100){
//     console.log('koalas wins the races');
// }else if(dolphins === koalas && dolphins >= 100 && koalas >= 100){
//     console.log(`it is a draw`);
// }else{
//     console.log('No one winner')
// }

// switch statement

// const day = 'thursday';

// switch (day){
//     case 'monday':
//     console.log(`plan course structure`);
//     console.log(`go to coding meet up`);
//     break;
//     case 'tuesday':
//     console.log('prepare theroy videos');
//     break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code exaples');
//     break;
//     case 'friday':
//         console.log('record video');
//     break;
//     case 'satrday':
//     case 'sunday':
//         console.log('enjoy weekend');
//     break;
//     default:
//         console.log('not a valid days');
// }


// if(day === 'monday'){
//     console.log(`plan course structure`);
//     console.log(`go to coding meet up`);
// }else if (day === 'tuesday'){
//     console.log('prepare theroy videos');
// }else if(day === 'wednesday' || 'thuesday'){
//     console.log('write code exaples');
// }else{
//     console.log('not a valid days');
// }

//  Statement And Expressions

// 3 + 4
// 1991
// true && false && !false 

// if(23>10){
//     const str = '23 is bigger';
// }

// console.log(`i'm ${2037 - 1991} Year old`);



// conditional operator
// alos called ternary operator 

// const age = 23;
// age >= 18 ? console.log('i like to drink wine .💕') : 
// console.log('i like to drink water .💕');


// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = 'wine';
// }else{
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);

// const bill = 275;
// const mintip = (bill /100) * 15;
// const maxtip = (bill /100) * 20;

// console.log(mintip + bill);
// console.log(bill + mintip);
// const tip = bill <= 300 && bill >= 50 ? console.log(`normal tip ${bill + mintip}`) : console.log(`abnormaol tip ${bill + maxtip}`);
