// Задача8
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
//     Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.
//     Приклад:
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
// Обмеження: Об'єкт завжди повинен містити елементи, сума предметів
// завжди повинна бути більшою за страховку

const calculateDifference = (items, insurance) => Math.max(Object.values(items).reduce((total, value) => total + value, 0) - insurance, 0);

console.log(calculateDifference({"baseball bat": 20}, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));