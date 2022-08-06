const date = new Date();
const dateFirst = new Date(0);

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());

console.log(dateFirst);
console.log(date.getTime());

console.log("getDate(): ", date.getDate());

// Возвращает день недели от 0 до 6
console.log("getDay(): ", date.getDay());

// Возвращает месяц от 0 до 11
console.log("getMonth(): ", date.getMonth());

// Возвращает год из 4 цифр
console.log("getFullYear(): ", date.getFullYear());

// Возвращает час
console.log("getHours(): ", date.getHours());

// Возвращает минуты
console.log("getMinutes(): ", date.getMinutes());

// Возвращает секунды
console.log("getSeconds(): ", date.getSeconds());

// Возвращает миллисекунды
console.log("getMilliseconds(): ", date.getMilliseconds());



console.log("getUTCDate(): ", date.getUTCDate());

// Возвращает день недели от 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Возвращает месяц от 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Возвращает год из 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Возвращает час
console.log("getUTCHours(): ", date.getUTCHours());

// Возвращает минуты
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Возвращает секунды
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Возвращает миллисекунды
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

date.setFullYear(2040, 4, 8);

console.log(date);
console.log(Date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleTimeString());
console.log(date.toISOString());
