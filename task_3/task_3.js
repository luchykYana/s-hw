// Задача3
// Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
// solution('abc', 'bc') => true
// solution('abc', 'd') => false

const solution = (str, end) => str.endsWith(end);

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));