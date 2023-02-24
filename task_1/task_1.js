// Задача1
// Ви повинні реалізувати функцію, яка повертає різницю між
// найбільшим та найменшим значенням у списку , отриманому як аргумент
// функції. Масив, який отримує функція як аргумент, може містити позитивні
// та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
// Спочатку масив буде поданий у невідсортованому вигляді.
// arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
// arr([16]) => 0

const findDifference = arr => arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);

console.log(findDifference([1, 2, 3, -4]));
console.log(findDifference([16]));
console.log(findDifference([4, -9, 2, 1, 45, -4, 0, 34]));