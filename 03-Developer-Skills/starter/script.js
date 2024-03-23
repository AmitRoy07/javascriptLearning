// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);

// const temperatues = [
//     3,-2,-6,-1, 'error', 9, 13, 17 , 15, 14 , 9,5
// ];
// const temperatuestwo = [
//     5,-6,-55,-1, 'error', 3, 423, 75 , 2, 14 , 9,5
// ];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = function (temps){
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        const currrentTemp = temps[i];
        if(typeof currrentTemp !== 'number') continue;

        if(currrentTemp > max){
            max = currrentTemp;
        }
        if(currrentTemp < min){
            min = currrentTemp;
        }
    }
    console.log(max, min);
    return max - min; 
};

const amplitutde = calcTempAmplitude(temperatues);
console.log(amplitutde);
*/

// two arrey 

/*
const calcTempAmplitudenew = function (t1, t2){
    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        const currrentTemp = temps[i];
        if(typeof currrentTemp !== 'number') continue;

        if(currrentTemp > max){
            max = currrentTemp;
        }
        if(currrentTemp < min){
            min = currrentTemp;
        }
    }
    console.log(max, min);
    return max - min; 
};

const amplitutdenew = calcTempAmplitudenew(temperatues , temperatuestwo);
console.log(amplitutdenew);

*/


/*
const temperatueswo = [
    5,-6,-55,-1, 'error',true, 3, 423, 75 , 2, 14 , 9,5
];

for(let i = 0; i <= temperatueswo.length - 1; i++){
    
    if(typeof temperatueswo[i] !== 'number') {
        // continue;  
        // break;
        console.log(`skip the (${temperatueswo[i]})`);
        continue;
    };
    console.log(temperatueswo[i]);
}
 */

// const temperature1 = [17,21,23];
// const temperature2 = [12, 5, -5, 0, 4];
// const totalTemp = temperature1.concat(temperature2);
// const printForecast = function (arr){
//     let str = '';
//     for(let i = 0; i <= arr.length -1; i++){
//         str += `${arr[i]}C in ${i + 1} days ...`
//     }
//     console.log('...'+str);
// };

// const temperature1 = [17,21,23];
// const temperature2 = [12, 5, -5, 0, 4];
// const totalTemp = temperature1.concat(temperature2);
// const printForecast = function (arr){
//     for(let i = 0; i <= arr.length -1; i++){
//         console.log(`${arr[i]}C in ${i + 1} Days...`);
//     }
// };

// const value = printForecast(totalTemp);
// var str = array.join(' ')+'.';
// console.log(str);

// var array = [0,1,1,2,3,5,8,13,21,34,55];
// var str = array.join('... ') + '.';
// console.log(str);


// debdugging
const measureKelvin = function(){
    const measurment = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:')),
    };

    console.log(measurment);
console.log(measurment.value);

// console.log();
// console.table();
// console.warm();
// console.error();

debugger; 
    const kelvin = measurment.value + 273;
    return kelvin;
}

console.log(measureKelvin());