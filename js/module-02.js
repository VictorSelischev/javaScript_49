// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }





// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }





// const woods = ['beech', 'rowan', 'apple'];

// for (let i = 0; i < woods.length; i += 1) {
//   console.log(woods[i]);
// }

// const newWood = woods.length;
// console.log(woods.length);

// console.log('--------------------------');

// const newWood2 = woods.unshift('oak');

// for (let i = 0; i < woods.length; i += 1) {
//   console.log(woods[i]);
// }

// console.log(newWood2);

// console.log('--------------------------');

// const newWood3 = woods.push('cherry');

// for (let i = 0; i < woods.length; i += 1) {
//   console.log(woods[i]);
// }

// console.log(newWood3);



// Функциональное выражение (function expression)
// const multiply = function (x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// };

// console.log(multiply(2, 3, 5));
// console.log(multiply(3, 7, 8));



const woods = ['beech', 'rowan', 'apple', 'oak', 'cherry'];
console.log(woods);
console.table(woods);

const woodsLast = woods.length - 1;
console.log('Индекс последнего элемента: ', woodsLast);

woods[woodsLast] = 'birch';
console.table(woods);
