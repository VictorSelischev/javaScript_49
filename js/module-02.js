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

const woods = ['beech', 'rowan', 'apple'];

for (let i = 0; i < woods.length; i += 1) {
  console.log(woods[i]);
}

const newWood = woods.length;
console.log(woods.length);

console.log('--------------------------');

const newWood2 = woods.unshift('oak');

for (let i = 0; i < woods.length; i += 1) {
  console.log(woods[i]);
}

console.log(newWood2);

console.log('--------------------------');

const newWood3 = woods.push('cherry');

for (let i = 0; i < woods.length; i += 1) {
  console.log(woods[i]);
}

console.log(newWood3);

