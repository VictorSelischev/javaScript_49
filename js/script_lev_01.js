// alert('Молилась ли ты на ночь Десдемона?');
// const shouldRenew = confirm('Точно молилась?');
// console.log(shouldRenew);

// if (shouldRenew === true) {
//     const prayer = prompt('Введи название молитвы "Отче Наш"');
//     if (prayer === 'Отче Наш') {
//         alert('Спокойной ночи, любимая!');
//     } else {
//         alert('Ты умрешь!');
//     }
// } else {
//     alert('Ты умрешь!');
// }

// ---------------------------------
// const x = 5;
// console.log('Цена', x, 'грн.')
// console.log(Number('24'))
// console.log(Math.random());
// console.log(Number((Math.random() * (10 - 1) + 1).toFixed()));

// console.log(Math.sqrt (49))

// -----------------------------

// // 1. Попросить пользователя ввести число и сохранить в переменную
// let number;
// number = Number(prompt('Введите пожалуйста число'));
// console.log('Число: ', number);

// // 2. Попросить пользователя ввести степень и сохранить в переменную
// let power;
// power = Number(prompt('Введите пожалуйста степень'));
// console.log('Степень: ', power);

// // 3. Возвести число в степень и вывести на консоль
// const result = Math.pow(number, power);
// console.log('Результат: ', result);

// // Math.random() * (max - min) + min
// const max = 100;
// const min = 0;
// let random = Math.random() * (max - min) + min;
// random = Math.round(random);
// console.log('Случайное число от 0 до 100: ', random);

// console.log('Логическое И равно: ', 5 && NaN && 'qwerty');

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");


for (let i = 1; i <= 500; i += 50) {
    console.log(i);
}