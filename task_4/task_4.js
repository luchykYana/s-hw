// Задача4
// Напишіть функцію, яка отримує масив цілих чисел і повертає масив
// середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

const averages = (arr) => arr.reduce((previousValue, currentValue, index, array) => {
    if (index < array.length - 1) {
        previousValue.push((currentValue + array[index + 1]) / 2)
    }
    return previousValue;
}, []);

console.log(averages([1, 3, 5, 1, -10]));