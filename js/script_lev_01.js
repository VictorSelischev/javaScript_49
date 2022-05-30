// const x = 5;
// console.log('Цена', x, 'грн.')
// alert('Молилась ли ты на ночь Десдемона?');
// const shouldRenew = confirm('Точно молилась?');
// console.log(shouldRenew);

// console.log(Number('24'))
// console.log(Math.random());
// console.log(Number((Math.random() * (10 - 1) + 1).toFixed()));

// console.log(Math.sqrt (49))



// 1. Попросить пользователя ввести число и сохранить в переменную
let number;
number = Number(prompt('Введите пожалуйста число'));
console.log('Число: ', number);

// 2. Попросить пользователя ввести степень и сохранить в переменную
let power;
power = Number(prompt('Введите пожалуйста степень'));
console.log('Степень: ', power);

// 3. Возвести число в степень и вывести на консоль
const result = Math.pow(number, power);
console.log('Результат: ', result);

// Math.random() * (max - min) + min
const max = 100;
const min = 0;
let random = Math.random() * (max - min) + min;
random = Math.round(random);
console.log('Случайное число от 0 до 100: ', random);


// if (shouldRenew === true) {
//     const prayer = prompt('Введи название молитвы "Отче Наш"')
//     if (prayer === 'Отче Наш') {
//     alert('Спокойной ночи, любимая!');
//     // break;
//     }
//     }
// else {
//     alert('Ты умрешь!');
// }
