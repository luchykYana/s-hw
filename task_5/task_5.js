// Задача5
// Створіть функцію, яка приймає рядок і повертає кількість (кількість)
// голосних, які у ній.
//     Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1

const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));

// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
//     Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd"
// removeABC("hello world!") ➞ null

const removeABC = (str) => /[abc]/i.test(str) ? str.replace(/[abc]/gi, '').replace(/\s+/g, ' ') : null;

console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));