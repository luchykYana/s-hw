// Задача6
// Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
//     Приклад:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"

const difference = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);

console.log(difference([1, 2, 3], [100, 2, 1, 10]));