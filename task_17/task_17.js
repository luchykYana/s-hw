const _ = require('lodash');

// Задача17
// В заданому масиві найменший елемент помістити на перше місце,
//     найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву
// [1, 2, 3, 4, 5] -> [1, 3, 5, 4, 2]

const sort = (mas) => {
    const length = mas.length - 1, res = [];

    for (let i = 0, x = 0, y = length; i <= length; i++) {
        const min = Math.min(...mas);

        i % 2 ? res[y--] = min : res[x++] = min;
        mas.splice(mas.indexOf(min), 1);
    }

    return res;
}

const sortLodash = (mas) => {
    const sortedMas = _.sortBy(mas);
    const result = _.times(sortedMas.length, _.constant(0));
    let i = 0;
    let j = sortedMas.length - 1;
    _.forEach(sortedMas, (value, index) => {
        if (index % 2 === 0) {
            result[i++] = value;
        } else {
            result[j--] = value;
        }
    });
    return result;
}


console.log(sort([1, 6, 3, 5, 2, 7]));
console.log(sort([1, 2, 3, 4, 5]));
console.log(sort([1, 2, 1, -5, 3, 4,2, 56, 0, 5]));

console.log(sortLodash([1, 6, 3, 5, 2, 7]));
console.log(sortLodash([1, 2, 3, 4, 5]));
console.log(sortLodash([1, 2, 1, -5, 3, 4,2, 56, 0, 5]));


