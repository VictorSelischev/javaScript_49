// function foo({ username } = {}) {
//     console.log(username);
// }

// foo();




// Task 6
// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    Jhon: 100,
    Ann: 160,
    Pete: 130,
}

console.log(getTotalSalariesValues(salaries))

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0


// Решение с помощью функциональных методов
const getTotalSalariesValues = (sal) => Object.values(sal).reduce((acc, el) => acc + el, 0);