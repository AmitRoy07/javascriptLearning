let X = [45, 452, 2, 6, 10, 8, 18, 20, 30, 40];

const accedingOrder = function (arrValue) {
  let smallestNumber;
  let smallestToLargeNumberArray = [];

  for (let j = 0; j < arrValue.length; j++) {
    smallestNumber = arrValue[j];
    for (let i = 0; i < arrValue.length; i++) {
      if (arrValue[i] < smallestNumber) {
        smallestNumber = arrValue[i];
      }
    }
    arrValue.splice(arrValue.indexOf(smallestNumber), 1);

    smallestToLargeNumberArray.push(smallestNumber);
  }

  return smallestToLargeNumberArray;
};

// console.log(accedingOrder(X));

function sortArray(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      console.log(array.length - i - 1);
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

var numbers = [20, 5.2, -120, 100, 30, 0];
console.log(sortArray(X)); // [-120, 0, 5.2, 20, 30, 100]

// sortArray (array: number []){
//     let i, j, temp;
//     for(i=1;i<array.length;i++)
//     {
//       temp = array[i];
//       for(j = i-1;(temp < array[j]) && (j>=0);j--){
//         array[j+1] = array[j];
//       }
//       array[j+1] = temp;
//     }
//     return  array
//   }
