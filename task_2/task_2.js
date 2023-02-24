// Задача2
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.

const filterWords = (str, length) => str.split(' ').filter(word => word.length > length);

console.log(filterWords('Sigma Software provides top-quality custom software development', 8));