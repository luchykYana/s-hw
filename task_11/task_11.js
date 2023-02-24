// Задача11
// Дано два рядки. Чи можна перший рядок отримати з другим циклічним
// зрушенням?

const isCyclicShift = (str1, str2) => str1.length === str2.length ? (str2 + str2).indexOf(str1) !== -1 : false;

console.log(isCyclicShift("abc", "cab"));
console.log(isCyclicShift("hello", "lohel"));
console.log(isCyclicShift("coding", "dingco"));
console.log(isCyclicShift("hello", "world"));
console.log(isCyclicShift("abc", "acb"));