// const numbers = [1, 2, 3, 4, 5];


// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];



// function getExtremeElements(array) {
//   // Change code below this line
//   let newArray = [];

//   const firstElementArray = array[0];
//   const lastElementArray = array[array.length - 1];

//   console.log (newArray);

//   return newArray = [firstElementArray, lastElementArray];


  


//   // Change code above this line
// }





// function getExtremeElements(array) {
//   // Change code below this line
//   let newArray = []

//   const firstElementArray = array[0];
//   const lastElementArray = array[array.length - 1];

//   newArray[0] = firstElementArray;
//   newArray[1] = lastElementArray;

//   console.log (newArray);

//   return newArray;
  


//   // Change code above this line
// }




// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join()); // 'JavaScript,is,amazing'
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'





// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 1);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);



// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//   const allArray = firstArray.concat(secondArray);
//   const newArray = allArray.slice(0, maxLength);

//   return newArray;


//     // Change code above this line
// }
  


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 16));



// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// console.log(numbers);


//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     console.log(numbers);
//   }

  // Change code above this line
  // return numbers;
// }




// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// Вариант 1
// function getCommonElements(array1, array2) {
//   // Change code below this line

//   const newArray = [];

//   for (i = 0; i < array1.length; i += 1) {

//     for (j = 0; j < array2.length; j += 1) {
//       if (array1[i] === array2[j]) {
//         newArray.push(array1[i])
//       }
//     }

//   }

//   return newArray;

//  // Change code above this line
// }


// Вариант 2

// function getCommonElements(array1, array2) {
//   // Change code below this line

//   const newArray = [];

//   for (i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i])
//     }

//   }

//   return newArray;

//  // Change code above this line
// }




const string = 'объявляет цикл';
const stringArray = [];

for (const char of string) {
  // console.log(char);
  stringArray.push(char);
}

console.log(stringArray);