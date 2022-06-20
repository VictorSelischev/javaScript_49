// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }





// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4




// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);

//   for (const key of keys) {
//         propCount += 1;
//   }


//   // propCount = keys.length;

//   return propCount;
//   // Change code above this line
// }





// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }







// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const array = [];


//   for (const product of products) {

//     // const keys = Object.keys(product);

//     // if (!keys.includes(propName)) {
//     //   return array;
//     // }
    
//     if (product.hasOwnProperty(propName)) {
    
//       array.push(product[propName]);
//       }
//   }

//   return array;

//   // Change code above this line
// }


// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));



// ✅ Логиески и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["Последнее королевство", "Страж снов"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Новая книга"));



const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {

    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    
    for ( let i = 0; i < this.potions.length; i += 1 ) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {

    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return this.potions;
      }
    }
      return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};


console.log("В лавке зелий есть такие зелья", atTheOldToad.getPotions());

console.log(`Имя "Stone skin" заменено на "Invulnerability potion"`, atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
console.log(`Добавляем зелье Invisibility`, atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(`Добавляем зелье Power potion`, atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(`Добавляем зелье Dragon breath`, atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(`Добавляем зелье Stone skin`, atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

console.log(`Удаляем Dragon breath из списка`, atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

