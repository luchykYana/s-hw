// Задача12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися

const splitArray = (a) => (
    a.length % 2 === 0
        ? a.sort((x, y) => x - y)
            .reduce(([b, c], v, i) => i % 2 === 0 ? [b.concat(v), c] : [b, c.concat(v)], [[], []])
        : [[], []]
);


const a = [1, 11, 2, 9, 10, 4, 3, 8];
const [b, c] = splitArray(a);

console.log(b);
console.log(c);

// Можна також читабельнішим варіантом
const splitArray2 = (a) => {
    if (a.length % 2 !== 0) {
        throw new Error("Масив має непарну кількість елементів");
    }

    const [b, c] = a.sort((x, y) => x - y).reduce(([b, c], v, i) => {
        i % 2 === 0 ? b.push(v) : c.push(v);
        return [b, c];
    }, [[], []]);

    return [b, c];
}

const z = [1, 11, 2, 9, 10, 4, 3, 8, 0];
const [x, y] = splitArray2(z);

console.log(x);
console.log(y);


