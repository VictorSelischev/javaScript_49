// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     case NaN:
//         alert('Вы ввели не число');
//     default:
//         alert('Не виконали умову!');
// }

// 1. Пользователь вводит данные в форму

let total = 0;

do {
    const number = prompt('Enter number > 100', '');

    if (number === null) {
        break;
    }
    if (Number.isNaN(Number(number))) {
        alert('Вы ввели не число');
        continue;
    }
    if (Number(number) < 100) {
        alert('Число меньше 100');
        continue;
    }

    total += Number(number);
    
} while (true);

console.log('Сумма ', total);

// -------------------

// for (let i = 0; i <= 5; i += 1) {
// console.log(i);
// if (i === 3) {
// console.log("Нашли число 3, прерываем выполнение цикла");
// break;
// }

//     console.log("Внутри цикла");

// }
// console.log("Лог после цикла");

// --------------------------------------------

// 2. Проверяем тип данных

// 3. Если это число совершаем операцию проверки на условие > 100
// 4. Если не число выводим 'Вы ввели не число'
// 5. При окончании ввода выводим сумму чисел

// const number = prompt('Enter number > 100', '');
// console.log(number);

// alert('Вы ввели число меньше 100');
// break;

// while (number >= 100) {
//     total = total + number;
//     +prompt('Enter number > 100')
// }

// alert('Вы ввели не число')

// console.log(`total sum ${total}`);
