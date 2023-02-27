const _ = require('lodash');

// Задача11
// Дано два рядки. Чи можна перший рядок отримати з другим циклічним
// зрушенням?

const isCyclicShift = (str1, str2) => str1.length === str2.length ? (str2 + str2).indexOf(str1) !== -1 : false;
const isCyclicShiftLodash = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    return _.includes((str2 + str2), str1);
};

console.log(isCyclicShift("abc", "cab"));
console.log(isCyclicShift("hello", "lohel"));
console.log(isCyclicShift("coding", "dingco"));
console.log(isCyclicShift("hello", "world"));
console.log(isCyclicShift("abc", "acb"));

console.log(isCyclicShiftLodash("abc", "cab"));
console.log(isCyclicShiftLodash("hello", "lohel"));
console.log(isCyclicShiftLodash("coding", "dingco"));
console.log(isCyclicShiftLodash("hello", "world"));
console.log(isCyclicShiftLodash("abc", "acb"));