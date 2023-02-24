// Задача7
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.
//     Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

const reverseObject = (obj) => Object.entries(obj).reduce((acc, [key, value]) => ({...acc, [value]: key}), {});

console.log(reverseObject({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));