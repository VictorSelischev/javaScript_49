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



function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line

  const allArray = firstArray.concat(secondArray);
  const newArray = allArray.slice(0, maxLength);

  return newArray;


    // Change code above this line
}
  


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 16));